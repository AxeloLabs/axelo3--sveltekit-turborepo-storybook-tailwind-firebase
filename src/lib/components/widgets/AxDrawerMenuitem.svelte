<script lang="ts">
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';
	import { Item, Text } from '@smui/list';
	export let menu: I_ui__menu | undefined = undefined;
	export let active: string | undefined = undefined;
	function setActive(value: string | undefined) {
		if (active === value) return; // do not refresh if the same page !
		active = value;
	}
</script>

<!-- // -0  -->
<!-- // -0 MENU ITEM: DRAWER -->
<!-- // -0  -->
{#if menu}
	<!-- <a id="drawer-menuItem--1" href={menu.url} class="w-full" rel="prefetch"> -->
	<!-- href item odes not work in TopAppBar -->
	<a href={menu.url}>
		<Item
			on:click={() => {
				if (menu) setActive(menu.url);
			}}
			activated={active === menu.url}
		>
			<img
				class:uiDebug={AX_CONST__UI__isDebugBorder}
				class="mr-2 h-10 w-10"
				src={menu.img?.replace('--creme', '')}
				alt=""
			/>
			<!-- tip: can use a graphic ? -->
			<!-- <Graphic class="material-icons" aria-hidden="true">inbox</Graphic> -->
			<!-- style="color: {isDark ? 'black' : 'white'}" -->
			<Text class="capitalize">
				{menu.title}
			</Text>
		</Item>
	</a>
	<!-- </a> -->
{/if}

<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}
</style>
