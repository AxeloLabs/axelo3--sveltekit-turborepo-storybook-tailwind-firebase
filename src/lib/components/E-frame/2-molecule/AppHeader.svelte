<script lang="ts">
	import { CONST__UI__isDebugBg } from '$config/ui/CONST__UI__debug';
	import { CONST__UI__menuApp } from '$config/ui/CONST__UI__menuApp.json';
	import { CONST__UI__urlHomeCms } from '$config/ui/CONST__UI__urls';
	import { AppHeaderMenuItem } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { mdiAccount } from '@mdi/js';
	import { Svg } from '@smui/common/elements';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/icon-button';
	import { Section } from '@smui/top-app-bar';
	import { onMount } from 'svelte';
	export let active: string | undefined = undefined;
	export let menus = CONST__UI__menuApp;

	onMount(() => {
		axlog(null, 'component', 'wc -- header (app)', false, 'MOUNT', true);
	});
</script>

<!-- -0  -->
<!-- -0 HEADER-APP -->
<!-- -0  -->
<!-- -3 LEFT + CENTER -->
<!-- tip: this part of the header is it is hidden, is MOBILE -->
<Section
	class="hidden justify-center lg:flex"
	style="background:{CONST__UI__isDebugBg ? 'greenyellow' : 'none'}"
>
	{#each menus as menu}
		<AppHeaderMenuItem {menu} {active} />
	{/each}
</Section>

<!-- -3 RIGHT -->
<Section style="background:{CONST__UI__isDebugBg ? 'green' : 'none'}" align="end">
	<Fab href={CONST__UI__urlHomeCms} color="primary" mini class="mr-2">
		<Icon component={Svg} viewBox="0 0 24 24">
			<path fill="currentColor" d={mdiAccount} />
		</Icon>
	</Fab>
</Section>
