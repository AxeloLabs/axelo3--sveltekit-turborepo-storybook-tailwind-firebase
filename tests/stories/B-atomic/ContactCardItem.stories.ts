import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
import { ContactCardItem } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/ContactCardItem',
	component: ContactCardItem,
	tags: ['autodocs']
} satisfies Meta<ContactCardItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		name: 'demo',
		image: CONST__UI__baseDirMedia + 'frame/icon/icon-contact-tel.png'
	}
};
