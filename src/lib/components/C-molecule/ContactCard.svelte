<script lang="ts">
	import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	import { ContactCardItem, Separator } from '$ui/index';
	export let title = 'N/A';
	export let subtitle = 'N/A';
	export let mail = 'N/A';
	export let fb = 'N/A';
	export let tel = 'N/A';
</script>

<div
	style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
	class="mt-5 rounded-2xl bg-white/10 p-2"
>
	<!--  -->
	<div class="place-body-center grid grid-flow-col">
		<img
			class="h-8 self-center justify-self-end"
			src={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-decom--creme.png'}
			alt=""
		/>
		<div class="m-auto text-4xl">
			{title}
		</div>
		<img
			class="h-8 rotate-180 self-center justify-self-start"
			src={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-decom--creme.png'}
			alt=""
		/>
	</div>
	<div class="text-center text-xl">
		{subtitle}
	</div>
	<Separator />
	<ContactCardItem
		name={mail}
		image={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-mail.png'}
	/>
	<ContactCardItem name={fb} image={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-fb.png'} />
	<ContactCardItem name={tel} image={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-tel.png'} />
</div>
