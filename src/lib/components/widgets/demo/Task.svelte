<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Event handler for Pin Task
	function PinTask() {
		dispatch('onPinTask', {
			id: task.id
		});
	}
	// Event handler for Archive Task
	function ArchiveTask() {
		dispatch('onArchiveTask', {
			id: task.id
		});
	}

	// Task props
	export let task = {
		id: '',
		title: '',
		state: ''
	};

	// Reactive declaration (computed prop in other frameworks)
	$: isChecked = task.state === 'TASK_ARCHIVED';
</script>

<div class="list-item {task.state}">
	<label for="checked" class="checkbox" aria-label={`archiveTask-${task.id}`}>
		<input
			type="checkbox"
			checked={isChecked}
			disabled
			name="checked"
			id={`archiveTask-${task.id}`}
		/>
		<span class="checkbox-custom" on:click={ArchiveTask} />
	</label>

	<label for="title" aria-label={task.title} class="title">
		<input type="text" value={task.title} readonly name="title" placeholder="Input title" />
	</label>

	{#if task.state !== 'TASK_ARCHIVED'}
		<button
			class="pin-button"
			on:click|preventDefault={PinTask}
			id={`pinTask-${task.id}`}
			aria-label={`pinTask-${task.id}`}
		>
			<span class="icon-star" />
		</button>
	{/if}
</div>
