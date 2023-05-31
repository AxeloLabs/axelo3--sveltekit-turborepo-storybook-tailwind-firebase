import { ThemeDebugColor } from '$components/design-system/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'Design-system-ax/ThemeDebugColor',
	component: ThemeDebugColor,
	tags: ['autodocs']
} satisfies Meta<ThemeDebugColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
