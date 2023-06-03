<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	export let text = 'N/A';
</script>

<div
	style="color:var(--mdc-theme-on-secondary); border:{CONST__UI__isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="m-auto w-3/4 text-center font-bold"
>
	{@html text}
</div>
