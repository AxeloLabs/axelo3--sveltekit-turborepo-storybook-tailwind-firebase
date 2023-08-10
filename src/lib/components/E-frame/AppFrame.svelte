<script lang="ts">
	import { browser } from '$app/environment';
	import { CONST__UI__favicon } from '$config/ui/CONST__UI__base';
	import {
		CONST__UI__isDebugBg,
		CONST__UI__isDebugBorder,
		CONST__UI__isDebugResolutionmobile
	} from '$config/ui/CONST__UI__debug';
	import { CONST__UI__menuApp } from '$config/ui/CONST__UI__menuApp.json';
	import { CONST__UI__urlHome } from '$config/ui/CONST__UI__urls';
	import { STORE__FRAME_drawerIsOpen } from '$stores/STORE_frame';
	import { AppDrawer, AppHeader, LayoutBg1 } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { mdiMenu } from '@mdi/js';
	import { Svg } from '@smui/common/elements';
	import Drawer, { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section } from '@smui/top-app-bar';
	import { onMount } from 'svelte';
	export let active: string | undefined = undefined;
	export let menus = CONST__UI__menuApp;

	// let variant: T_ui__dynvariant = 'modal';
	let topAppBar;
	let borderRes = '0px solid black';
	const xs = '(max-width: 639px)';
	const sm = '(min-width: 640px) and (max-width: 767px)';
	const md = '(min-width: 768px) and (max-width: 1023px)';
	const lg = '(min-width: 1024px) and (max-width: 1079px)';
	const xl = '(min-width: 1080px) and (max-width: 1535px)';
	const xxl = '(min-width: 1536px) ';
	let isXs = matches(xs);
	let isSm = matches(sm);
	let isMd = matches(md);
	let isLg = matches(lg);
	let isXl = matches(xl);
	let isXxl = matches(xxl);

	onMount(() => {
		axlog(null, 'component', 'wc -- [ [ [ FRAME (app) ] ] ]', false, 'MOUNT', true);
	});

	// <!-- tip responsive: drawer & responsive RULES -->
	$: {
		if (CONST__UI__isDebugResolutionmobile)
			borderRes = isXs
				? '10px solid red'
				: isSm
				? '10px solid orange'
				: isMd
				? '10px solid yellow'
				: isLg
				? '10px solid green'
				: isXl
				? '10px solid blue'
				: isXxl
				? '10px solid cyan'
				: '0px solid black';
	}

	const toggleOpen = () => {
		$STORE__FRAME_drawerIsOpen = !$STORE__FRAME_drawerIsOpen;
	};

	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			$STORE__FRAME_drawerIsOpen = !$STORE__FRAME_drawerIsOpen;
		}
	}

	function handleResize() {
		//e
		isXs = matches(xs);
		isSm = matches(sm);
		isMd = matches(md);
		isLg = matches(lg);
		isXl = matches(xl);
		isXxl = matches(xxl);
		// console.log(isXs, isSm, isMd, isLg, isXl, isXxl);
		// console.debug(isXs, isSm, isMd, isLg, isXl, isXxl);
	}

	function matches(query: string) {
		// why Idecomment ?
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
</script>

<!-- -0 -->
<!-- -0 FRAME (APP) -->
<!-- -0 -->
<!-- press ESC: to open/close the drawer     -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />

<LayoutBg1>
	<!-- -0  tip: ax-drawer-width is scss -->
	<Drawer variant="modal" open={$STORE__FRAME_drawerIsOpen}>
		<AppDrawer />
	</Drawer>

	<!-- -0 scrim -->
	<!-- {#if isXs || isSm || isMd} -->
	<Scrim
		on:click={() => {
			$STORE__FRAME_drawerIsOpen = false;
		}}
		class=""
	/>

	<!-- -0 App -->
	<AppContent style="border:{CONST__UI__isDebugBorder ? '4px solid purple' : 'none'}">
		<!-- -1 -->
		<!-- -1 Header -->
		<!-- -1 -->
		<TopAppBar
			variant="fixed"
			bind:this={topAppBar}
			style="background:var(--mdc-theme-primary);
	border:{CONST__UI__isDebugBorder ? '4px solid red' : 'none'}"
		>
			<Row>
				<!-- -1 HAMBURGER - fait partis du chassi -->
				<!-- // tip responsive: icon desapear becoz not enought space -->
				<Section class="lg:hidden" style="background:{CONST__UI__isDebugBg ? 'blue' : 'none'}">
					<!-- 1 HAMBURGER  -->
					<IconButton class="material-icons" on:click={toggleOpen}>
						<Icon component={Svg} viewBox="0 0 24 24">
							<path fill="currentColor" d={mdiMenu} />
						</Icon>
					</IconButton>
				</Section>

				<!-- -1 LOGO client -->
				<Section style="background:{CONST__UI__isDebugBg ? 'orange' : 'none'}">
					<!-- <Title> -->
					<!-- TIP: attention, lg:auto ==> hack => il faut adapter ici, je dois hack-->
					<a class="m-auto flex w-max items-center lg:m-0" href={CONST__UI__urlHome}>
						<img class="h-10 w-10" src={CONST__UI__favicon} alt="" />
						{#if isXxl}
							<div class="ml-2">Toucher Terre</div>
						{/if}
					</a>
					<!-- </Title> -->
				</Section>

				<!-- -1 HEADER PLUGGED -->
				<AppHeader {menus} {active} />
			</Row>
		</TopAppBar>
		<!-- -3  -->
		<!-- -3 content -->
		<!-- -3  -->
		<AutoAdjust {topAppBar} style="border:{borderRes}">
			<slot />
		</AutoAdjust>
	</AppContent>
</LayoutBg1>
