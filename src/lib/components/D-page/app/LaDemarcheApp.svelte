<!-- {:catch error} -->

<!-- <p style="">{error.message}</p> -->
<script lang="ts">
	import { CONST__DB_COLLECTION__lademarche } from '$config/db/firebase/CONST__DB__colletions';
	import {
		CONST__UI__baseDirMedia,
		CONST__UI__baseDistanceFromHeader,
		CONST__UI__baseMaxBodyApp
	} from '$config/ui/CONST__UI__base';
	import { ACTION__getAllSorted, STORE__CONTENT, STORE__DB } from '$stores/STORE_actions';
	import { Hero2, Paragraph, Separator } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { isEntityInputValues } from '$utils/type/guards';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { onDestroy, onMount } from 'svelte';

	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- lademarche-app');
		await ACTION__getAllSorted<I_ENTITY__uiinputValue>(CONST__DB_COLLECTION__lademarche);

		axlog(
			{ data: $STORE__CONTENT },
			'component',
			'wc -- ****** LA-DEMARCHE_APP ******',
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
<main class="m-auto max-w-{CONST__UI__baseMaxBodyApp} {CONST__UI__baseDistanceFromHeader}">
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	<!-- SHORTCUT -- array?.length -->
	{#if $STORE__CONTENT.length && isEntityInputValues($STORE__CONTENT)}
		<!-- static => inputValue only ! -->
		<!-- {#if isInputValue($STORE__CONTENT)} -->
		<!-- <div class="grid h-full w-full grid-cols-3 gap-10"> -->
		<LayoutGrid>
			<!-- ####################################### -->
			<Cell span={4}>
				<div class="space-y-5">
					<Hero2 text="L'équipe" />
					<Paragraph text={$STORE__CONTENT[0].value} />
					<Separator />
					<Paragraph text={$STORE__CONTENT[1].value} />
					<Separator />
					<Paragraph text={$STORE__CONTENT[2].value} />
					<Separator />
					<!-- src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg" -->
					<img class="m-auto" src={$STORE__CONTENT[12].value} alt="" />
				</div>
			</Cell>
			<!-- ####################################### -->
			<Cell span={4}>
				<div class="space-y-5">
					<Hero2 text="La démarche" />
					<div class="grid grid-flow-col place-items-center">
						<img
							class="h-24 justify-self-end"
							src={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-decom--creme.png'}
							alt=""
						/>
						<img class="m-auto" src={$STORE__CONTENT[13].value} alt="" />
						<!-- <img
							class="h-48"
							src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_02.jpg"
							alt=""
						/> -->
						<img
							class="h-24 rotate-180 justify-self-start"
							src={CONST__UI__baseDirMedia + 'frame/icon/icon-contact-decom--creme.png'}
							alt=""
						/>
					</div>
					<Paragraph text={$STORE__CONTENT[3].value} />
					<Separator />
					<Paragraph text={$STORE__CONTENT[4].value} />
					<Separator />
					<Paragraph text={$STORE__CONTENT[5].value} />
					<Separator />
					<Paragraph text={$STORE__CONTENT[6].value} />
					<Separator />
				</div>
			</Cell>
			<!-- ####################################### -->
			<Cell span={4}>
				<div class="">
					<Hero2 text="formule" />
					<div class="m-5 space-y-5 rounded-md bg-white/10 p-2">
						<Paragraph text={$STORE__CONTENT[7].value} />
						<Separator />
						<Paragraph text={$STORE__CONTENT[8].value} />
						<Separator />
						<Paragraph text={$STORE__CONTENT[9].value} />
						<Separator />
						<Paragraph text={$STORE__CONTENT[10].value} />
						<Separator />
						<Paragraph text={$STORE__CONTENT[11].value} />
					</div>
					<Separator />
					<!-- <div class="w-full bg-red-400"> -->
					<img class="m-auto" src={$STORE__CONTENT[14].value} alt="" />
					<!-- </div> -->
					<!-- <img
						src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg"
						alt=""
					/> -->
				</div>
			</Cell>
		</LayoutGrid>
		<!-- {:else}
			{openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
	{/if}
</main>
