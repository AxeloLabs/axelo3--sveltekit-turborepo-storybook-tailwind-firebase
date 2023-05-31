<div
	class={Object.keys(anchorClasses).join(' ')}
	use:Anchor={{
		addClass: (className) => {
			if (!anchorClasses[className]) {
				anchorClasses[className] = true;
			}
		},
		removeClass: (className) => {
			if (anchorClasses[className]) {
				delete anchorClasses[className];
				anchorClasses = anchorClasses;
			}
		}
	}}
	bind:this={anchor}
>
	<!-- le btn -->
	<IconButton
		on:click={() => menu.setOpen(true)}
		class="material-icons"
		aria-label="Go to account page"
	>
		<Image
			class="aspect-square  rounded-full object-cover"
			src="/img/avatar.jpg"
			alt="avatar"
		/>
	</IconButton>
	<!-- le dropdown-menu -->
	<Menu
		bind:this={menu}
		anchor={false}
		bind:anchorElement={anchor}
		anchorCorner="BOTTOM_LEFT"
	>
		<List twoLine>
			<Item on:SMUI:action={() => (clicked = 'Cut')}>
				<Text>
					<PrimaryText>Axel R.</PrimaryText>
					<SecondaryText>Member since 2022</SecondaryText>
				</Text>
			</Item>
			<Separator />
		</List>
		<List>
			<Item on:SMUI:action={() => (clicked = 'Paste')}>
				<Text>Mon compte</Text>
			</Item>
			<Item on:SMUI:action={() => (clicked = 'Delete')}>
				<Text>Se déconnecter</Text>
			</Item>
		</List>
	</Menu>
</div>

<!-- <pre class="status">Clicked: {clicked}</pre> -->
<script lang="ts">
	let anchor;
	let anchorClasses = {};
	//menu
	// import type { MenuComponentDev } from '@smui/menu';
	import Menu from '@smui/menu';
	import { Anchor } from '@smui/menu-surface';
	import List, { Item, Separator, Text, PrimaryText, SecondaryText } from '@smui/list';
	// import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button/src/IconButton.svelte';
	import { Image } from '@smui/image-list';
	// import ImageList, { ImageAspectContainer, Image, Supporting } from '@smui/image-list';
	let menu;
	let clicked = 'nothing yet';
</script>
