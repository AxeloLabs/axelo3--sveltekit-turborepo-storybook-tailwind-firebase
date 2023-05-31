// -3
// -3 STORE -- CONTENT
// -3
// edit = CMS
export const AX_STORE__CONTENT: Writable<T_GLOBAL_ENTITIES[]> = writable([]);
// read + initDB = APP wc-page :: ne peut pas etre undefined => des que une route se monte, la config se fait...donc dans le compo
export const AX_STORE__CONTENT_DB: Writable<
	I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined
> =
	//
	writable(undefined);
// collection:          CollectionReference<T>;
// dataset: U[];        // firebase will ADD the ID to all theses elements
// formAdd:    I_DTO__uiInputValue[];

import { writable, type Writable } from 'svelte/store';
