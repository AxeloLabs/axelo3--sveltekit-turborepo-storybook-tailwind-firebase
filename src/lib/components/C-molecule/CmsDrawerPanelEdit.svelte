<script lang="ts">
	import { ACTION__delItem, STORE__CONTENT } from '$stores/STORE_actions';
	import { EditInputValue } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { isEntityEvent, isEntityPost } from '$utils/type/guards';
	import { Content, Header, Panel } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import { onMount } from 'svelte';
	export let pos = 0;
	export let entity: T_ENTITIES | undefined = undefined; // must bind -- 	// TODO - I could constraint to event and post ONLY !! (iv are impossible here, because I guard before)
	let open = false;

	onMount(() => {
		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- cms drawer: panel edit',
			false,
			'MOUNT',
			true
		);
	});
</script>

<!-- x1 ACCORDION-PANEL -->
<!-- {#if $STORE__CONTENT[pos]} -->
{#if entity}
	<Panel square variant="outlined" extend bind:open>
		<Header class="bg-white">
			<!-- <span slot="description"> -->
			<!-- base guard -->
			<div class="">
				{#if isEntityPost(entity)}
					{entity.titlePost.value}
				{:else if isEntityEvent(entity)}
					{entity.titleEvent.value}
				{/if}
			</div>
			<!-- </span> -->
			<div slot="icon" class="">
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<!-- {#if type === 'blog' || type === 'slideshow'} -->
				<!-- preventDefault -->
				<IconButton
					on:click={async () => {
						await ACTION__delItem(pos);
					}}
				>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
				<!-- {/if} -->
			</div>
		</Header>
		<Content class=" bg-blue-800">
			<!-- {#if isEditInputValue(entity)}
				{#each entity as ivItm, pos (ivItm.idDoc)}
					<EditInputValue bind:ivItm />
				{/each}
			{/if} -->
			<!-- OBJECT TECNIQ (each prop, is an iv)-->
			{#each Object.entries($STORE__CONTENT[pos]) as [key, prop], idx}
				<EditInputValue bind:ivItm={entity[key]} />
			{/each}
		</Content>
	</Panel>
{/if}
