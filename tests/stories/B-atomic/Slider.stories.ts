import { CONST__DATASET__slideshowA } from '$config/datasets/CONST__DATASET__slideshow.json';
import { Slider } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Slider',
	component: Slider,
	tags: ['autodocs']
} satisfies Meta<Slider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		arr: CONST__DATASET__slideshowA
	}
};
