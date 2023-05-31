<!-- ######################################## -->
<!-- SNACK                                    -->
<!-- ######################################## -->
<!-- on:SMUISnackbar:closed={handleClosedStacked} -->
<!-- tip-SASS: we use custom sass functions  -->

<!-- <Snackbar
	bind:this={snackbar}
	timeoutMs={4000}
	class={'ax-snack-' + $AX_STORE__FRAME_snack.type}
>
	<Label>{$AX_STORE__FRAME_snack.text}</Label>
	<Actions>
		<IconButton
			class="material-icons"
			title="Dismiss">close</IconButton
		>
	</Actions>
</Snackbar> -->
<script lang="ts">
	// import { page } from '$app/stores';
	// import IconButton from '@smui/icon-button';
	// import Snackbar, { Actions, Label } from '@smui/snackbar';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_ACTORS';
	import { AX_STORE__FRAME_snack } from 'app/stores/AX_STORE__frame';
	import { onMount } from 'svelte';
	// TOLERATED-BUG-TYPE
	// let snackbar: Snackbar = null;
	let snackbar: any = null;
	//
	onMount(() => {
		axlog(
			{ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB },
			$page.url.pathname,
			'wc -- ax snack',
			false,
			'MOUNT',
			true
		);
	});
	//
	$: if ($AX_STORE__FRAME_snack.open && snackbar) {
		snackbar.open();
	}
</script>
