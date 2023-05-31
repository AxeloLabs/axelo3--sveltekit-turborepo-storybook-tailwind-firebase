<!-- <section class="splide" aria-label="Splide Basic HTML Example">
	<div class="splide__track">
		<ul class="splide__list"> -->
<!-- <li class="splide__slide">
				<img src="/media/logo-01.png" alt="" />
			</li> -->

<!-- {#each imgs as url}
				<li class="splide__slide">
					<img src={url} alt="" />
				</li>
			{/each}
		</ul>
	</div>
</section> -->
<script lang="ts">
	import Button from '@smui/button';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// import { AX_CONST__UI__baseDirContent, AX_CONST__UI__baseDirFrame } from '$const/ui/AX_CONST__UI__base';
	// --------------------------------------------------------
	// --------------------------------------------------------
	export let arr: string[] = [];
	// GALLERY_A
	// c la structure
	// inputValues: [
	// 				{
	// 					id: 'img-3',
	// 					index: 1,
	// 					type: 'file',
	// 					label: 'img-3',
	// 					inputValue: ''
	// 				},
	// 				{
	// 					id: 'seo-img-3',
	// 					index: 2,
	// 					type: 'text',
	// 					label: 'seo-img-3',
	// 					inputValue: ''
	// 				}
	// 			]
</script>

<!-- "https://www.youtube.com/embed/dLmiog2KqpA" -->
<!-- tip: must put size or it will be original size -->
<!-- <SplideSlide class="h-56">
		<div>
			<iframe
				width="450"
				height="260"
				src="https://www.youtube.com/embed/NUC2EQvdzmY?start=24&autoplay=1"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	</SplideSlide> -->
<!-- <Splide aria-label="My Favorite Images"> -->
<Splide
	hasTrack={false}
	options={{
		// rewind: true,
		// width: 800,
		// gap: '1rem'
	}}
>
	<Button class="splide__toggle " type="button">
		<span class="splide__toggle__play">Play</span>
		<span class="splide__toggle__pause">Pause</span>
	</Button>

	<SplideTrack>
		{#each arr as img}
			<SplideSlide>
				<img class="m-auto h-56 object-cover" src={img} alt="" />
			</SplideSlide>
		{/each}
	</SplideTrack>
	<!-- <div class="splide__progress">
		<div class="splide__progress__bar" />
	</div> -->
</Splide>
