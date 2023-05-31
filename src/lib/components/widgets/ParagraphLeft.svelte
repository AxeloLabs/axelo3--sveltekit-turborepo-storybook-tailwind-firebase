<script lang="ts">
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';

	export let text = 'N/A';
</script>

<div id="catalog-paragraph" class="">
	<div
		style="  color:var(--mdc-theme-on-secondary); border:{AX_CONST__UI__isDebugBorder
			? '1px solid blue'
			: 'none'}"
		class="text-xl font-bold"
	>
		{@html text}
	</div>
</div>
