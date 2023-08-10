<script lang="ts">
	import IconButton from '@smui/icon-button/src/IconButton.svelte';
	import { Image } from '@smui/image-list';
	import List, { Item, PrimaryText, SecondaryText, Separator, Text } from '@smui/list';
	import Menu from '@smui/menu';
	import { Anchor } from '@smui/menu-surface';
	let anchor;
	let anchorClasses = {};
	let menu;
	let clicked = 'nothing yet';
</script>

<!-- <pre class="status">Clicked: {clicked}</pre> -->

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
		<Image class="aspect-square  rounded-full object-cover" src="/img/avatar.jpg" alt="avatar" />
	</IconButton>
	<!-- le dropdown-menu -->
	<Menu bind:this={menu} anchor={false} bind:anchorElement={anchor} anchorCorner="BOTTOM_LEFT">
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
