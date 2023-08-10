<script lang="ts">
	import { page } from '$app/stores';
	import { axlog } from '$utils/log/axLog';
	import { AppFrame } from '$ui/index';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(null, 'layout', '### LAYOUT (app) ###');
	});
</script>

<AppFrame active={$page.url.pathname}>
	<slot />
</AppFrame>
