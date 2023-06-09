<script lang="ts">
	import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
	import { CONST__UI__isDebugBorder } from '$config/ui/CONST__UI__debug';
	import { ParagraphLeft, SeparatorMedium } from '$ui/index';
	export let post: I_ENTITY__post | undefined = undefined;

	const imgIcon = CONST__UI__baseDirMedia + 'frame/icon/icon-infinity--creme.png';

	const formatDate = (unix_timestamp: number) => {
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		const date = new Date(unix_timestamp * 1000);
		// Hours part from the timestamp
		const hours = date.getHours();
		// Minutes part from the timestamp
		const minutes = '0' + date.getMinutes();
		// Seconds part from the timestamp
		const seconds = '0' + date.getSeconds();

		// Will display time in 10:30:23 format
		const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		// console.log(formattedTime);
		return (
			date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' (' + formattedTime + ')'
		);
	};
</script>

{#if post}
	<div class="m-2">
		<!--               -->
		<!-- TITLE ARTICLE -->
		<div
			class="flex place-items-center py-3 border:{CONST__UI__isDebugBorder
				? '1px solid blue'
				: 'none'}"
		>
			<img
				style="border:{CONST__UI__isDebugBorder ? '1px solid blue' : 'none'}"
				class="w-16 pr-5"
				src={imgIcon}
				alt=""
			/>
			<div class="text-2xl font-bold uppercase">
				{post.titlePost.value}
			</div>
		</div>
		<!--                 -->
		<!-- CONTENT ARTICLE -->
		<ParagraphLeft text={post.body.value} />
		<div class="mdc-typography--caption">Crée le {formatDate(post.createdAt)}</div>
		<SeparatorMedium />
	</div>
{/if}
