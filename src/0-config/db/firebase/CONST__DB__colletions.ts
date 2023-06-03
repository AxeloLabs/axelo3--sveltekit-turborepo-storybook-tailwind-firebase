// https://javascript.plainenglish.io/using-firestore-with-typescript-in-the-v9-sdk-cf36851bb099
import { getFirebase } from '$utils/api/db/firebase/API__firebaseClient';
import { collection, CollectionReference, type DocumentData } from 'firebase/firestore';

//
//  This is just a helper to add the type to the db responses
//
function createCollection<T = DocumentData>(collectionName: string) {
	const { FIRESTORE } = getFirebase();
	// console.debug(`🚔💾  | [SCHEMA-TYPE] >> createCollection -- ${collectionName}`);
	return collection(FIRESTORE, collectionName) as CollectionReference<T>;
}

// -0 static
export const CONST__DB_COLLECTION__acceuil = createCollection<I_ENTITY__uiinputValue>('acceuil');
export const CONST__DB_COLLECTION__lademarche =
	createCollection<I_ENTITY__uiinputValue>('la-demarche');

// -0 dyn
export const CONST__DB_COLLECTION__blog = createCollection<I_ENTITY__post>('post');
export const CONST__DB_COLLECTION__event = createCollection<I_ENTITY__event>('event');

// -0 Z
export const CONST__DB_COLLECTION__img = createCollection<any>('z-img');
