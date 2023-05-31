<script lang="ts">
	// import { afterNavigate, beforeNavigate } from '$src/navigation';
	// import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { AX_CONST__UI__favicon } from '$const/ui/AX_CONST__UI__base';
	import {
		AX_CONST__UI__isDebugBg,
		AX_CONST__UI__isDebugBorder,
		AX_CONST__UI__isDebugResolutionmobile
	} from '$const/ui/AX_CONST__UI__debug';
	import { AX_CONST__UI__urlHome } from '$const/ui/AX_CONST__UI__urls';
	import { AX_CONST__UI__menuApp } from '$src/0-config/ui/AX_CONST__UI__menuApp.json';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from '$stores/AX_BASE1__STORE_ACTORS';
	import { AX_STORE__FRAME_drawerIsOpen } from '$stores/AX_STORE__frame';
	import { axlog } from '$utils/axLog';
	import { mdiMenu } from '@mdi/js';
	import { Svg } from '@smui/common/elements';
	import Drawer, { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section } from '@smui/top-app-bar';
	import { onMount } from 'svelte';
	import AxHeaderApp from './Ax2HeaderApp.svelte';
	import AxDrawerApp from './Ax3DrawerApp.svelte';
	import LayoutBg1 from './AxLayoutbg1.svelte';
	export let active: string | undefined = undefined;
	export let menus = AX_CONST__UI__menuApp;

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
		axlog(
			{ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB },
			// $page.url.pathname,
			'compo',
			'wc -- (((((( FRAME-app ))))))',
			false,
			'MOUNT',
			true
		);
	});

	// <!-- tip responsive: drawer & responsive RULES -->
	$: {
		if (AX_CONST__UI__isDebugResolutionmobile)
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
		$AX_STORE__FRAME_drawerIsOpen = !$AX_STORE__FRAME_drawerIsOpen;
	};

	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			$AX_STORE__FRAME_drawerIsOpen = !$AX_STORE__FRAME_drawerIsOpen;
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

<!-- // -0 -->
<!-- // -0 FRAME (APP) -->
<!-- // -0 -->
<!-- press ESC: to open/close the drawer     -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />

<LayoutBg1>
	<!-- // -0  tip: ax-drawer-width is scss -->
	<Drawer variant="modal" open={$AX_STORE__FRAME_drawerIsOpen}>
		<AxDrawerApp />
	</Drawer>

	<!-- // -0 scrim -->
	<!-- {#if isXs || isSm || isMd} -->
	<Scrim
		on:click={() => {
			$AX_STORE__FRAME_drawerIsOpen = false;
		}}
		class=""
	/>

	<!-- // -0 App -->
	<AppContent style="border:{AX_CONST__UI__isDebugBorder ? '4px solid purple' : 'none'}">
		<!-- // -1 -->
		<!-- // -1 Header -->
		<!-- // -1 -->
		<TopAppBar
			variant="fixed"
			bind:this={topAppBar}
			style="background:var(--mdc-theme-primary);
	border:{AX_CONST__UI__isDebugBorder ? '4px solid red' : 'none'}"
		>
			<Row>
				<!-- // -1 HAMBURGER - fait partis du chassi -->
				<!-- // tip responsive: icon desapear becoz not enought space -->
				<Section class="lg:hidden" style="background:{AX_CONST__UI__isDebugBg ? 'blue' : 'none'}">
					<!-- // 1 HAMBURGER  -->
					<IconButton class="material-icons" on:click={toggleOpen}>
						<Icon component={Svg} viewBox="0 0 24 24">
							<path fill="currentColor" d={mdiMenu} />
						</Icon>
					</IconButton>
				</Section>

				<!-- // -1 LOGO client -->
				<Section style="background:{AX_CONST__UI__isDebugBg ? 'orange' : 'none'}">
					<!-- <Title> -->
					<!-- TIP: attention, lg:auto ==> hack => il faut adapter ici, je dois hack-->
					<a class="m-auto flex w-max items-center lg:m-0" href={AX_CONST__UI__urlHome}>
						<img class="h-10 w-10" src={AX_CONST__UI__favicon} alt="" />
						{#if isXxl}
							<div class="ml-2">Toucher Terre</div>
						{/if}
					</a>
					<!-- </Title> -->
				</Section>

				<!-- // -1 HEADER PLUGGED -->
				<AxHeaderApp {menus} {active} />
			</Row>
		</TopAppBar>
		<!-- // -1 ######################################################## -->
		<!-- // -3  -->
		<!-- // -3 content -->
		<!-- // -3  -->
		<AutoAdjust {topAppBar} style="border:{borderRes}">
			<slot />
			<!-- // -3 ######################################################## -->
		</AutoAdjust>
		<!-- // -0 ######################################################## -->
	</AppContent>
</LayoutBg1>
