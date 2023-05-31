// <!-- <svelte:head> -->
// <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->
// <!-- </svelte:head> -->

import { Ax1FrameApp } from '$components/frame/app/index.js';
import { AX_CONST__UI__menuApp } from '$src/0-config/ui/AX_CONST__UI__menuApp.json';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'frame/Ax1FrameApp',
	component: Ax1FrameApp,
	tags: ['autodocs']
} satisfies Meta<Ax1FrameApp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		active: '/acceuil',
		menus: AX_CONST__UI__menuApp
	}
};
