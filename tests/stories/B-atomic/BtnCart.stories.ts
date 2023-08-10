import { BtnCart } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
// import { BtnCart } from '$ui';
const meta = {
	title: 'B - atomic/BtnCart',
	component: BtnCart,
	tags: ['autodocs']
} satisfies Meta<BtnCart>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: ''
	}
};
