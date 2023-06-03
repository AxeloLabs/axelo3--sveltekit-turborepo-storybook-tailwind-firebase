// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { CmsDrawerPanelEdit } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'C - molecule/CmsDrawerPanelEdit',
	component: CmsDrawerPanelEdit,
	tags: ['autodocs']
} satisfies Meta<CmsDrawerPanelEdit>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: '/acceuil',
	}
};
