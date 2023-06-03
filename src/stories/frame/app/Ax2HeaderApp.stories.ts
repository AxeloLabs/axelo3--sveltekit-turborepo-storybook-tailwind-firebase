// <svelte:head>
// 	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// </svelte:head>

import { Ax2HeaderApp } from '$components/frame/app/index.js';
import { AX_CONST__UI__menuApp } from '$src/0-config/ui/AX_CONST__UI__menuApp.json';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - frame/Ax2HeaderApp',
	component: Ax2HeaderApp,
	tags: ['autodocs']
} satisfies Meta<Ax2HeaderApp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		active: '/acceuil',
		menus: AX_CONST__UI__menuApp
	}
};
