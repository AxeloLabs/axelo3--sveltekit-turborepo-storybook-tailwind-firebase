<script lang="ts">
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';

	export let text = 'N/A';
</script>

<div
	style=" border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
	class="  text-center font-bold"
>
	{text}
</div>
