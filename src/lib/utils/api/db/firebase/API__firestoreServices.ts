import { ACTION__STORE_FRAME__openSnack } from '$ui/B-atomic/SnackController';
import {
	crudCMD__addExistingId,
	crudCMD__addNew,
	crudQuery__getAllCollection
} from '$utils/api/db/firebase/API__firestoreCrud';
import { isEntity, isEntityInputValues } from '$utils/type/guards';
import { serverTimestamp, type CollectionReference } from 'firebase/firestore';
/**
 * It is a wrapper above crud db request
 */
// -3
// -3 query
// -3 serviceQUERY__getAllCollection_Sorted = async <T extends T_ENTITIES>(col: CollectionReference<T>, isSorted = false)
// -3
// -3 cmd
// -3 serviceCMD__adds_newOrExistingId      = async <T extends T_ENTITIES, U extends T_DOMAIN>(col: CollectionReference<T>, arr: U[])
// -3 serviceCMD__add_newOrExistingId       = async <T extends T_ENTITIES, U extends T_DOMAIN>(col: CollectionReference<T>, entity: U)
// -3
// -0
// -0 QUERY (CQRS)
// -0
export const serviceQUERY__getAllCollection_Sorted = async <T extends T_ENTITIES>(
	col: CollectionReference<T>,
	isSorted = false
): Promise<T[]> => {
	try {
		const msg = await crudQuery__getAllCollection(col);
		const arr = msg.data;
		if (arr.length > 0) {
			// TIME TO SORT
			console.debug('🚔 🧞‍♂️✅ SORT-ing... 🔥 -> 🏎️');
			// sort it !
			if (isSorted) {
				let arrSorted;
				// logique de tri pour STATIC
				if (isEntityInputValues(arr))
					arrSorted = arr.sort((a, b) => {
						return a.pos >= b.pos ? 1 : -1;
					});
				else isEntity(arr);
				arrSorted = arr.sort((a, b) => {
					return a.createdAt >= b.createdAt ? -1 : 1;
				});
				// logique de tri pour BLOG
				return arrSorted;
			}
			return arr;
		} else {
			ACTION__STORE_FRAME__openSnack(
				'firestore',
				`🚔 🧞‍♂️${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED :: loaded NO DATA (you could inject them) ! ✅`
			);
			return []; // => have UI working
		}
	} catch (error) {
		ACTION__STORE_FRAME__openSnack(
			'firestore',
			`🚔 🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED ❌`
		);
		return []; //  => have UI working
	}
};
// -1
// -1 COMMAND (CQRS)
// -1
export const serviceCMD__adds_newOrExistingId = async <T extends T_ENTITIES, U extends T_DOMAIN>(
	col: CollectionReference<T>,
	arr: U[]
) => {
	try {
		for (const entity of arr) {
			await serviceCMD__add_newOrExistingId(col, entity);
		}
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
	} catch (error) {
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
	}
};
// -1
export const serviceCMD__add_newOrExistingId = async <T extends T_ENTITIES, U extends T_DOMAIN>(
	col: CollectionReference<T>,
	entity: U
) => {
	try {
		const entity2 = { ...entity, dateUpdated: serverTimestamp() };
		if (isEntity(entity2)) {
			const entity3 = await crudCMD__addExistingId<T>(col, entity2.idDoc, entity2);
			ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ add ]  ${col.id.toUpperCase()} ! ✅`);
			return entity3.data;
		}
		// CRUD MOD-SOFT (MERGE) + T must be of type ENTITY !
		else {
			const entity3 = await crudCMD__addNew<T>(col, entity2); // CRUD ADD NEW (and tag it)
			ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ add ]  ${col.id.toUpperCase()} ! ✅`);
			// tip -- if OK, I return the id of the newly added item
			return entity3.data;
		}
	} catch (error) {
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
	}
};
