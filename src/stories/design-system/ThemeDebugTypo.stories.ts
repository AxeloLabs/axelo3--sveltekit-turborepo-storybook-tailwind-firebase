import { ThemeDebugTypo } from '$components/design-system/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'A - Design-system/ThemeDebugTypo',
	component: ThemeDebugTypo,
	tags: ['autodocs']
} satisfies Meta<ThemeDebugTypo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {}
};
