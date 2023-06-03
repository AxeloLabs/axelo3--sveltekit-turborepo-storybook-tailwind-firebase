<!-- @apply bg-orange-900/60; -->
<!-- style="background-color:{isAdmin ? 'rgb(24 149 5 / 79%)' : 'rgba(130,65,31,0.8)'}; -->

    // ----------------------------------------------------------
    // function demo() {
    // 	const a: I_ENTITY__uiinputValue = { label: 'a', value: 'b', id: 'c' };
    // 	let post: I_ENTITY__event = { titleEvent: a, slug: a, body: a, date: a, image: a };
    // 	if (isEntityPost(post)) console.debug(post.titlePost);
    // 	if (isEntityEvent(post)) console.debug(post.titlePost);
    // 	// ----------------
    // 	function getSmallPet(): Animal {
    // 		const a: Animal = { swim: () => 'a' }; // secret fish at dyn time
    // 		return a;
    // 	}
    // 	type Animal = Fish | Bird;
    // 	type Fish = { swim: () => 'a' };
    // 	type Bird = { fly: () => 'a' };
    // 	function isFish(pet: Animal): pet is Fish {
    // 		return (pet as Fish).swim !== undefined;
    // 	}
    // 	// Both calls to 'swim' and 'fly' are now okay.
    // 	let pet = getSmallPet();
    // 	if (isFish(pet)) {
    // 		pet.swim();
    // 	} else {
    // 		pet.fly();
    // 	}
    // }

    // $: open = $page.url.pathname.includes('/cms/') ? true : false;

        // \x1B[46;97;4m cyan
    // \x1B[44;97;4m bleu
    // \x1B[105;97;4m rose
    // \x1B[m end

    @ts-ignore

- :global(.whatever)
  🌎
  🚔
  🏎️
  ✅

<!-- <div  on:openSnackEvent={onOpenSnack}> -->
<!-- <slot on:openSnackEvent /> -->

    	// dispatch('openSnackEvent', {
    	// 	snackOpen: true,
    	// 	snackType: 'success',
    	// 	snackText: 'a voir'
    	// });

const dispatch = createEventDispatcher();

    	    // const dispatch = createEventDispatcher();
    	// dispatch('delete', {
    	// 	ii: ii
    	// });
    	<!-- // const dispatch = createEventDispatcher();

// onMount(() => {
// console.debug('🚔 -- onMount');
// dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// });

// afterUpdate(() => {
// console.debug('🚔 -- afterUpdate');
// // dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// }); -->

<!-- // gs://y-toucherterre.appspot.com/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.png -->

    // files_all.forEach(async (fileList, i) => {
    	// 	if (fileList) {
    	// 		const urlStorage = await upload(fileList[0]);
    	// 		// const urlStorage = await upload(fileList[0]);

    	// 		$store[i].iv = urlStorage;
    	// 		console.debug('🚔 UPDATE FINAL : ', $store[i].iv, ' -- ', urlStorage);
    	// 		console.debug('🚔 ________________________________');
    	// 	}
    	// });

    	<script>
    // export let hh = 'space.0';
    // let hhh = 'N/A';
    // $: {
    // 	hhh = 'h-[calc(100vh-theme(' + hh + '))]';
    // 	console.debug('🚔 ici:', hhh);
    // }
    // TODO - dj mike, met l interpolation

</script>

<!-- this is a bg-container widget -->
<!-- TODO MIKU - il faut automate la var -->
<div class="grid  justify-center border-4	border-red-500">
	<!-- pour la div du dessous:  h-[calc(100vh-theme(space.12)-12px)] -->
	<div
		id="catalog-layoutCenter-1"
		class="relative   border-4 border-green-500"
		style="max-width: 1080px;"
	>
		<!-- ajouter le scroll ici change tout -->
		<!-- <div
		id="catalog-container-item1"
		class="relative overflow-y-scroll   border-green-500 border h-[calc(100vh-theme(space.12)-12px)] "
		styl
		e="max-width: 1080px;"
	> -->
		<slot />
	</div>
</div>

    		<!-- <div slot="content-1" id="content-1--pageAdmin" class="bg-white "> -->

<!-- body -->
<!-- <div class="grid grid-flow-col content-start"> -->
<!-- <LayoutCenter1> -->
<!-- hh={'space.' + _HEADER_APP__HEIGHT} -->
<!-- <LayoutCenter1> -->
<!-- <slot name="app" /> -->
<!-- </LayoutCenter1> -->
<!-- hh={'space.' + _HEADER_APP__HEIGHT} -->
<!-- <LayoutCenter1> -->
<!-- <slot name="cms">
		<div >bloc d admin</div>
	</slot> -->
<!-- </LayoutCenter1> -->
<!-- </div> -->
<!-- </LayoutCenter1> -->
<!-- </div> -->

<!--  -->
<style lang="postcss">
	/* .bloc-admin.isAdmin {
		@apply block h-full w-96 border border-purple-500;
	} */
</style>

// const hstr = 'h-';
// let hjoin = 'N/A';
// $: {
// hjoin = hstr + h;
// console.debug(hjoin);
// }

<!-- this is the main header -->
<!-- {@debug hjoin} -->
<!-- class="{hjoin}  -->
<div id="catalog-header" class="border border-yellow-500" />
<!-- just to equilibrate the previous absolute... -->
<!-- <div class="h-{h} bg-red-200" /> -->

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

    import { onMount } from 'svelte';
    onMount(() => {
    	// menus.update((n) => data);
    });

<List class="bg-yellow-500">
	{#each _HEADERMENU_CMS as item}
		<!-- {#if item.submenus} -->
		<!-- FOR THE CMS -->
		<!-- <SubmenuItem menu= submenus={item.submenus} /> -->
		<!-- {:else} -->
		<!-- href="javascript:void(0)" activated={active === item.menu} -->
		<Item>
			<a href={'/cms' + item.url} class="w-full">
				<Text>{item.page}</Text>
			</a>
		</Item>
		<!-- <MenuItem img={item.img} url={item.url} menu={item.menu} /> -->
		<!-- {/if} -->
	{/each}
</List>

    // replace space
    // $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM

<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FORM -->
<!-- ####################################### -->
<div id="axformedit--1">
	<AxPanelsAddEdit
		bind:store
		{$STORE__CONTENT__DB}
	/>
</div>

<!-- ####################################### -->
<!-- BODY                                  -->
<!-- ####################################### -->
<!-- {_UI__CONST_isMobile} -->
<!-- class="w-full  lg:w-72" -->
<!-- BRANCH: I_ENTITY__uiinputValue          -->

<!-- ---------------------- -->
<!-- POUR CHAQUE PAGE-ITEM  -->
<!-- ---------------------- -->

<!-- ---------------------- -->
<!-- SUBMIT BTNs            -->
<!-- ---------------------- -->
<!-- <AxBtnCancel text="Annuler" /> -->
<!-- <div class=" grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnOk
			text="Enregistrer"
			callback={async () => await save()}
		/>
	</div> -->

<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
				<Slider imgs={[store[i].iv]} /> </div> -->
<script lang="ts">
	import AxPanelsAddEdit from './PanelsAddEdit.svelte';

	export let $STORE__CONTENT__DB: I_STORE__FORM<T_ENTITIES, T_DTOS> | undefined = undefined;
	export let store: I_BASE_ENTITY[] | undefined = undefined;
</script>

- {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  }

html,
body {
margin: 0;
padding: 0;
font-size: 100%;
outline: none;
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-style: 400;
color: #333;
font-size: 16px;
background-color: #26c6da;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

h1,
p,
label {
margin: 0;
padding: 0;
border: 0;
font-weight: normal;
font-style: normal;
font-size: 100%;
line-height: 1;
font-family: inherit;
vertical-align: baseline;
*vertical-align: middle;
line-height: normal;
*overflow: visible;
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
border: 0;
padding: 0;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
cursor: pointer;
-webkit-appearance: button;
}

@keyframes spin {
0% {
transform: rotate(0deg);
}

100% {
transform: rotate(359deg);
}
}

@keyframes glow {
0%,
100% {
opacity: 1;
}

50% {
opacity: 0.5;
}
}

@font-face {
font-family: "Nunito Sans";
font-style: italic;
font-weight: 400;
src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKcw.ttf)
format("truetype");
}

@font-face {
font-family: "Nunito Sans";
font-style: normal;
font-weight: 400;
src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I94.ttf)
format("truetype");
}

@font-face {
font-family: "Nunito Sans";
font-style: normal;
font-weight: 800;
src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8aBc5tU1Q.ttf)
format("truetype");
}

.type-light {
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 300;
}

.type-bold {
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 800;
}

.type-italic {
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 400;
font-style: italic;
}

input[type="text"],
input[type="email"],
input[type="password"],
textarea {
font-size: 14px;
line-height: 20px;
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-style: 400;
padding: 0.75rem 0;
line-height: 1.5rem !important;
border: none;
border-radius: 0;
box-sizing: border-box;
color: #333;
outline: none;
}

.checkbox {
display: inline-block;
height: 3rem;
position: relative;
vertical-align: middle;
width: 44px;
}

.checkbox input[type="checkbox"] {
font-size: 1em;
visibility: hidden;
}

.checkbox input[type="checkbox"] + span:before {
position: absolute;
top: 50%;
right: auto;
bottom: auto;
left: 50%;
width: 0.85em;
height: 0.85em;
transform: translate3d(-50%, -50%, 0);
background: transparent;
box-shadow: #2cc5d2 0 0 0 1px inset;
content: "";
display: block;
}

.checkbox input[type="checkbox"]:checked + span:before {
font-size: 16px;
line-height: 24px;
box-shadow: none;
color: #2cc5d2;
margin-top: -1px;
font-family: "percolate";
font-style: normal;
font-weight: normal;
font-variant: normal;
text-transform: none;
line-height: 1;

content: "\e65e";
}

.input-symbol {
display: inline-block;
position: relative;
}

.input-symbol.error [class^="icon-"],
.input-symbol.error [class*=" icon-"] {
color: #ff4400;
}

.input-symbol [class^="icon-"],
.input-symbol [class*=" icon-"] {
left: 1em;
}

.input-symbol input {
padding-left: 3em;
}

.input-symbol input {
width: 100%;
}

.input-symbol input:focus + [class^="icon-"],
.input-symbol input:focus + [class*=" icon-"] {
color: #2cc5d2;
}

.input-symbol [class^="icon-"],
.input-symbol [class*=" icon-"] {
transition: all 300ms ease-in;
transform: translate3d(0, -50%, 0);
background: transparent;
color: #aaa;
font-size: 1em;
height: 1em;
position: absolute;
top: 50%;
width: 1em;
}

@font-face {
font-family: "percolate";
src: url("./assets/icon/percolate.eot?-5w3um4");
src: url("./assets/icon/percolate.eot?#iefix5w3um4")
format("embedded-opentype"),
url("./assets/icon/percolate.woff?5w3um4") format("woff"),
url("./assets/icon/percolate.ttf?5w3um4") format("truetype"),
url("./assets/icon/percolate.svg?5w3um4") format("svg");
font-weight: normal;
font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
font-family: "percolate";

font-style: normal;
font-weight: normal;
font-variant: normal;
text-transform: none;
line-height: 1;
}

.icon-star:before {
content: "\e608";
}

.icon-face-sad:before {
content: "\e60f";
}

.icon-check:before {
content: "\e65e";
}

.list-heading {
letter-spacing: 0.3em;
text-indent: 0.3em;
text-transform: uppercase;
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 800;
font-size: 11px;
padding-left: 15px;
line-height: 40px;
background: #f8f8f8;
color: #aaa;
}

.list-heading .icon-sync {
opacity: 1;
animation: spin 2s infinite linear;
display: inline-block;
margin-right: 4px;
}

.list-item {
font-size: 14px;
line-height: 20px;
display: flex;
flex-wrap: wrap;
height: 3rem;
width: 100%;
background: white;
transition: all ease-out 150ms;
}

.list-item .title {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
flex: 1;
}

.list-item input[type="text"] {
background: transparent;
width: 100%;
}

.list-item input[type="text"]:focus {
cursor: text;
}

.pin-button {
width: 3rem;
height: 3rem;
background: transparent;
border: none;
text-align: center;
transition: all 200ms ease-in;
color: #eee;
font-size: 16px;
line-height: 3rem;
outline: none;
}

.pin-button:hover {
color: #2cc5d2;
}
.pin-button:focus {
outline-color: transparent;
}

.pin-button:active {
color: #555;
}

.list-item.TASK_PINNED .icon-star {
color: #2cc5d2;
}

.list-item.TASK_ARCHIVED input[type="text"] {
color: #a0aec0;
text-decoration: line-through;
}

.list-item:hover {
background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
}

.list-item:hover .checkbox {
cursor: pointer;
}

.list-item + .list-item {
border-top: 1px solid #f0f9fb;
}

.list-item.checked input[type="text"] {
color: #ccc;
text-decoration: line-through;
}

.list-item.checked .delete-item {
display: inline-block;
}

.loading-item {
height: 3rem;
width: 100%;
background: white;
display: flex;
align-items: center;
line-height: 1rem;
padding-left: 16px;
}

.loading-item .glow-checkbox,
.loading-item .glow-text span {
animation: glow 1.5s ease-in-out infinite;
background: #eee;
color: transparent;
cursor: progress;
display: inline-block;
}

.loading-item .glow-checkbox {
margin-right: 16px;
width: 12px;
height: 12px;
}

.loading-item + .loading-item {
border-top: 1px solid #f0f9fb;
}

.list-items {
position: relative;
background: white;
min-height: 288px;
}

.list-items .select-placeholder {
border: none;
width: 48px;
}

.wrapper-message {
position: absolute;
top: 45%;
right: 0;
bottom: auto;
left: 0;
width: auto;
height: auto;
transform: translate3d(0, -50%, 0);
text-align: center;
}

.wrapper-message [class^="icon-"],
.wrapper-message [class*=" icon-"] {
font-size: 48px;
line-height: 56px;
color: #2cc5d2;
display: block;
}

.wrapper-message .title-message {
font-size: 16px;
line-height: 24px;
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 800;
color: #4a5568;
}

.wrapper-message .subtitle-message {
font-size: 14px;
line-height: 20px;
color: #4a5568;
}

.page.lists-show {
min-height: 100vh;
background: white;
}

.page.lists-show nav {
background: #d3edf4;
padding: 1.5rem 1.25rem;
text-align: center;
}

@media screen and (min-width: 40em) {
.page.lists-show nav {
text-align: left;
}
}

.page.lists-show nav .title-page {
font-size: 20px;
line-height: 24px;
line-height: 2rem;
cursor: pointer;
white-space: nowrap;
font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
overflow: hidden;
text-overflow: ellipsis;
font-weight: 800;
color: #1c3f53;
display: inline-block;
vertical-align: top;
max-width: 100%;
}
