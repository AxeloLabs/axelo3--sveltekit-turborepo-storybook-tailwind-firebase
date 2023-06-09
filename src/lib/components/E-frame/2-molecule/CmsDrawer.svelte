<script lang="ts">
	import { CONST__UI__menuCms } from '$config/ui/CONST__UI__menuCms.json';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import {
		AppDrawerMenuItem,
		CmsDrawerAddEdit,
		EditInjectorDbRestore,
		EditInputValue
	} from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { isEntityEvents, isEntityInputValues, isEntityPosts } from '$utils/type/guards';
	import { Content, Header, Title } from '@smui/drawer';
	import List from '@smui/list';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import { onMount } from 'svelte';
	export let route = 'N/A';
	let active = 'page'; // page | form | inject

	onMount(() => {
		console.log('route: ', route);
		axlog(null, '/cms/', 'wc -- DRAWER', false, 'MOUNT', true);
	});
</script>

<!-- -0 -->
<Header>
	<!-- FAST PREVIEW PAGE -->
	<Title class=" text-center ">
		-
		<a
			class="hover:bg-black hover:text-white"
			rel="noreferrer"
			target="_blank"
			href="/{route.replace('/cms/', '')}"
			>{route.replace('/cms/', '').replace('-', ' ').toUpperCase()}</a
		>
		-
	</Title>
	<!-- , 'inject' -->
	<TabBar tabs={['select a page', 'edit-add']} let:tab bind:active class="mt-5">
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
</Header>

<!-- -0 -->
<Content class="overflow-x-hidden overflow-y-scroll bg-gray-800">
	{#if active === 'select a page'}
		<!-- -3 PAGE -->
		<List class="m-2 bg-white">
			{#each CONST__UI__menuCms as menu (menu.title)}
				<!-- isDark={true} -->
				<AppDrawerMenuItem menu={{ title: menu.title, url: `/cms${menu.url}`, img: menu.img }} />
			{/each}
		</List>
	{:else if active === 'edit-add'}
		<!-- -3 EDIT-ADD  -->
		{#if $STORE__CONTENT && $STORE__CONTENT.length}
			<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
			<!-- 🌴 DYN-PAGE 🌴🌴🌴🌴🌴🌴🌴🌴 -->
			<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
			<!-- il faut voire la nature du $STORE__CONTENT -->
			{#if isEntityEvents($STORE__CONTENT) || isEntityPosts($STORE__CONTENT)}
				<CmsDrawerAddEdit />
			{:else if isEntityInputValues($STORE__CONTENT)}
				<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
				<!-- 🌴  STATIC-PAGE 🌴🌴🌴🌴🌴🌴🌴🌴 -->
				<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
				<!-- tip: possibilite de le mettre ds un pannel -->
				<!-- <Content class="space-y-5 bg-blue-800"> -->
				<!-- {#each Object.entries(item) as [key, prop], pos} -->
				{#each $STORE__CONTENT as entity, pos (entity.idDoc)}
					<EditInputValue bind:ivItm={entity} />
				{/each}
			{/if}
		{/if}
		<!-- -2 INJECT  -->
		<!-- NO FOR PROD  -->
		<!-- {:else if active === 'inject'} -->
		<EditInjectorDbRestore />
	{/if}
</Content>

<!-- style="background:var(--mdc-theme-text-primary-on-background);" -->
<!-- <Separator /> -->
<!-- <Group> -->
<!-- <AppDrawerMenuItem url={'/admin'} menu={'Tableau de bord'} /> -->
<!-- <Separator />
	<Subheader>Pages</Subheader>
	<Separator /> -->
<!-- <AppDrawerMenuItem url={'/cms'} menu={'Toutes les pages'} /> -->
<!-- QUICK LINKS PAGES EDIT -->
<!-- <AppDrawerMenuItem href={'/site/post-new'} text={'Ajouter'} /> -->
<!-- <AppDrawerMenuItem href={'/cms-tag'} text={'Catégories'} /> -->
<!-- <Accordeon /> -->
<!-- <Separator /> -->
<!-- <Subheader tag="h6">Comptes</Subheader> -->
<!-- <AppDrawerMenuItem href={'/site/users'} text={'Tous les comptes'} /> -->
<!-- TODO - remettre -->
<!-- <AppDrawerMenuItem url={'/site/profile'} menu={'Profil'} /> -->
<!-- </Group> -->
<!-- <Separator /> -->
<!-- <Header> -->
<!-- <Title>
		<a
			class=" flex w-max items-center "
			href={CONST__FRAME_URL_home}
		>
			<img
				class="mr-2    h-10 w-10"
				src="/media/favicon.png"
				alt=""
			/>
			Voir le site
		</a>
	</Title> -->
<!-- </Header> -->
