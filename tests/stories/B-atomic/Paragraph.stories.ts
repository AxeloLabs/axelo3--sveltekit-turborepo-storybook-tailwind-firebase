import { Paragraph } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Paragraph',
	component: Paragraph,
	tags: ['autodocs']
} satisfies Meta<Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		text: 'paragraphe'
	}
};
