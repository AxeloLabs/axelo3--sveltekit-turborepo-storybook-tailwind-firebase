<script lang="ts">
	import { page } from '$app/stores';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { axlog } from '$utils/log/axLog';
	import Button from '@smui/button';
	import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';
	import { onMount } from 'svelte';
	// import { script_updateCities } from 'src/lib/libshared/firebasesdk/firestore/script/';

	type Script = {
		id: number;
		name: string;
		script: () => unknown;
	};
	let items: Script[] = [
		// { id: 1, name: "Update in 'contacts' cities for '--/--'" }
		// { id: 1, name: "Update in 'contacts' cities for '--/--'", script: script_updateCities }
		// {
		// 	id: 2,
		// 	name: "Remove in 'contacts' already liked elements in 'contacts_liked'",
		// 	script: script_cleanTmp
		// }
	];
	let loaded = true;
	const loadScript = async (f: () => unknown) => {
		loaded = false;
		await f();
		loaded = true;
	};

	onMount(() => {
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, 'xxx');
	});
</script>

<div class="bg-brown grid h-screen justify-center pt-20">
	<div class="w-min">
		<DataTable table$aria-label="User list" style="width: 100%;">
			<Head>
				<Row>
					<Cell numeric>ID</Cell>
					<Cell style="width: 100%;">Name</Cell>
					<Cell>Execute script</Cell>
					<!-- <Cell>Email</Cell> -->
				</Row>
			</Head>
			<Body>
				{#each items as item (item.id)}
					<Row>
						<Cell numeric>{item.id}</Cell>
						<Cell>{item.name}</Cell>
						<Cell><Button on:click={async () => await loadScript(item.script)}>PLAY</Button></Cell>
						<!-- <Cell>{item.username}</Cell> -->
						<!-- <Cell>{item.email}</Cell> -->
					</Row>
				{/each}
			</Body>

			<LinearProgress
				indeterminate
				bind:closed={loaded}
				aria-label="Data is being loaded..."
				slot="progress"
			/>
		</DataTable>
	</div>
</div>
