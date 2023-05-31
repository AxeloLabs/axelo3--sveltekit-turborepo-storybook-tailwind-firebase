<script lang="ts">
	import { AxHeaderMenuitem } from '$components/widgets/index';
	import { AX_CONST__UI__isDebugBg } from '$const/ui/AX_CONST__UI__debug';
	import { AX_CONST__UI__menuApp } from '$const/ui/AX_CONST__UI__menuApp.json';
	import { AX_CONST__UI__urlHomeCms } from '$const/ui/AX_CONST__UI__urls';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from '$stores/AX_BASE1__STORE_ACTORS';
	import { axlog } from '$utils/axLog';
	import { mdiAccount } from '@mdi/js';
	import { Svg } from '@smui/common/elements';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/icon-button';
	import { Section } from '@smui/top-app-bar';
	import { onMount } from 'svelte';
	export let active: string | undefined = undefined;
	export let menus = AX_CONST__UI__menuApp;

	onMount(() => {
		axlog(
			{ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB },
			// $page.url.pathname,
			'component',
			'wc -- ax header app',
			false,
			'MOUNT',
			true
		);
	});
</script>

<!-- // -0 ################################### -->
<!-- // -0 HEADER-APP                          -->
<!-- // -0 ################################### -->
<!-- // -3 LEFT + CENTER -->
<!-- tip: this part of the header is it is hidden, is MOBILE -->
<Section
	class="hidden justify-center lg:flex"
	style="background:{AX_CONST__UI__isDebugBg ? 'greenyellow' : 'none'}"
>
	{#each menus as menu}
		<AxHeaderMenuitem {menu} {active} />
	{/each}
</Section>

<!-- // -3 RIGHT -->
<Section style="background:{AX_CONST__UI__isDebugBg ? 'green' : 'none'}" align="end">
	<Fab href={AX_CONST__UI__urlHomeCms} color="primary" mini class="mr-2">
		<Icon component={Svg} viewBox="0 0 24 24">
			<path fill="currentColor" d={mdiAccount} />
		</Icon>
	</Fab>
</Section>
