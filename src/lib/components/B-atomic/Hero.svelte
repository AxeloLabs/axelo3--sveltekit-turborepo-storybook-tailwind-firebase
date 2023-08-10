<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	export let image1 = 'N/A';
	export let image2 = 'N/A';
</script>

<div id="ax-hero" class="  grid place-items-center">
	<img
		style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="h-52"
		src={image1}
	/>
	<img
		style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="mt-2 h-10"
		src={image2}
	/>
</div>
