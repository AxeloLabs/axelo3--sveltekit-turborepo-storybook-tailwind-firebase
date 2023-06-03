import { PreloadingIndicator } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/PreloadingIndicator',
	component: PreloadingIndicator,
	tags: ['autodocs']
} satisfies Meta<PreloadingIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		visible: false
	}
};
