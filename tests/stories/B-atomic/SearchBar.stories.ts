import { SearchBar } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/SearchBar',
	component: SearchBar,
	tags: ['autodocs']
} satisfies Meta<SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// active: ''
	}
};
