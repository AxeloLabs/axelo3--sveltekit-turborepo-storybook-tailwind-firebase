// A simple Svelte store implementation with update methods and initial data.
// A true app would be more complex and separated into different files.

import { writable } from 'svelte/store';

const TaskBox = () => {
	// Creates a new writable store populated with some initial data
	const { subscribe, update } = writable([
		{ id: '1', title: 'Something', state: 'TASK_INBOX' },
		{ id: '2', title: 'Something more', state: 'TASK_INBOX' },
		{ id: '3', title: 'Something else', state: 'TASK_INBOX' },
		{ id: '4', title: 'Something again', state: 'TASK_INBOX' }
	]);

	return {
		subscribe,

		// Method to archive a task, think of a action with redux or Pinia
		archiveTask: (id) =>
			update((tasks) =>
				tasks
					.map((task) => (task.id === id ? { ...task, state: 'TASK_ARCHIVED' } : task))
					.filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
			),

		// Method to archive a task, think of a action with redux or Pinia
		pinTask: (id) =>
			update((tasks) =>
				tasks.map((task) => (task.id === id ? { ...task, state: 'TASK_PINNED' } : task))
			)
	};
};
export const taskStore = TaskBox();

// Store to handle the app state
const AppState = () => {
	const { subscribe, update } = writable(false);
	return {
		subscribe,
		error: () => update((error) => !error)
	};
};

export const AppStore = AppState();
