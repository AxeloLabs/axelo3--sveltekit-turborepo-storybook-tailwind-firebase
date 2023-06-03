import type { CollectionReference } from 'firebase/firestore';

declare global {
	// -2
	// -2 AMBIENT TS
	// -2
	// -3
	// -3 GLOBALs
	// -3
	//U extends T_DTOS --> TODO --> pour ce que l on ADD (depuis client, donc oblige dto)
	interface I_STORE__FORM<T extends T_ENTITIES, U extends T_DTOS> {
		collection: CollectionReference<T> | undefined;
		datasetReset: U[] | undefined;
		formAddInputs: I_DTO__formInput[] | undefined;
	}
	// -1
	// -1 DOMAINs
	// -1
	type T_DOMAIN = T_ENTITIES | T_DTOS;
	type T_ENTITIES = I_ENTITY__post | I_ENTITY__event | I_ENTITY__uiinputValue;
	type T_DTOS = I_DTO__post | I_DTO__event | I_DTO__formInput;
	// -0
	// -0 ENTITIEs
	// -0
	interface I_ENTITY {
		idDoc: string;
	}
	interface I_ENTITY__post extends I_ENTITY, I_DTO__post {}
	interface I_ENTITY__event extends I_ENTITY, I_DTO__event {}
	interface I_ENTITY__uiinputValue extends I_ENTITY, I_DTO__formInput {}
	// -0
	// -0 DTOs
	// -0
	interface I_DTO__post {
		titlePost: I_DTO__formInput;
		// slug: I_DTO__formInput;
		body: I_DTO__formInput;
		createdAt: number; // timestamp
	}
	interface I_DTO__event {
		titleEvent: I_DTO__formInput;
		// slug: I_DTO__formInput;
		date: I_DTO__formInput;
		body: I_DTO__formInput;
		image: I_DTO__formInput;
		createdAt: number;
	}
	interface I_DTO__formInput {
		pos: number;
		tag: string; // si il n y a pas de tag, ca sera TYPE par default
		label: string;
		value: string; // (value  = storageUrl (in the case of tag=file)
		blobs?: any[]; // on l ajoute et puis on le supprime pour l upload
		format?: CONST__UI__baseFormatMedia.video | CONST__UI__baseFormatMedia.image; // TODO - enum => pour differencierimge/video du slideshow
	}
	// enum VideoOrImage {
	//   }
	// -3
	// -3 FRAME -- UI
	// -3
	// type T_ui__dynvariant = 'modal' | 'dismissible' | undefined;
	interface I_ui__menu {
		title: string;
		url: string;
		img?: string; // c est l icon-img a cote du menu-name
	}
	// -1
	// -1 Z
	// -1
	// firestore-crud use it to return a msg
	interface I_msg {
		msg: string;
		data: any;
	}
	// -2
	// -2 LOCAL TS
	// -2
	// See https://kit.svelte.dev/docs/types#app
	// for information about these interfaces
	// and what to do when importing types
	namespace App {
		// declare ?
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		// type dynvar = 'dismissible' | 'modal' | undefined;
	}
}
export {};
