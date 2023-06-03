<script lang="ts">
	import { CONST__DB_COLLECTION__blog } from '$config/db/firebase/CONST__DB__colletions';
	import {
		CONST__UI__baseDistanceFromHeader,
		CONST__UI__baseMaxBodyApp
	} from '$config/ui/CONST__UI__base';
	import { ACTION__getAllSorted, STORE__CONTENT, STORE__DB } from '$stores/STORE_actions';
	import { Post, Slider, Twocol } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { isEntityPosts } from '$utils/type/guards';
	import { onDestroy, onMount } from 'svelte';

	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- blog-app');

		await ACTION__getAllSorted<I_ENTITY__post>(
			CONST__DB_COLLECTION__blog
			// CONST__FORM__addPost
		);

		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- ****** BLOG_APP ******',
			false,
			'MOUNT',
			true
		);
	});

	onDestroy(() => {
		console.log('destroy -------------------------------');
		$STORE__CONTENT = [];
		$STORE__DB = {
			collection: undefined,
			formAddInputs: undefined,
			datasetReset: undefined
		};
	});
</script>

<!-- MAX WIDTH for APP -->
<!-- {#await promise}
	<p>...waiting</p>
{:then data} -->
<main class="m-auto max-w-{CONST__UI__baseMaxBodyApp} {CONST__UI__baseDistanceFromHeader}">
	<Twocol>
		<div>
			<!-- <main class="m-auto px-10 pb-20 max-w-{CONST__UI__baseMaxBodyApp} {CONST__UI__baseDistanceFromHeader}"> -->
			<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
			{#if $STORE__CONTENT.length && isEntityPosts($STORE__CONTENT, true)}
				{#each $STORE__CONTENT as post}
					<Post {post} />
				{/each}
			{/if}
		</div>
		<div id="slider--1" class="  ">
			<Slider arr={['todo 1']} />
			<Slider arr={['todo 3']} />
			<Slider arr={['todo 3']} />
			<!-- <Slider arr={CONST__DATASET__slideshowA} />
			<Slider arr={CONST__DATASET__slideshowB} />
			<Slider arr={CONST__DATASET__slideshowC} /> -->
		</div>
	</Twocol>
</main>

<!-- {:catch error}
	<p style="color: red">{error.message}</p>
{/await} 

// TODO - do it elsewhere ?
// const IMU_sort = (mutable__arr: I_ENTITY__post[]) => {
// 	mutable__arr.sort((a, b) => {
// 		return a.createdAt >= b.createdAt ? -1 : 1;
// 	});
// 	// console.debug('react-ui >> IMU_sort says: arrSorted', mutable__arr);
// 	return mutable__arr;
// }; 
-->
