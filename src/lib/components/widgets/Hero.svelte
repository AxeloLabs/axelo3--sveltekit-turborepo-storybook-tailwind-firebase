<script lang="ts">
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';

	export let img = 'N/A';
	export let text = 'N/A';
</script>

<div id="ax-hero" class="  grid place-items-center">
	<img
		style="border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="h-52"
		src={img}
	/>
	<img
		style="border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="mt-2 h-10"
		src={text}
	/>
</div>
