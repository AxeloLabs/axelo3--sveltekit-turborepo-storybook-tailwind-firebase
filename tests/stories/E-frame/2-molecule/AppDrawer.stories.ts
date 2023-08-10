import { AppDrawer } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - Frame/2 - Molecule/AppDrawer',
	component: AppDrawer,
	tags: ['autodocs']
} satisfies Meta<AppDrawer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
