<script lang="ts">
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	import { SeparatorMedium } from '$ui/index';
	export let event: I_ENTITY__event; // it is an array
</script>

<div
	style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
	class="flex flex-col items-center text-center font-bold"
>
	<img class="w-40" src={event.image.value} alt="" />

	<SeparatorMedium />
	<div class=" uppercase">{event.titleEvent.value}</div>
	<div class="text-white">{event.date.value}</div>
	<SeparatorMedium />

	<div class="font-bold" style="color:var(--mdc-theme-on-secondary)">
		{event.body.value}
	</div>
</div>
