import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
import { AppDrawerMenuItem } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - Frame/1 - Atomic/AppDrawerMenuItem',
	component: AppDrawerMenuItem,
	tags: ['autodocs']
} satisfies Meta<AppDrawerMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		menu: {
			url: '/acceuil',
			title: 'Acceuil',
			img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-acceuil--creme.png'
		},
		active: '/acceuil2'
	}
};
