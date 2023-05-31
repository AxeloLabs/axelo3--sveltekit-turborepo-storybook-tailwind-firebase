<script lang="ts">
	import { AX_CONST__UI__baseDirFrame } from '$const/ui/AX_CONST__UI__base';
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';

	export let title = 'N/A';
	const img = AX_CONST__UI__baseDirFrame + 'icon/icon-infinity--creme.png';
</script>

<div class="grid place-items-center">
	<div
		style="border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class=" text-3xl font-bold uppercase"
	>
		{title}
	</div>
	<img
		alt=""
		style="border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10 w-20"
		src={img}
	/>
</div>
