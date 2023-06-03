<script lang="ts">
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { CmsDrawerPanelAdd, CmsDrawerPanelEdit } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import Accordion from '@smui-extra/accordion';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- cms drawer: panel add-edit',
			false,
			'MOUNT',
			true
		);
	});

	// $: {
	// 	console.debug('################ panel-add-edit :: $STORE__CONTENT');
	// 	console.dir($STORE__CONTENT);
	// 	console.debug('################');
	// }
</script>

{#if $STORE__CONTENT.length}
	<Accordion class="  text-black ">
		<!-- -0 ADD -->
		<CmsDrawerPanelAdd />

		<!-- -0 EDIT -->
		<!-- tip: we need pos, in order to delete actions -->
		{#each $STORE__CONTENT as entity, pos (entity.idDoc)}
			<CmsDrawerPanelEdit bind:entity {pos} />
		{/each}
	</Accordion>
{/if}
