<script lang="ts">
	//import { page } from '$app/stores';
	import { CONST__UI__favicon } from '$config/ui/CONST__UI__base';
	import { CONST__UI__menuApp } from '$config/ui/CONST__UI__menuApp.json';
	import { CONST__UI__urlHomeCms } from '$config/ui/CONST__UI__urls';
	import { AppDrawerMenuItem } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { Content } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		axlog(null, 'component', 'wc -- drawer (app)', false, 'MOUNT', true);
	});
</script>

<!-- DRAWER APP                              -->
<Content class="bg-orange-200">
	<!-- ................. -->
	<Subheader>Mon compte</Subheader>
	<Separator />
	<AppDrawerMenuItem menu={{ title: 'CMS', url: CONST__UI__urlHomeCms, img: CONST__UI__favicon }} />
	<!-- <Separator /> -->
	<Subheader>Menu</Subheader>
	<Separator />
	<List>
		{#each CONST__UI__menuApp as menu}
			<!-- isDark={false} -->
			<AppDrawerMenuItem {menu} />
		{/each}
	</List>
	<Separator />
</Content>
