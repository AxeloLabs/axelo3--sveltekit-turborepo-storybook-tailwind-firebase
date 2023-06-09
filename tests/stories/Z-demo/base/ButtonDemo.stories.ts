import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonDemo from './ButtonDemo.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Z-demo/base/ButtonDemo',
	component: ButtonDemo,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
} satisfies Meta<ButtonDemo>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button'
	}
};
export const Secondary: Story = {
	args: {
		label: 'Button'
	}
};
export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button'
	}
};
export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button'
	}
};
