import { SeparatorMedium } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/SeparatorMedium',
	component: SeparatorMedium,
	tags: ['autodocs']
} satisfies Meta<SeparatorMedium>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: ''
	}
};
