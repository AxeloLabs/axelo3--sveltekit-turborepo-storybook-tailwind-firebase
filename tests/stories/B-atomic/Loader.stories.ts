import { Loader } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Loader',
	component: Loader,
	tags: ['autodocs']
} satisfies Meta<Loader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: ''
	}
};
