import { LayoutBg1 } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/LayoutBg1',
	component: LayoutBg1,
	tags: ['autodocs']
} satisfies Meta<LayoutBg1>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
