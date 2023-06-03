<script lang="ts">
	import { page } from '$app/stores';
	import { CmsFrame } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(null, 'layout', '### LAYOUT (cms) ###');
	});
</script>

<CmsFrame route={$page.url.pathname}>
	<!-- tip: maybe I can use dynamic ? -->
	<slot />
</CmsFrame>
