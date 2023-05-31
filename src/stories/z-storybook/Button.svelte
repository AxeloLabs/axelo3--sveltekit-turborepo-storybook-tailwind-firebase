<script lang="ts">
	// import './button.css';
	export let primary = false;
	export let backgroundColor: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label: string = '';
	$: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<!-- {style} -->
<!-- class={['storybook-button', `storybook-button--${size}, bg-green-600`, mode].join(' ')} -->
<button type="button" class="bg-green-600" on:click>
	{label}
</button>
