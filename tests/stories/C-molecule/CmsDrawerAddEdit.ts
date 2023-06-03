// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { CmsDrawerAddEdit } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'C - molecule/CmsDrawerAddEdit',
	component: CmsDrawerAddEdit,
	tags: ['autodocs']
} satisfies Meta<CmsDrawerAddEdit>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: '/acceuil',
	}
};
