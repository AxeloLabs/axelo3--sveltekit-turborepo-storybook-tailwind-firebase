// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { CONST__UI__menuApp } from '$config/ui/CONST__UI__menuApp.json';
import { AppFrame } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - frame/AppFrame',
	component: AppFrame,
	tags: ['autodocs']
} satisfies Meta<AppFrame>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		active: '/acceuil',
		menus: CONST__UI__menuApp
	}
};
