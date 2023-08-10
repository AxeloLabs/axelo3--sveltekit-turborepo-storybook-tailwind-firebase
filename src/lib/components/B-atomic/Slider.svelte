<script lang="ts">
	import Button from '@smui/button';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	export let arr: string[] = [];
</script>

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
