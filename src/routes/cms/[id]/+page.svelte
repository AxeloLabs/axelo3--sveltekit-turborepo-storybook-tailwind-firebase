<script lang="ts">
	import { page } from '$app/stores';
	import { CONST__DATASET__acceuil } from '$config/datasets/CONST__DATASET__acceuil.json';
	import { CONST__DATASET__event } from '$config/datasets/CONST__DATASET__event.json';
	import { CONST__DATASET__lademarche } from '$config/datasets/CONST__DATASET__lademarche.json';
	import { CONST__DATASET__post } from '$config/datasets/CONST__DATASET__post.json';
	import {
		CONST__DB_COLLECTION__acceuil,
		CONST__DB_COLLECTION__blog,
		CONST__DB_COLLECTION__event,
		CONST__DB_COLLECTION__lademarche
	} from '$config/db/firebase/CONST__DB__colletions';
	import { STORE__CONTENT, STORE__DB } from '$stores/STORE_actions';
	import { AcceuilApp, BlogApp, EventApp, LaDemarcheApp } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		// console.log('bro, error, STORE_FORM is not initialized', STORE__DB, $STORE__DB.collection);
		// if ($STORE__DB) {
		// } else console.log('bro, error, STORE_FORM is not initialized', STORE__DB, $STORE__DB);
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, 'page -- ID-LAYOUT (cms)');
	});

	$: {
		if ($page.url.pathname === '/cms/acceuil') {
			$STORE__DB.collection = CONST__DB_COLLECTION__acceuil;
			$STORE__DB.datasetReset = CONST__DATASET__acceuil;
		} else if ($page.url.pathname === '/cms/la-demarche') {
			$STORE__DB.collection = CONST__DB_COLLECTION__lademarche;
			$STORE__DB.datasetReset = CONST__DATASET__lademarche;
		} else if ($page.url.pathname === '/cms/creations-realisations') {
			$STORE__DB.collection = CONST__DB_COLLECTION__blog;
			$STORE__DB.datasetReset = CONST__DATASET__post;
			$STORE__DB.formAddInputs;
		} else if ($page.url.pathname === '/cms/prochains-rendez-vous') {
			$STORE__DB.collection = CONST__DB_COLLECTION__event;
			$STORE__DB.datasetReset = CONST__DATASET__event;
			$STORE__DB.formAddInputs;
		}
	}
</script>

{#if $page.url.pathname === '/cms/acceuil'}
	<AcceuilApp />
{:else if $page.url.pathname === '/cms/la-demarche'}
	<LaDemarcheApp />
{:else if $page.url.pathname === '/cms/creations-realisations'}
	<BlogApp />
{:else if $page.url.pathname === '/cms/prochains-rendez-vous'}
	<EventApp />
{:else}
	<slot />
{/if}
