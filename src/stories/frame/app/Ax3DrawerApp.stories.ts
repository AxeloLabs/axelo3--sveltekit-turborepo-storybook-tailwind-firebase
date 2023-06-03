import { Ax3DrawerApp } from '$components/frame/app/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - frame/Ax3DrawerApp',
	component: Ax3DrawerApp,
	tags: ['autodocs']
} satisfies Meta<Ax3DrawerApp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
