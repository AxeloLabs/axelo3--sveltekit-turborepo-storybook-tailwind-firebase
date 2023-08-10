<script lang="ts">
	import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	export let text = 'N/A';
	const image = CONST__UI__baseDirMedia + 'frame/icon/icon-infinity--creme.png';
</script>

<div class="grid place-items-center">
	<div
		style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class=" text-3xl font-bold uppercase"
	>
		{text}
	</div>
	<img
		alt=""
		style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10 w-20"
		src={image}
	/>
</div>
