<script lang="ts">
	import { page } from '$app/stores';
	import { GridChecker, ThemeDebugColor, ThemeDebugElevation, ThemeDebugTypo } from '$ui/index';
</script>

{#if $page.url.pathname === '/z/debug/grid'}
	<GridChecker />
{:else if $page.url.pathname === '/z/debug/theme-color'}
	<ThemeDebugColor />
{:else if $page.url.pathname === '/z/debug/theme-elevation'}
	<ThemeDebugElevation />
{:else if $page.url.pathname === '/z/debug/theme-typo'}
	<ThemeDebugTypo />
{/if}
