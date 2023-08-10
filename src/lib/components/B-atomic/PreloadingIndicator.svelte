<script lang="ts">
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';
	export let visible = false;
	let p = 0;

	onMount(() => {
		// visible = true;

		// function next() {
		// 	p += 0.1;
		// 	const remaining = 1 - p;
		// 	if (remaining > 0.15) setTimeout(next, 500 / remaining);
		// }

		// setTimeout(next, 250);

		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- preloading-indicator',
			false,
			'MOUNT',
			true
		);
	});

	$: if (visible) start();

	const start = () => {
		function next() {
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}

		setTimeout(next, 250);
	};
</script>

{#if visible}
	<div class="progress-container">
		<div class="progress" style="width: {p * 100}%" />
	</div>
{/if}
{#if p >= 0.4}
	<div class="fade" />
{/if}

<style lang="postcss">
	.progress-container {
		/*  */
		/*  */
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		z-index: 999;
		background-color: gainsboro;
	}
	.progress {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-color: red;
		/* background-color: var(--mdc-theme-primary); */
		transition: width 0.4s;
	}
	.fade {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.3);
		pointer-events: none;
		z-index: 998;
		animation: fade 0.4s;
	}
	/* :global(html).dark .fade {
		background-color: rgba(0, 0, 0, 0.3);
	} */
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
