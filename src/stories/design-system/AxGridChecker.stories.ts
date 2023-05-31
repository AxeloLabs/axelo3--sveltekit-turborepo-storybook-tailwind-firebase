	import { AxGridChecker } from '$components/design-system/index.js';
	import type { Meta, StoryObj } from '@storybook/svelte';
	const meta = {
		title: 'Design-system-ax/AxGridChecker',
		component: AxGridChecker,
		tags: ['autodocs']
	} satisfies Meta<AxGridChecker>;
	export default meta;
	type Story = StoryObj<typeof meta>;
	export const Primary: Story = {
		args: {
		}
	};
	