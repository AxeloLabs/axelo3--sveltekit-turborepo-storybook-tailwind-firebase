import { Title } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Title',
	component: Title,
	tags: ['autodocs']
} satisfies Meta<Title>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		text: 'demo'
	}
};
