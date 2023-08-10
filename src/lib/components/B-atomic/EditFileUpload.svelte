<script lang="ts">
	import { axlog } from '$utils/log/axLog';
	// import { page } from '$app/stores';
	// import { axlog } from '$utils/axLog';
	import { onMount } from 'svelte';
	export let ivItm: I_DTO__formInput | undefined = undefined; // we have to dynamically add a field, that is the blob UPLOADED
	let imgFromElement;

	onMount(() => {
		axlog(ivItm, '/cms/', 'wc -- file upload', false, 'MOUNT', true);
	});

	// -0
	// -0 UPLOADED IMG
	// -0
	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			imgFromElement = e.target?.result;
			if (ivItm) {
				ivItm.value = imgFromElement;
				// step 1 - we add the file to the blob, so we update it to the storage when the user will click on SAVE
				// EROR HERE
				// ivItm.blobs = files;
				ivItm.blobs = image;
				console.debug('(ivItm.value) - ', ivItm.value);
				console.debug('(ivItm.blobs) - ', ivItm.blobs);
			}
		};
	};
</script>

<div
	id="FU--header"
	class="
relative
mx-auto
my-2
h-44
max-w-xs
overflow-hidden
rounded-xl
border-2
border-black
bg-gray-100
text-center
hover:bg-black/30
"
>
	<!-- ########################################################## -->
	<!-- PAsser idDoc si c mandatory -->
	<!-- name={'upload-id' + pos} -->
	<input
		id="FU--input"
		on:change={(e) => onFileSelected(e)}
		accept="image/png, image/jpeg"
		type="file"
		class="    
		megacenter
		absolute
		bottom-0
		left-0
		top-0
		z-10
		h-44
		cursor-pointer
		rounded-lg
		"
	/>
	<!-- ########################################################## -->
	{#if imgFromElement}
		<img
			id="FU--img-newLoaded"
			src={imgFromElement}
			alt=""
			class="megacenter max-h-44 max-w-xs bg-white bg-contain"
		/>
		<!-- ########################################################## -->
	{:else if ivItm && ivItm.value}
		<!-- il existe deja une img du storage, et donc on l affiche en 1er -->
		<img
			id="FU--img-initiale"
			src={ivItm.value}
			alt=""
			class="megacenter max-h-44 max-w-xs bg-white bg-contain"
		/>
	{/if}
</div>

<style lang="postcss">
	.megacenter {
		@apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform;
	}
</style>
