import { ContactCard } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'C - molecule/ContactCard',
	component: ContactCard,
	tags: ['autodocs']
} satisfies Meta<ContactCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		title: 'title',
		subtitle: 'subtitle',
		mail: 'mail',
		fb: 'fb',
		tel: 'tel'
	}
};
