<script>
	import InboxScreen from './InboxScreen.svelte';
	import './index.css';
	import { AppStore } from './Store.js';
</script>

<InboxScreen error={$AppStore} />
