<script>
	import LoadingRow from './LoadingRow.svelte';
	import Task from './Task.svelte';
	export let loading = false;
	export let tasks = [];

	//👇 Reactive declarations (computed props in other frameworks)
	$: noTasks = tasks.length === 0;
	$: emptyTasks = noTasks && !loading;
	$: tasksInOrder = [
		...tasks.filter((t) => t.state === 'TASK_PINNED'),
		...tasks.filter((t) => t.state !== 'TASK_PINNED')
	];
</script>

{#if loading}
	<div class="list-items">
		<LoadingRow />
		<LoadingRow />
		<LoadingRow />
		<LoadingRow />
		<LoadingRow />
	</div>
{/if}
{#if emptyTasks}
	<div class="list-items">
		<div class="wrapper-message">
			<span class="icon-check" />
			<p class="title-message">You have no tasks</p>
			<p class="subtitle-message">Sit back and relax</p>
		</div>
	</div>
{/if}
{#each tasksInOrder as task}
	<Task {task} on:onPinTask on:onArchiveTask />
{/each}
