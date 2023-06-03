<script lang="ts">
	import { page } from '$app/stores';
	import { CONST__UI__menuCms } from '$config/ui/CONST__UI__menuCms.json';
	import { STORE__CONTENT } from '$stores/STORE_actions';
	import { ReadTable } from '$ui/index';
	import { axlog } from '$utils/log/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog({ data: $STORE__CONTENT }, $page.url.pathname, 'HOME ');
	});
</script>

<ReadTable menus={CONST__UI__menuCms} sortId="id" />
