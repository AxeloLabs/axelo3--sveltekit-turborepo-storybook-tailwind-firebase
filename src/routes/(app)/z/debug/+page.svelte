<script lang="ts">
	import { page } from '$app/stores';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, 'DEBUG-UI');
	});
</script>

<div class="mdc-typography--headline2">DEBUG UI</div>

<div class="grid">
	<a href="/z/debug/theme-color">COLOR</a>
	<a href="/z/debug/theme-elevation">ELEVATION</a>
	<a href="/z/debug/theme-typo">TYPO</a>
	<a href="/z/debug/grid">GRID</a>
</div>
