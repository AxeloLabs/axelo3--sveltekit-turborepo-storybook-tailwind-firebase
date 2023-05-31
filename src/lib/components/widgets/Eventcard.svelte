<script lang="ts">
	import { AX_CONST__UI__isDebugBorder } from '$const/ui/AX_CONST__UI__debug';
	import SeparatorMedium from './SeparatorMedium.svelte';

	export let event: I_ENTITY__event; // it is an array
</script>

<!-- ######################################### -->
<!-- EVENT -->
<!-- ######################################### -->
<div
	style="border:{AX_CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
	class="flex flex-col items-center text-center font-bold"
>
	<!--               -->
	<!-- AFFICHE -->
	<!--               -->
	<img class="w-40" src={event.image.value} alt="" />
	<!--                 -->
	<!-- CONTENT ARTICLE -->
	<!--                 -->
	<div style="">{event.date.value}</div>
	<!-- tip: vinz n a pas mis le tag -->
	<!-- <SeparatorMedium />
	<div>{event.titleEvent.value}</div> -->
	<SeparatorMedium />
	<div class="font-bold" style="color:var(--mdc-theme-on-secondary)">
		{event.body.value}
	</div>
</div>
