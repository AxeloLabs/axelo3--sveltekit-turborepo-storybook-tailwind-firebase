<script lang="ts">
	import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';
	// tuto bg: https://www.youtube.com/watch?v=ywLgqJjLUm4
	let imgBg = CONST__UI__baseDirMedia + 'frame/bg/bg-1.jpg'; // tip: do not flash

	onMount(() => {
		axlog(null, 'component', 'wc -- LayoutBg', false, 'MOUNT', true);
	});
</script>

<!-- tip: scroll de la page selon overflow ici -->
<div
	class="fixed inset-0 h-full w-full overflow-y-auto bg-orange-800 bg-cover bg-fixed bg-left-bottom"
	style="background-image: url({imgBg});
	 border:{CONST__UI__isDebugBorder ? '4px solid yellow' : 'none'}"
>
	<slot />
</div>

<!-- class=" h-full w-full border-4  bg-cover bg-fixed bg-left-bottom bg-no-repeat" -->
<!-- // -------------------------------
// const BG = {
// 	'/acceuil': { url: '/media/bg/bg-1.jpg' }
// 	// '/la-demarche': { url: '/media/bg/bg-2.jpg' },
// 	// '/blog': { url: '/media/bg/bg-3.jpg' },
// 	// '/event': { url: '/media/bg/bg-1.jpg' },
// 	// '/newsletter': { url: '/media/bg/bg-1.jpg' }
// };
// $: {
// const menu: string = isAdmin ? $page.url.pathname.replace('/cms', '') : $page.url.pathname;
// const imgUrl: string = BG[menu] ? BG[menu].url : 'N/A';
// imgBg = imgUrl;
// console.debug('menu + BG[menu]', menu, BG[menu]);
// } -->
