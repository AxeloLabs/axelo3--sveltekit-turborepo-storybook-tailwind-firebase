<!-- ######################################## -->
<!-- PRELOADING-INDICATOR                     -->
<!-- ######################################## -->
{#if visible}
	<div class="progress-container">
		<div
			class="progress"
			style="width: {p * 100}%"
		/>
	</div>
{/if}
{#if p >= 0.4}
	<div class="fade" />
{/if}

<style lang="postcss">
	.progress-container {
		/* ax  */
		/*  */
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		z-index: 999;
	}
	.progress {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-color: var(--mdc-primary);
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

<script lang="ts">
	let p = 0;
	let visible = false;
	//
	onMount(() => {
		visible = true;

		function next() {
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}

		setTimeout(next, 250);

		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- preloading-indicator', false, 'MOUNT', true);
	});
	//
	import { page } from '$app/stores';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_ACTORS';
	import { onMount } from 'svelte';
</script>
