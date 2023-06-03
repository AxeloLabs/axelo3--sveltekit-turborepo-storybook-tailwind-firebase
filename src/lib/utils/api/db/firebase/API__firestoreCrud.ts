import { getFirebase } from '$utils/api/db/firebase/API__firebaseClient';
import {
	CollectionReference,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	setDoc
} from 'firebase/firestore';
// -2
// -2 CONFIG
// -2
const LOG_LEVEL__ON = true;
/**
 * - it is the last layer before reaching the db's DATA
 *
 * - A query does not modify the db
 * - A cmd modifies it
 */
// -3
// -3 query
// -3 crudQuery__getAllCollection = async <T extends T_ENTITIES>(col: CollectionReference<T>)
// -3 crudQuery__getExistingId    = async <T extends T_ENTITIES>(col: CollectionReference<T>,id: string)
// -3
// -3 cmd
// -3 crudCMD__addExistingId      = async <T extends T_ENTITIES>(col: CollectionReference<T>, id: string, data)
// -3 crudCMD__addNew             = async <T extends T_ENTITIES>(col: CollectionReference<T>, data: any)
// -3 crudCMD__clearCollection    = async <T extends T_ENTITIES>(col: CollectionReference<T>)
// -3
// -0
// -0 QUERY (CQRS)
// -0
export const crudQuery__getAllCollection = async <T extends T_ENTITIES>(
	col: CollectionReference<T>
): Promise<I_msg> => {
	const msg = `\x1B[35;40;4m  ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m GET-ALL\x1B[m`;
	const callback = async (msg?: string) => {
		const arr: T[] = [];
		const docSnap = await getDocs(col);
		if (docSnap.docs.length > 0) {
			docSnap.forEach((doc) => {
				const data = doc.data();
				arr.push(data);
			});
		}
		return { msg, data: arr };
	};
	return await firestore__tryHelper(callback, msg, 'GET-allCollection');
};
// -0
export const crudQuery__getExistingId = async <T extends T_ENTITIES>(
	col: CollectionReference<T>,
	id: string
): Promise<I_msg> => {
	const msg = `\x1B[35;40;4m ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ${id}\x1B[m`;
	const callback = async (msg?: string) => {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		const document = await getDoc(d);
		const data = document.data(); // ceci retourne TOUTES les key:val du document
		return { msg, data: data };
	};
	return await firestore__tryHelper(callback, msg, 'GET-id');
};
// -1
// -1 COMMAND (CQRS)
// -1
export const crudCMD__addExistingId = async <T extends T_ENTITIES>(
	col: CollectionReference<T>,
	id: string,
	data
) => {
	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${id}\x1B[m`;
	const callback = async () => {
		await setDoc<T>(doc<T>(col, id), { ...data });
		return { msg, data: data };
	};
	return await firestore__tryHelper(callback, msg, 'ADD-id');
};
// -1
export const crudCMD__addNew = async <T extends T_ENTITIES>(
	col: CollectionReference<T>,
	data: any
) => {
	let msg = `\x1B[35;40;4m  ${col.id.toUpperCase()} \x1B[m`;
	const callback = async () => {
		const docRef = doc(col); // Add a new document with a generated id
		msg = msg + `\x1B[95;40;4m ${docRef.id} \x1B[m`;
		const entity = {
			idDoc: docRef.id,
			dateUpdated: serverTimestamp(),
			...data
		};
		await setDoc(docRef, entity);
		return { msg, data: docRef.id };
	};
	return await firestore__tryHelper(callback, msg, 'ADD-new');
};
// -1 - TODO - faire en form callback pour gestion error => DANGEROUS TO PUT THIS CLIENT SITDE
export const crudCMD__clearCollection = async <T extends T_ENTITIES>(
	col: CollectionReference<T>
) => {
	const docsSnap = await getDocs(col);
	if (docsSnap.size > 0) {
		docsSnap.forEach(async (doc) => {
			await deleteDoc(doc.ref);
		});
	}
};
// -3
// -3 HELPER
// -3
const firestore__tryHelper = async (callback, msg: string, action: string): Promise<I_msg> => {
	try {
		console.debug('🚔 🔥🐶 ... -- firestore-crud');
		const r = await callback(msg);
		LOG_LEVEL__ON ? console.debug(`🚔 🔥✅ db -- ${action}--ED ${r.msg}`) : '';
		LOG_LEVEL__ON ? console.dir(r.data) : 'db-log-level--off';
		console.debug('🚔 🔥END');
		// console.debug('🚔 🔥🎤');
		return r;
	} catch (err) {
		LOG_LEVEL__ON ? console.debug(`🚔 🔥❌ db -- ${action}--ING ${msg}`) : '';
		console.debug('🚔 🔥END');
		if (err instanceof Error) {
			console.debug(err.message);
			console.debug(err.name);
			console.debug(err);
			LOG_LEVEL__ON ? console.error(err.message) : '';
			return { msg: err.name, data: err.message };
			// throw new Error(); // I want the app to manage this case onto the upper fction!
		} else return { msg: 'error in db request', data: '' };
	}
};

// -2
// -2 END
// -2

// // ............... ............... ............... ...............
// crud__del = async (col, id) => {
// 	// ............... ............... ............... ...............
// 	try {
// 		const { FIRESTORE } = getFirebase();
// 		const d = doc(FIRESTORE, col.id, id);
// 		await deleteDoc(d);
// 		// __________________________________
// 		this.LOG_LEVEL__ON
// 			? console.debug(`🚔🔥 >> ✅ DELET-ED ! >> ${col.id.toUpperCase()} -- ${id}`)
// 			: '';
// 	} catch (error) {
// 		this.LOG_LEVEL__ON
// 			? console.debug(`🚔🔥 >> ❌ DELET-ING... >> ${col.id.toUpperCase()} -- ${id}`)
// 			: '';
// 		console.error(error);
// 		return null;
// 		// throw new Error(`🔥 >> ❌ DELET-ING... >> ${col.id.toUpperCase()} -- ${id}`);
// 	}
// };
// // ............... ............... ............... ...............
// crud__onSnapshot_DB = (col) => {
// 	// ............... ............... ............... ...............
// 	try {
// 		// --- real time
// 		const stream = (callback) =>
// 			onSnapshot(col, (snap) => {
// 				try {
// 					this.LOG_LEVEL__ON ? console.debug(`🚔🔥🟣💀 SUSCRIBE REAL TIME SNAPSHOTS`) : '';
// 					const list = snap.docs.map((x) => {
// 						return { ...x.data(), id: x.id };
// 					});
// 					callback(list);
// 				} catch (error) {
// 					console.error(error);
// 				}
// 			});
// 		return { stream };
// 	} catch (error) {
// 		console.error(error);
// 		return null;
// 	}
// };
// // ............... ............... ............... ...............
// crud__q_DB = async <T>(col, P1: string, P2, P3: string) => {
// 	// ............... ............... ............... ...............
// 	try {
// 		const list: T[] = [];
// 		// help >> orderBy("state"), orderBy("population", "desc"));
// 		const q = query<T>(
// 			col,
// 			where(P1, P2, P3)
// 			// orderBy(`km`),
// 			// limit(LIMIT)
// 		);
// 		// __________________________________
// 		const d = await getDocs<T>(q);
// 		// ---
// 		d.forEach((x) => {
// 			list.push(x.data());
// 		});
// 		this.LOG_LEVEL__ON
// 			? console.debug(`🚔🔥 >> ✅ QUERY-ED ! >> ${col.id.toUpperCase()} -- ${P1} ${P2} ${P3}`)
// 			: '';
// 		return list;
// 	} catch (error) {
// 		this.LOG_LEVEL__ON
// 			? console.debug(`🚔🔥 >> ❌ QUERY-ING... >> ${col.id.toUpperCase()} -- ${P1} ${P2} ${P3}`)
// 			: '';
// 		console.error(error);
// 		return null;
// 	}
// };
// ----------------------------------------------------------
//  const query_DB = async (col, list) => {
// 	const LIMIT = 600;
// 	const l2 = list.map((itm) => itm.toLowerCase());
// 	const result_ = await mapFileds(`city`);
// 	return result_;
// 	// ---
// 	// ---
// 	// ---
// 	async  mapFileds(fieldName: string) {
// 		// todo  orderBy("state"), orderBy("population", "desc")); todo
// 		const q = query(
// 			//
// 			col,
// 			where(fieldName, `in`, l2),
// 			orderBy(`km`),
// 			limit(LIMIT)
// 		);
// 		const snap = await getDocs(q);
// 		const list = snap.docs.map((x) => {
// 			return {
// 				//
// 				...x.data(),
// 				id: x.id
// 			};
// 			// as Record<string, never>
// 		});
// 		return list;
// 	}
// };

// --- mod soft --> juste merge the change (keep ALL unchanged !!! =>> dangerous i think)
// serverTimestamp()
// ............... ............... ............... ...............
// crud__modSoft = async <T extends T_ENTITIES>(col, id: string, data) => {
// ............... ............... ............... ...............
// 	// LIGHT LOG
// 	// purple
// 	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${id}\x1B[m`;
// 	// HEAVY LOG
// 	// 	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m \x1B[105;97;4m ${id}\x1B[m
// 	// \x1B[105;97;4m${JSON.stringify(data, null, 2)} \x1B[m`;
// 	const callback = async () => {
// 		// { merge: true } + setDoc<T> = SET + MERGE=TRUE permet de ne pas ecraser l existant ! AKA non-destructives writes
// 		await updateDoc<T>(doc<T>(col, id), { ...data });
// 		// ...............
// 		return { msg, data: data };
// 	};
// 	// --- end
// 	return await this.firestore__tryHelper(callback, msg, 'MOD');
// };
// ADD HARD (erase )
