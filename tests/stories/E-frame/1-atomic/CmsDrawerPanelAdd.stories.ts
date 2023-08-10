// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { CmsDrawerPanelAdd } from '$ui';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - Frame/1 - atomic/CmsDrawerPanelAdd',
	component: CmsDrawerPanelAdd,
	tags: ['autodocs']
} satisfies Meta<CmsDrawerPanelAdd>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: '/acceuil',
	}
};
