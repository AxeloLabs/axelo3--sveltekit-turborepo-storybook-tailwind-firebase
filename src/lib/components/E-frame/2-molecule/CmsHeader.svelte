<script lang="ts">
	import { CONST__UI__favicon } from '$config/ui/CONST__UI__base';
	import { CONST__UI__isDebugBg } from '$config/ui/CONST__UI__debug';
	import { CONST__UI__urlHome } from '$config/ui/CONST__UI__urls';
	import { ACTION__save } from '$stores/STORE_actions';
	import { STORE__FRAME_drawerIsOpen } from '$stores/STORE_frame';
	import { axlog } from '$utils/log/axLog';
	import Button, { Label } from '@smui/button';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';
	import { Section } from '@smui/top-app-bar';
	import { onMount } from 'svelte';
	let dialog: any = undefined;
	let open = false; // cf. dialog
	const title = 'ENREGISTRER';
	const msg = 'Etes vous sure ?';

	onMount(() => {
		axlog(null, '/cms/', 'wc -- HEADER', false, 'MOUNT', true);
	});

	$: if (dialog && open) dialog.open();
</script>

<!-- bind:this={dialog} -->
{#if open}
	<Dialog id="dialog--1" bind:open>
		<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
		<Title id="simple-title">{title}</Title>
		<Content id="simple-content--1">
			{msg}</Content
		>
		<Actions>
			<Button on:click={() => (open = false)}>
				<Label>No</Label>
			</Button>
			<Button
				on:click={async () => {
					open = false;
					await ACTION__save();
				}}
			>
				<Label>Yes</Label>
			</Button>
		</Actions>
	</Dialog>
{/if}
<!-- ######################################## -->
<!-- LOGO CLIENT -->
<Section
	align="start"
	style="background:{CONST__UI__isDebugBg ? 'gray' : 'none'}"
	class="underline"
>
	<a
		on:click={() => {
			$STORE__FRAME_drawerIsOpen = false;
		}}
		class=" flex w-max items-center"
		href={CONST__UI__urlHome}
	>
		<img class="h-10 w-10" src={CONST__UI__favicon} alt="" />
		<div class="ml-2">Toucher Terre</div>
	</a>
</Section>
<Section
	class="hidden justify-center lg:flex"
	style="background:{CONST__UI__isDebugBg ? 'orange' : 'none'}"
>
	<Title
		class="rounded-3xl border-y-2 border-x-8 border-t border-x-green-500 border-y-green-300 bg-black text-green-200 
		">AXELO 3</Title
	>
</Section>
<Section align="end" style="background:{CONST__UI__isDebugBg ? 'green' : 'none'}">
	<!-- SAVE -->
	<!-- callback={async () => await ACTION_SAVE($STORE__CONTENT__DB?.conf__db, $STORE__CONTENT)} -->
	<Button
		on:click={() => {
			open = true;
			console.debug('opened');
			// await callback();
		}}
		variant="raised"
	>
		<Label>Enregistrer</Label>
	</Button>
</Section>

<!-- <a href={_CONST__homeUrl} rel="prefetch"> -->
<!-- <Fab mini> -->
<!-- <img src="media/ax/3.jpg" alt="" /> -->
<!-- <Icon class="material-icons">login</Icon> -->
<!-- </Fab> -->
<!-- </a>  -->
<!-- FAB not used NOW -->
<!-- <IconButton
		href={_CONST__homeUrl}
		class="material-icons"
		title="Dismiss">logout</IconButton
	> -->
<!-- https://svelte.dev/tutorial/svelte-options -->
<!-- <svelte:options accessors={true}/> -->
<!-- DIALOG                                   -->
<!-- aria-labelledby="simple-title"
	aria-describedby="simple-content" -->
<!-- STORE__UI_ISOPEN_dialog.set({
		// 			title: title,
		// 			text: msg,
		// 			open: true,
		// 			answer: 'N/A'
		// 		}); -->
