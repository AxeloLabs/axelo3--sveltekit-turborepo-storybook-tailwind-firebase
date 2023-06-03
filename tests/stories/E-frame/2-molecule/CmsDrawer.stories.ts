import { CmsDrawer } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'E - Frame/2 - Molecule/CmsDrawer',
	component: CmsDrawer,
	tags: ['autodocs']
} satisfies Meta<CmsDrawer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
