<script>
	import TaskList from './TaskList.svelte';
	export let error = false;
</script>

<div>
	{#if error}
		<div class="page lists-show">
			<div class="wrapper-message">
				<span class="icon-face-sad" />
				<div class="title-message">Oh no!</div>
				<div class="subtitle-message">Something went wrong</div>
			</div>
		</div>
	{:else}
		<div class="page lists-show">
			<nav>
				<h1 class="title-page">
					<span class="title-wrapper">Taskbox</span>
				</h1>
			</nav>
			<TaskList />
		</div>
	{/if}
</div>
