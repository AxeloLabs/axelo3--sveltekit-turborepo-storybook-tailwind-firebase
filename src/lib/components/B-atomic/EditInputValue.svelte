<script lang="ts">
	import { CONST__UI__baseFormatMedia } from '$config/ui/CONST__UI__base';
	import FileUpload from '$ui/B-atomic/EditFileUpload.svelte';
	import Textfield from '@smui/textfield';
	// import { onMount } from 'svelte';
	export let ivItm: I_ENTITY__uiinputValue | I_DTO__formInput | undefined = undefined; // take a reference to the STORE
	// export let pos: number | undefined = undefined;

	// onMount(() => {
	// too verbose
	// axlog({ ivItm, pos }, 'component', 'wc -- input value', false, 'MOUNT', true);
	// });
</script>

<!-- ####################################################### -->
<!-- INPUT VALUE                             -->
<!-- ####################################### -->
{#if ivItm}
	<!-- TODO - a remettre, je fais une version sans imge, ni slideshow -->
	<!-- {#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === 'video')} -->
	{#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === CONST__UI__baseFormatMedia.video)}
		<!-- TXT -->
		<!-- ####################################### -->
		<Textfield
			variant="filled"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={ivItm.value}
			label={ivItm.label}
		/>
	{:else if ivItm.tag === 'area'}
		<!-- TXT AREA -->
		<!-- ####################################### -->
		<Textfield
			style=" height: 200px;"
			textarea
			class="w-full border-8 border-gray-100 bg-gray-100   outline-gray-100 hover:bg-gray-200 focus:bg-gray-500 "
			bind:value={ivItm.value}
			label={ivItm.label}
		/>
	{:else if ivItm.tag === 'file'}
		<!-- FILE -->
		<!-- ####################################### -->
		<!-- {pos} -->
		<FileUpload bind:ivItm />
	{/if}
{/if}
