// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { AcceuilApp } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'D - page/app/AcceuilApp',
	component: AcceuilApp,
	tags: ['autodocs']
} satisfies Meta<AcceuilApp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: '/acceuil',
	}
};
