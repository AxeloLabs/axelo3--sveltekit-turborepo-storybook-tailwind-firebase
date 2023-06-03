// <svelte:head>
// 	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// </svelte:head>

import { CONST__UI__menuApp } from '$config/ui/CONST__UI__menuApp.json';
import { AppHeader } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - Frame/2 - Molecule/AppHeader',
	component: AppHeader,
	tags: ['autodocs']
} satisfies Meta<AppHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		active: '/acceuil',
		menus: CONST__UI__menuApp
	}
};
