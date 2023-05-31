<script lang="ts">
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';

	export let text = 'N/A';
</script>

<div
	style="color:var(--mdc-theme-on-secondary); border:{AX_CONST__UI__isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="m-auto w-3/4 text-center font-bold"
>
	{@html text}
</div>
