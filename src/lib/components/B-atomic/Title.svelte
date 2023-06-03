<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	export let text = 'N/A';
</script>

<div
	style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
	class="text-center font-bold"
>
	{text}
</div>
