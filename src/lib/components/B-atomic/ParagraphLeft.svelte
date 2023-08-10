<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	export let text = 'N/A';
</script>

<div id="catalog-paragraph" class="">
	<div
		style="  color:var(--mdc-theme-on-secondary); border:{CONST__UI__isDebugBorder
			? '1px solid blue'
			: 'none'}"
		class="text-xl font-bold"
	>
		{@html text}
	</div>
</div>
