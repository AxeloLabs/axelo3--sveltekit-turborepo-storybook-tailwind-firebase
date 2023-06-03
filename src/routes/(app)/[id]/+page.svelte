<script lang="ts">
	import { page } from '$app/stores';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { AcceuilApp, BlogApp, EventApp, LaDemarcheApp } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, 'page -- ID-LAYOUT (app)');
	});
</script>

{#if $page.url.pathname === '/acceuil'}
	<AcceuilApp />
{:else if $page.url.pathname === '/la-demarche'}
	<LaDemarcheApp />
{:else if $page.url.pathname === '/creations-realisations'}
	<BlogApp />
{:else if $page.url.pathname === '/prochains-rendez-vous'}
	<EventApp />
{:else}
	<!-- login TODO -->
	<slot />
{/if}
