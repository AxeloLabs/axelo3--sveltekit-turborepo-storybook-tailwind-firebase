import { writable } from 'svelte/store';
/**
 * Gere les etats de la frame
 **/
export const STORE__FRAME_drawerIsOpen = writable(false);
export const STORE__FRAME_snack = writable({
	type: 'N/A',
	text: 'N/A',
	open: false
});
