import { ThemeDebugElevation } from '$components/design-system/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'Design-system-ax/ThemeDebugElevation',
	component: ThemeDebugElevation,
	tags: ['autodocs']
} satisfies Meta<ThemeDebugElevation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};