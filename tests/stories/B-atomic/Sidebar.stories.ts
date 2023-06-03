import { Sidebar } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Sidebar',
	component: Sidebar,
	tags: ['autodocs']
} satisfies Meta<Sidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: ''
	}
};
