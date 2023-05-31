<script lang="ts">
	export let name = 'N/A';
	export let img = 'N/A';
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';
</script>

<div
	style="  color:var(--mdc-theme-on-secondary);   border:{AX_CONST__UI__isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="flex place-items-center font-bold"
>
	<img
		style="border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10 w-10"
		src={img}
		alt=""
	/>
	<div
		style=" border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class="ml-2 cursor-pointer text-xl hover:underline"
	>
		{name}
	</div>
</div>
