<!-- <SeoMetas /> <FavIcons /> -->
<!-- </svelte:head> -->

<script lang="ts">
	// -0 css - BASE
	import '../app.postcss';

	// -0 css - SPLIDE
	import '@splidejs/svelte-splide/css'; // splide - Default theme
	// import '@splidejs/splide/css/skyblue'; // or other themes
	// import '@splidejs/splide/css/sea-green'; // or other themes
	// import '@splidejs/splide/css/core'; // or only core styles

	// -0
	import { navigating } from '$app/stores';
	import { PreloadingIndicator, Snack } from '$ui/index';
	import { onMount } from 'svelte';
	import { axlog } from '../lib/utils/log/axLog';
	// import GridChecker from '@app/components/catalog/toucherterre/shared/debug-ui/GridChecker.svelte';

	onMount(() => {
		axlog(null, 'layout', '### ### ### LAYOUT-ROOT ### ### ###');
	});
</script>

<!-- -0 -->
<!-- jouer sur le z-index si besoin -->
<!-- <GridChecker /> -->

<!-- -0 -->
{#if $navigating}
	<PreloadingIndicator />
{/if}

<!-- -0 -->
<!-- it sync its state with the store -->
<Snack />

<!-- -0 -->
<slot />
