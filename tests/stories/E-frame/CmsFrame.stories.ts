// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { CmsFrame } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - frame/CmsFrame',
	component: CmsFrame,
	tags: ['autodocs']
} satisfies Meta<CmsFrame>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: '/acceuil',
		// menus: CONST__UI__menuApp
	}
};
