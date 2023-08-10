import { Snack } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Snack',
	component: Snack,
	tags: ['autodocs']
} satisfies Meta<Snack>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Firestore: Story = {
	args: {
		text: 'demo',
		type: 'firestore',
		open: false
	}
};

export const Success: Story = {
	args: {
		text: 'demo',
		type: 'success',
		open: false
	}
};

export const Warning: Story = {
	args: {
		text: 'demo',
		type: 'warning',
		open: false
	}
};

export const Error: Story = {
	args: {
		text: 'demo',
		type: 'error',
		open: false
	}
};
