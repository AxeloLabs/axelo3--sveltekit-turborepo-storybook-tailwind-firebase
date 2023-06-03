<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	export let name = 'N/A';
	export let image = 'N/A';
</script>

<div
	style="  color:var(--mdc-theme-on-secondary);   border:{CONST__UI__isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="flex place-items-center font-bold"
>
	<img
		style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10 w-10"
		src={image}
		alt=""
	/>
	<div
		style=" border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
		class="ml-2 cursor-pointer text-xl hover:underline"
	>
		{name}
	</div>
</div>
