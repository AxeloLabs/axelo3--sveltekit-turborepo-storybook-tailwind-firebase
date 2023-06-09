<script lang="ts">
	import { page } from '$app/stores';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, '/');
	});
</script>

<div class="text-4xl">RACINE du SITE</div>
<div class="ml-10">
	<br />
	<a href="/">/</a>
	<br />
	<br />
	<a href="/acceuil">/acceuil</a>
	<br />
	<a href="/la-demarche">/la-demarche</a>
	<br />
	<a href="/blog">/blog</a>
	<br />
	<a href="/events">/events</a>
	<br />
	<a href="/login">/login</a>
	<br />
	<br />
	<a href="/cms">/cms</a>
	<br />
	<a href="/cms/acceuil">/cms/acceuil</a>
	<br />
	<a href="/cms/la-demarche">/cms/la-demarche</a>
	<br />
	<a href="/cms/blog">/cms/blog</a>
	<br />
	<a href="/cms/events">/cms/events</a>
	<br />
	<a href="/cms/profile">/cms/profile</a>
	<br />
	<br />
	<a href="/z/debug">/z/debug</a>
	<br />
	<a href="/z/debug/grid">/z/debug/grid</a>
	<br />
	<a href="/z/debug/theme-color">/z/debug/theme-color</a>
	<br />
	<a href="/z/debug/theme-elevation">/z/debug/theme-elevation</a>
	<br />
	<a href="/z/debug/theme-typo">/z/debug/theme-typo</a>
	<br />
	<br />
	<a href="/z/scripts">/z/scripts</a>
	<br />
	<br />
	<br />
</div>

<div class="text-4xl">END</div>
