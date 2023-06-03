import { AxLayoutbg1 } from '$components/frame/app/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - frame/AxLayoutbg1',
	component: AxLayoutbg1,
	tags: ['autodocs']
} satisfies Meta<AxLayoutbg1>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
