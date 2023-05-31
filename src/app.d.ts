// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

// TODO - should not import this cost -- aka cycle deps
// import type { CollectionReference } from 'firebase/firestore';
import { AX_CONST__UI__baseFormatMedia } from '$const/ui/AX_CONST__UI__base';

declare global {
	// -0 ###############################################
	// -0 LOCAL TS
	// -0 ###############################################

	// declare namespace App {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		// type dynvar = 'dismissible' | 'modal' | undefined;
	}

	// -0 ###############################################
	// -0 AMBIENT TS
	// -0 ###############################################
	// -3 ................................................
	// -3 FRAME -- UI
	// -3 ................................................
	// type T_ui__dynvariant = 'modal' | 'dismissible' | undefined;
	interface I_ui__menu {
		title: string;
		url: string;
		img?: string; // c est l icon-img a cote du menu-name
	}
	// -3 ................................................
	// -3 DOMAIN ENTITIES
	// -3 ................................................
	// le store contient un tableau, soit de ces entities...
	// la collection aussi, est un tableau, soit de ces entities...

	interface I_DB_CONFIG<T extends T_GLOBAL_ENTITIES, U extends T_GLOBAL_DTOS> {
	// 	collection: CollectionReference<T>;
	// 	dataset: U[]; // firebase will ADD the ID to all theses elements
	// 	formAdd: I_DTO__uiInputValue[]; // it is always a form here, so iv + do not add in static page...
	// }

	type T_GLOBALS = T_GLOBAL_ENTITIES | T_GLOBAL_DTOS;
	type T_GLOBAL_ENTITIES = I_ENTITY__post | I_ENTITY__event | I_ENTITY__uiinputValue;
	type T_GLOBAL_DTOS = I_DTO__uiInputValue | I_DTO__event | I_DTO__post;

	interface I_ENTITY {
		idDoc: string;
	}

	interface I_ENTITY__post extends I_ENTITY, I_DTO__post {}
	interface I_ENTITY__event extends I_ENTITY, I_DTO__event {}
	interface I_ENTITY__uiinputValue extends I_ENTITY, I_DTO__uiInputValue {}

	interface I_DTO__post {
		titlePost: I_DTO__uiInputValue;
		// slug: I_DTO__uiInputValue;
		body: I_DTO__uiInputValue;
		createdAt: number; // timestamp
	}

	interface I_DTO__event {
		titleEvent: I_DTO__uiInputValue;
		// slug: I_DTO__uiInputValue;
		date: I_DTO__uiInputValue;
		body: I_DTO__uiInputValue;
		image: I_DTO__uiInputValue;
		createdAt: number;
	}

	interface I_DTO__uiInputValue {
		pos: number;
		tag: string; // si il n y a pas de tag, ca sera TYPE par default
		label: string;
		value: string; // (value  = storageUrl (in the case of tag=file)
		blobs?: any[]; // on l ajoute et puis on le supprime pour l upload
		format?: AX_CONST__UI__baseFormatMedia.video | AX_CONST__UI__baseFormatMedia.image; // TODO - enum => pour differencierimge/video du slideshow
	}

	// enum VideoOrImage {
	//   }

	// -3 ................................................
	// -3 z
	// -3 ................................................
	// firestore-crud use it to return a msg
	interface I_msg {
		msg: string;
		data: any;
	}
}
export { };
// type Spread<Type> = { [Key in keyof Type]: Type[Key] };
// [key: number]: I_ENTITY__uiinputValue;
