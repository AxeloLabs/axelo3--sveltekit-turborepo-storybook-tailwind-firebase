import { CONST__DB_COLLECTION__blog } from '$config/db/firebase/CONST__DB__colletions';
import { upload } from '$utils/api/db/firebase/API__firebaseStorage';
import {
	isEntityEvent,
	isEntityEvents,
	isEntityInputValue,
	isEntityNotIv,
	isEntityPosts
} from '$utils/type/guards';
import { get, writable, type Writable } from 'svelte/store';
import { crudCMD__clearCollection } from '../lib/utils/api/db/firebase/API__firestoreCrud';
import {
	serviceCMD__add_newOrExistingId,
	serviceCMD__adds_newOrExistingId,
	serviceQUERY__getAllCollection_Sorted
} from '../lib/utils/api/db/firebase/API__firestoreServices';
/**
 
 * all manipulation with the store are defined here
 * TODO - POSSIBLE store dans cette couche (couche ACTION)
 * TODO - pas de crud_db call dans cette couche: c est SERVICE qui bind la couche STORE avec la couche DB
 *
 */
// -3
// -3 ACTORS
// -3
/**
 * STORE_CONTENT -- generally, will get the data returned by a db operation -- is the global state of the app - just a list of the elements to display in the UI
 * STORE_DB -- buffer (tmp memory) that represent what needs to be updated to the db -- is used when operations needs to be done with the DB
 */

export const STORE__CONTENT: Writable<T_ENTITIES[]> = writable([]);
export const STORE__DB: Writable<I_STORE__FORM<T_ENTITIES, T_DTOS>> = writable({
	collection: undefined,
	formAddInputs: undefined,
	datasetReset: undefined
});
// -3
// -3 query
// -3 ACTION__getAllSorted = async <T extends T_ENTITIES>(collection)
// -3
// -3 cmd
// -3 ACTION__addEntity = async ()
// -3 ACTION__delItem = async (pos)
// -3 ACTION__save = async ()
// -3 ACTION__reset_inject = async ()
// -3
// -0
// -0 QUERY (CQRS)
// -0
export const ACTION__getAllSorted = async <T extends T_ENTITIES>(collection) => {
	STORE__CONTENT.set(await serviceQUERY__getAllCollection_Sorted<T>(collection, true));
};
// -1
// -1 CMD (CQRS)
// -1
export const ACTION__addEntity = async () => {
	console.debug('🌎🏎️✅ click >> on:add 1 🟡');
	const error = {
		pos: 0,
		tag: 'error-bro',
		label: 'error-bro',
		value: 'error-bro'
	};

	let entity;

	if (isEntityPosts(get(STORE__CONTENT))) {
		// 1 BLOG
		const post: I_DTO__post = {
			titlePost: structuredClone(get(STORE__DB)?.formAddInputs[0]) ?? error,
			// slug: structuredClone(get(STORE__DB)?.formAddInputs[1]) ?? error,
			body: structuredClone(get(STORE__DB)?.formAddInputs[2]) ?? error,
			createdAt: Date.now() // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
		};
		entity = post;
	} else if (isEntityEvents(get(STORE__CONTENT))) {
		// 0 EVENT
		const event: I_DTO__event = {
			titleEvent: structuredClone(get(STORE__DB)?.formAddInputs[0]) ?? error,
			// slug: structuredClone(get(STORE__DB)?.formAddInputs[1]) ?? error,
			body: structuredClone(get(STORE__DB)?.formAddInputs[2]) ?? error,
			date: structuredClone(get(STORE__DB)?.formAddInputs[3]) ?? error,
			image: structuredClone(get(STORE__DB)?.formAddInputs[4]) ?? error,
			createdAt: Date.now() // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
		};
		entity = event;
	}

	// we must add it in the DB, before the UI
	const postId = await serviceCMD__add_newOrExistingId(CONST__DB_COLLECTION__blog, entity);
	const post2 = { ...entity, idDoc: postId };

	// REMETTRE
	STORE__CONTENT.set([...get(STORE__CONTENT), post2]);

	get(STORE__CONTENT).sort((a, b) => {
		// if (isEntityEvent(a) && isEntityPosts(b))
		if (isEntityNotIv(a) && isEntityNotIv(b)) return a.createdAt >= b.createdAt ? -1 : 1;
		return -1;
	});

	// tip: reset form
	get(STORE__DB)?.formAddInputs.forEach((itm) => {
		console.debug('reseted');
		itm.value = ''; // hack - refresh ui
	});
	// console.dir(get(STORE__DB)?.formAddInputs);

	STORE__DB.set(get(STORE__DB)); // hack-ui -- mank refresh

	console.debug('c 🌎🏎️✅ click << on:add 2 🟨end, arr', get(STORE__DB));
};
// -1
export const ACTION__save = async () => {
	if (!get(STORE__DB)?.collection || !get(STORE__CONTENT)) return;
	console.debug('🌎🏎️✅ click >> on:save 1 🟡');
	// if (!confirm('Enregistrer les modifications ?')) return;
	// openDialog('ENREGISTRER LES MODIFICATIONS', 'Etes vous sure ?');
	// if (get(STORE__UI_ISOPEN_dialog).answer !== 'yes') return;
	await createStorageUrl(get(STORE__CONTENT));
	//
	// tip: clean blob
	// for await (const item of get(STORE__CONTENT)) {
	// 	if (isEntityInputValue(item)) {
	// 		if (item.tag === 'file' && item.blobs) {
	// 			// IMMUABLE MON OEIL !!! TODO
	// 			delete item.blobs;
	// 		}
	// 	} else if (isEntityEvent(item)) {
	// 		if (item.image.tag === 'file' && item.image.blobs) {
	// 			// IMMUABLE MON OEIL !!! TODO
	// 			delete item.image.blobs;
	// 		}
	// 	}
	// }
	// axlog(store, $page.url.pathname, 'SAVE', false, 'DEBUG-AVANT-SAVE');
	await serviceCMD__adds_newOrExistingId(get(STORE__DB)!.collection, get(STORE__CONTENT));
	//
	console.debug('🌎🏎️✅ click << on:save 2 🟨');
	return;

	// -3 UPLOAD STORAGE ON FIREBASE
	async function createStorageUrl(arr: T_ENTITIES[]) {
		// if (!arr) return;
		//
		// for await (const item of store) {

		for (let ii = 0; ii < arr.length; ii++) {
			// for (let item of arr) {
			const item = arr[ii];
			let urlStorage = 'N/A';
			// we always just have ONE FILE

			// STATIC
			if (isEntityInputValue(item, false)) {
				if (item.tag === 'file' && item.blobs) {
					// TODO - A EVITER, CA DEVRAIT ALLER DS COUCHER SERVICE, CAR PLUS PROCHE DB
					urlStorage = await upload(item.blobs);
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					// IMMUABLE MON OEIL !!! TODO
					item.value = urlStorage;
					delete item.blobs;
				}
			}
			// DYN
			else if (isEntityEvent(item, false)) {
				// console.log('>>>>>>> entity is event');
				if (item.image.tag === 'file' && item.image.blobs) {
					// TODO - A EVITER, CA DEVRAIT ALLER DS COUCHER SERVICE, CAR PLUS PROCHE DB
					urlStorage = await upload(item.image.blobs);
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					// IMMUABLE MON OEIL !!! TODO
					item.image.value = urlStorage;
					delete item.image.blobs;
				}
			}
		}

		return;
	}
};
// -1
export const ACTION__reset_inject = async () => {
	if (!get(STORE__DB) || !get(STORE__DB)?.collection) {
		console.debug('ERROR: collection is undef');
		return;
	}
	console.debug('🌎🏎️✅ click >> on:inject 1 🟡');
	if (!confirm('Effacer toute les donnees et injecter DEFAULT ?')) return;

	// 2 DB ops
	await crudCMD__clearCollection(get(STORE__DB)!.collection);
	// 2
	await serviceCMD__adds_newOrExistingId(get(STORE__DB)!.collection, get(STORE__DB)!.datasetReset);
	// 2
	// UI ops -- hack refresh
	STORE__CONTENT.set(await serviceQUERY__getAllCollection_Sorted(get(STORE__DB)!.collection, true));

	console.debug('🌎🏎️✅ click << on:inject 2 🟨');
};
// -1
export const ACTION__delItem = async (pos) => {
	console.debug('🌎🏎️✅ click >> on:del 1 🟡', get(STORE__CONTENT), pos);

	if (!get(STORE__CONTENT) || !Array.isArray(get(STORE__CONTENT)) || pos === undefined) return;
	if (confirm("Supprimer l'article ?")) {
		// guard
		// if (isEntity(get(STORE__CONTENT)[pos])) {
		// open = false; // tip: HACK - becoz, the click on the fab will also click on the panel->it will open the panel, and if closed, wil open another panel
		get(STORE__CONTENT).splice(pos, 1);
		// refresh (can do diferently - TODO - juste genericStore)
		STORE__CONTENT.set([...get(STORE__CONTENT)]); // refresh ui -- becoz es-lint (essaie desactive)
		// }
	}
	console.debug('🌎🏎️✅ click << on:del 2 🟨');
};

// -2
// -2 END
// -2
