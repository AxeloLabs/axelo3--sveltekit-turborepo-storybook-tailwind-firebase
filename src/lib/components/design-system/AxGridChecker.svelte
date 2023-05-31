<script lang="ts">
	// !!
	// let arrw;
	// let arrh;
	let iw = 0;
	let ih = 0;
	let ow = 0;
	let oh = 0;
	// !!
	// $: {
	// console.debug('🚔 debug screen : ', iw, ih, ow, oh); !!!!!
	// arrw = new Array(iw);
	// arrh = new Array(ih);
	// }
</script>

<svelte:window
	bind:innerWidth={iw}
	bind:innerHeight={ih}
	bind:outerHeight={oh}
	bind:outerWidth={ow}
/>

<div id="catalog-gridchecker" class="relative z-0">
	<!-- !!!!!!!!! 4dp and 8dp DP grilles -->
	<!-- !!!! 8 DP -->
	{#if true}
		<div class="fixed inset-0 grid grid-flow-col" style="gap:7px;">
			{#each Array(iw) as _unused, i}
				<div class="h-full opacity-50" style="width: 0px; border-right:1px solid gray " />
			{/each}
		</div>
	{/if}
	{#if true}
		<div class="fixed inset-0 grid grid-flow-row" style="gap:7px;">
			{#each Array(ih) as _unused, i}
				<div class="w-full opacity-50" style="height: 0px; border-top:1px solid gray;" />
			{/each}
		</div>
	{/if}

	<!-- !!!! 4 DP -->
	{#if true}
		<div class="fixed inset-0 grid grid-flow-col" style="gap:3px;">
			{#each Array(iw) as _unused, i}
				<div class="h-full opacity-50" style="width: 0px; border-right:1px solid gray " />
			{/each}
		</div>
	{/if}
	{#if true}
		<div class="fixed inset-0 grid grid-flow-row" style="gap:3px;">
			{#each Array(ih) as _unused, i}
				<div class="w-full opacity-50" style="height: 0px; border-top:1px solid gray;" />
			{/each}
		</div>
	{/if}
</div>
