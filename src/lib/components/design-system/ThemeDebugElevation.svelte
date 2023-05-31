<!--
  You need to import `@material/elevation/mdc-elevation` in SCSS for
  these to work. Check out "_Elevation.scss"
-->
<div class="bg-white p-20">
	<div class="grid columns-5 grid-cols-5 gap-10">
		{#each [...Array(5)].map((_v, i) => i + 1) as n}
			<!-- {#each [...Array(24)].map((_v, i) => i + 1) as n} -->
			<div
				style="background:var(--mdc-theme-surface)"
				class="my-primary mdc-elevation--z{n}  h-32 w-32 text-center"
			>
				Elevation: {n}
			</div>
		{/each}
	</div>
</div>
<!-- background:var(--mdc-theme-on-surface) -->
<!-- mdc-elevation--z{n}  -->
<!-- or -->
<!-- my-primary elevated -->

<!-- mdc-elevation-transition  -->
<!-- -->
<div class="p-20" />
<!--  -->
<div class="bg-black p-20">
	<div class="grid columns-5 grid-cols-5 gap-10">
		{#each [...Array(5)].map((_v, i) => i + 1) as n}
			<div
				style="background:var(--mdc-theme-on-surface)"
				class="my-secondary mdc-elevation--z{n}  h-32 w-32 text-center"
			>
				Elevation: {n}
			</div>
		{/each}
	</div>
</div>
