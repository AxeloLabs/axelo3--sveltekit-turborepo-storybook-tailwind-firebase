<script lang="ts">
	import { browser } from '$app/environment';
	import {
		CONST__UI__isDebugBorder,
		CONST__UI__isDebugResolutionmobile
	} from '$config/ui/CONST__UI__debug';
	import { STORE__FRAME_drawerIsOpen } from '$stores/STORE_frame';
	import { CmsDrawer, CmsHeader } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import Drawer, { AppContent } from '@smui/drawer';
	import TopAppBar, { AutoAdjust, Row } from '@smui/top-app-bar';
	import { onMount } from 'svelte';
	export let route = 'N/A';

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
		$STORE__FRAME_drawerIsOpen = true;
		axlog(null, '/cms/', 'wc -- [ [ [ FRAME (cms) ] ] ]', false, 'MOUNT', true);
	});

	$: {
		// <!-- tip responsive: drawer & responsive RULES -->
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
	}

	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
</script>

<!-- -0 -->
<!-- -0 FRAME (CMS) -->
<!-- -0 -->
<!-- press ESC: to open/close the drawer -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />
<!-- -1 -->
<!-- -1 Header -->
<!-- -1 -->
<!-- z-10 ?? to del si pas de bug -->
<TopAppBar
	variant="fixed"
	class=""
	bind:this={topAppBar}
	style="background:var(--mdc-theme-error);
	border:{CONST__UI__isDebugBorder ? '4px solid red' : 'none'}"
>
	<Row>
		<!-- -1 HEADER PLUGGED -->
		<CmsHeader />
	</Row>
</TopAppBar>
<!-- -3  -->
<!-- -3 content -->
<!-- -3  -->
<!-- tip: LG:FLEX est vital, pour avoir l admin a cote du drawer -->
<AutoAdjust {topAppBar} style="border:{borderRes}" class="h-[calc(100vh)] overflow-hidden lg:flex ">
	<!-- 0 DRAWER -->
	<!-- tip: ax-drawer-width is scss -->
	<Drawer style="" class="ax-drawer-width  " open={$STORE__FRAME_drawerIsOpen}>
		<CmsDrawer {route} />
	</Drawer>

	<!-- 0 CONTENT -->
	<AppContent
		class="m-5 overflow-y-scroll p-5"
		style="  background: #C16B38; border:{CONST__UI__isDebugBorder ? '4px solid purple' : 'none'}"
	>
		<!-- <slot name="app" /> -->
		<slot />
	</AppContent>
</AutoAdjust>

<!-- =========== -->
<!-- HAMBURGER - fait partis du chassi -->
<!-- =========== -->
<!-- .................. -->
<!-- tip responsive: icon desapear becoz not enought space -->
<!-- .................. -->

<!-- <Section
			style="background:{CONST__FRAME_isDebugBg ? 'blue' : 'none'}"
			class="bg-blue-200 lg:hidden"
		>
			<IconButton
				class="material-icons"
				on:click={toggleOpen}
				>menu
			</IconButton>
		</Section> -->
