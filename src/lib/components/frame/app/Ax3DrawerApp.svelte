<script lang="ts">
	//import { page } from '$app/stores';
	import AxDrawerMenuitem from '$components/widgets/AxDrawerMenuitem.svelte';
	import { AX_CONST__UI__favicon } from '$const/ui/AX_CONST__UI__base';
	import { AX_CONST__UI__menuApp } from '$const/ui/AX_CONST__UI__menuApp.json';
	import { AX_CONST__UI__urlHomeCms } from '$const/ui/AX_CONST__UI__urls';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from '$stores/AX_BASE1__STORE_ACTORS';
	import { axlog } from '$utils/axLog';
	import { Content } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		axlog(
			{ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB },
			// $page.url.pathname,
			'components',
			'wc -- ax drawer app',
			false,
			'MOUNT',
			true
		);
	});
</script>

<!-- +################################### -->
<!-- DRAWER APP                              -->
<!-- ####################################### -->
<Content class="bg-orange-200">
	<!-- ................. -->
	<Subheader>Mon compte</Subheader>
	<Separator />
	<AxDrawerMenuitem
		menu={{ title: 'CMS', url: AX_CONST__UI__urlHomeCms, img: AX_CONST__UI__favicon }}
	/>
	<!-- <Separator /> -->
	<Subheader>Menu</Subheader>
	<Separator />
	<List>
		{#each AX_CONST__UI__menuApp as menu}
			<!-- isDark={false} -->
			<AxDrawerMenuitem {menu} />
		{/each}
	</List>
	<Separator />
</Content>
