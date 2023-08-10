<script lang="ts">
	import { STORE__FRAME_snack } from '$stores/STORE_frame';
	import { axlog } from '$utils/log/axLog';
	import { mdiWindowClose } from '@mdi/js';
	import { Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import IconButton from '@smui/icon-button';
	import Snackbar, { Actions, Label } from '@smui/snackbar';
	import { onMount } from 'svelte';
	export let open = false;
	export let text = 'N/A';
	export let type = 'N/A'; // firestore | success | warning | error
	// TOLERATED-BUG-TYPE -- let snackbar: Snackbar = null;
	let snackbar: any = null;

	$: open = $STORE__FRAME_snack.open;
	$: type = $STORE__FRAME_snack.type;
	$: text = $STORE__FRAME_snack.text;

	$: if (snackbar && open) snackbar.open();

	onMount(() => {
		axlog(null, 'component', 'wc -- snack', false, 'MOUNT', true);
	});
</script>

<!-- on:SMUISnackbar:closed={handleClosedStacked} -->
<!-- tip-SASS: we use custom sass functions  -->

<Snackbar bind:this={snackbar} timeoutMs={4000} class={'ax-snack-' + type}>
	<Label>{text}</Label>
	<Actions>
		<!-- on:click={() => (action = 'Dismissed')} -->
		<IconButton class="material-icons" title="Dismiss">
			<Icon component={Svg} viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiWindowClose} />
			</Icon>
		</IconButton>
	</Actions>
</Snackbar>
