// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { CmsDrawerFormDbInjector } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/CmsDrawerFormDbInjector',
	component: CmsDrawerFormDbInjector,
	tags: ['autodocs']
} satisfies Meta<CmsDrawerFormDbInjector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: '/acceuil',
	}
};
