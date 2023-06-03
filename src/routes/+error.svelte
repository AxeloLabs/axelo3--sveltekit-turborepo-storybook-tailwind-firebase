<script lang="ts">
	// import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, 'ERROR-PAGE');
	});
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="mx-10 border-2 border-black px-10">
	<h1 class="">{$page.status}</h1>
	<p class="">{$page?.error?.message}</p>
</div>

<style lang="postcss">
	h1,
	p {
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	p {
		margin: 1em auto;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
