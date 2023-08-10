import { ParagraphLeft } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/ParagraphLeft',
	component: ParagraphLeft,
	tags: ['autodocs']
} satisfies Meta<ParagraphLeft>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		text: 'paragraphe left'
	}
};
