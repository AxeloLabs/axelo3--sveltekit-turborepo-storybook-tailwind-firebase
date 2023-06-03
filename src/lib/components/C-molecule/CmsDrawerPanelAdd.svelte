<script lang="ts">
	import { ACTION__addEntity, STORE__CONTENT, STORE__DB } from '$stores/STORE_actions';
	import { EditInputValue } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { Content, Header, Panel } from '@smui-extra/accordion';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import { onMount } from 'svelte';

	let open = false;

	onMount(() => {
		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- cms drawer: panel add',
			false,
			'MOUNT',
			true
		);
	});
</script>

{#if $STORE__DB?.formAddInputs?.length}
	<Panel class="bg-green-600" square variant="outlined" extend bind:open>
		<Header>
			<span>AJOUTER</span>
			<div slot="icon">
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<IconButton>
					<Icon class="material-icons">add</Icon>
				</IconButton>
			</div>
		</Header>

		<!-- WE GET THE ANSWER OF THE USER in arrFormAdd -->
		<Content class="space-y-5  bg-green-800 text-center">
			{#each $STORE__DB.formAddInputs as ivItm}
				<EditInputValue bind:ivItm />
			{/each}
			<Button
				variant="raised"
				on:click={async () => {
					await ACTION__addEntity(); // post or event ?
				}}
			>
				<Label>ajouter</Label>
			</Button>
		</Content>
	</Panel>
{/if}

<!-- NEW BIG LOOP FOR UNION -->
<!-- {#if ivItm.union} -->
<!-- content here -->
<!-- TAB -->
<!-- <div > -->
<!-- <TabBar tabs={[...Array(2)].map((_v, i) => i + 1)} let:tab> -->
<!-- <TabBar tabs={['image', 'video']} let:tab bind:activeTab>
							<Tab
								{tab}
								on:click={() => {
									activeTab = tab;
								}}
							>
								<Label>{tab}</Label>
							</Tab>
						</TabBar> -->
<!-- ################## -->
<!-- BEROUT -->
<!-- ################## -->
<!-- {#if activeTab === 'video'}
							<EditInputValue bind:ivItm={ivItm.union[0]} />
						{:else if activeTab === 'image'}
							<EditInputValue bind:ivItm={ivItm.union[1]} />
						{/if} -->
<!-- </div> -->
