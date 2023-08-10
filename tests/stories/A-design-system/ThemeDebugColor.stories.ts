import { ThemeDebugColor } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'A - Design-system/ThemeDebugColor',
	component: ThemeDebugColor,
	tags: ['autodocs']
} satisfies Meta<ThemeDebugColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
