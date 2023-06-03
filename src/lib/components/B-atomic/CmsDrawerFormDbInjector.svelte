<script lang="ts">
	import { ACTION__reset_inject, STORE__CONTENT } from '$stores/STORE_actions';
	import { axlog } from '$utils/log/axLog';
	import Button, { Label } from '@smui/button';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- cms drawer: form injector',
			false,
			'MOUNT',
			true
		);
	});
</script>

<div class=" grid grid-flow-col place-items-center gap-2 p-10">
	<!-- GOOD -->
	<Button
		on:click={async () => {
			await ACTION__reset_inject();
		}}
		variant="raised"
	>
		<Label>{'WARN: Factory Reset'}</Label>
	</Button>
</div>
