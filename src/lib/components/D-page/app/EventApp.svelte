<script lang="ts">
	import { CONST__DB_COLLECTION__event } from '$config/db/firebase/CONST__DB__colletions';
	import {
		CONST__UI__baseDistanceFromHeader,
		CONST__UI__baseMaxBodyApp
	} from '$config/ui/CONST__UI__base';
	import { ACTION__getAllSorted, STORE__CONTENT, STORE__DB } from '$stores/STORE_actions';
	import { EventCard } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { isEntityEvents } from '$utils/type/guards';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { onDestroy, onMount } from 'svelte';

	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- event-app');

		await ACTION__getAllSorted<I_ENTITY__event>(
			CONST__DB_COLLECTION__event
			//  CONST__FORM__addEvent
		);

		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- ****** EVENT_APP ******',
			false,
			'MOUNT',
			true
		);
	});

	onDestroy(() => {
		console.log('destroy -------------------------------');
		$STORE__CONTENT = [];
		$STORE__DB = {
			collection: undefined,
			formAddInputs: undefined,
			datasetReset: undefined
		};
	});
</script>

<!-- MAX WIDTH for APP -->
<main class="m-auto max-w-{CONST__UI__baseMaxBodyApp} {CONST__UI__baseDistanceFromHeader}">
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	{#if $STORE__CONTENT.length && isEntityEvents($STORE__CONTENT)}
		<LayoutGrid>
			{#each $STORE__CONTENT as entity, pos (entity.idDoc)}
				<Cell spanDevices={{ desktop: 2, tablet: 4, phone: 4 }}>
					<!-- <div class="demo-cell"> -->
					<EventCard event={entity} />
					<!-- </div> -->
				</Cell>
			{/each}
		</LayoutGrid>
		<!-- {:else}
			{openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
	{/if}
</main>
