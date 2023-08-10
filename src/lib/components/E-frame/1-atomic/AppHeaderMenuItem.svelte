<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	import Button, { Label } from '@smui/button';
	export let menu: I_ui__menu | undefined = undefined;
	export let active: string | undefined = undefined;
	function setActive(value: string | undefined) {
		if (active === value) return; // do not refresh if the same page !
		active = value;
	}
</script>

<!-- -0  -->
<!-- -0 MENU ITEM: HEADER -->
<!-- -0  -->
{#if menu}
	<Button
		href={menu.url}
		class="{active === menu.url
			? 'bg-white/10'
			: ''} mr-5 border-2 font-bold hover:bg-white/50 hover:text-orange-800"
		on:click={() => {
			setActive(menu?.url);
		}}
	>
		<Label style="">
			<img
				class:uiDebug={CONST__UI__isDebugBorder}
				class="hidden h-5 w-5 lg:inline"
				src={menu.img}
				alt=""
			/>
			{menu.title}</Label
		>
	</Button>
{/if}

<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}

	* :global(.mdc-button--raised) {
		background: #282728 !important;
	}
</style>
