import { AxDrawerMenuitem } from '$components/widgets/index.js';
import { AX_CONST__UI__baseDirFrame } from '$src/0-config/ui/AX_CONST__UI__base';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'widgets/AxDrawerMenuitem',
	component: AxDrawerMenuitem,
	tags: ['autodocs']
} satisfies Meta<AxDrawerMenuitem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		menu: {
			url: '/acceuil',
			title: 'Acceuil',
			img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-acceuil--creme.png'
		},
		active: '/acceuil2'
	}
};
