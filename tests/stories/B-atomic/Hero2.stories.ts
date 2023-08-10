import { Hero2 } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Hero2',
	component: Hero2,
	tags: ['autodocs']
} satisfies Meta<Hero2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		text: 'demo'
	}
};
