<script lang="ts">
	import { CONST__DB_COLLECTION__acceuil } from '$config/db/firebase/CONST__DB__colletions';
	import {
		CONST__UI__baseDistanceFromHeader,
		CONST__UI__baseMaxBodyApp
	} from '$config/ui/CONST__UI__base';
	import { ACTION__getAllSorted, STORE__CONTENT, STORE__DB } from '$stores/STORE_actions';
	import { ContactCard, Hero, Paragraph, SeparatorMedium, Slider, Title, Twocol } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { isEntityInputValues } from '$utils/type/guards';
	import { onDestroy, onMount } from 'svelte';

	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- acceuil-app');

		// it is not DUMB !
		await ACTION__getAllSorted<I_ENTITY__uiinputValue>(CONST__DB_COLLECTION__acceuil);

		// $STORE__DB?.collection =

		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- ****** ACCEUIL_APP ******',
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
<main class="m-auto p-10 max-w-{CONST__UI__baseMaxBodyApp} {CONST__UI__baseDistanceFromHeader}">
	<!-- <main class="m-auto space-y-5 max-w-{CONST__UI__baseMaxBodyApp} {CONST__UI__baseDistanceFromHeader}"> -->
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	{#if $STORE__CONTENT.length && isEntityInputValues($STORE__CONTENT)}
		<Hero image1={$STORE__CONTENT[0].value} image2={$STORE__CONTENT[1].value} />
		<SeparatorMedium />
		<Title text={$STORE__CONTENT[2].value} />
		<SeparatorMedium />
		<Paragraph text={$STORE__CONTENT[3].value} />
		<SeparatorMedium />
		<Twocol>
			<ContactCard
				title={$STORE__CONTENT[4].value}
				subtitle={$STORE__CONTENT[5].value}
				mail={$STORE__CONTENT[6].value}
				fb={$STORE__CONTENT[7].value}
				tel={$STORE__CONTENT[8].value}
			/>
			<div id="slider--1" class="  ">
				<!-- <Slider arr={CONST__DATASET__slideshowA} /> -->
				<Slider arr={['todo']} />
			</div>
		</Twocol>
	{/if}
</main>
