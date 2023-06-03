import { browser } from '$app/environment';
import { writable } from 'svelte/store';
export const localstorage = createLocalstorage('token-oauth', 'no token');
// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
function createLocalstorage(key, initial) {
	// receives the key of the local storage and an initial value
	// ---
	// helper function
	const toString = (value) => JSON.stringify(value, null, 2);
	// ---
	if (browser && !localStorage.getItem(key)) {
		// item not present in local storage
		// initialize local storage with initial value
		localStorage.setItem(key, toString(initial));
	}
	// convert to object
	const saved = JSON.parse(browser ? localStorage.getItem(key) ?? 'null' : 'null');
	// ---
	// create the underlying writable store
	const { subscribe, set, update } = writable(saved);
	// ---
	return {
		subscribe,
		set: (value) => {
			browser
				? // save also to local storage as a string
				  localStorage.setItem(key, toString(value))
				: null;
			return set(value);
		},
		update
	};
}
