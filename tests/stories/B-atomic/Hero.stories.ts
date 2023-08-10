import { CONST__UI__baseDirMedia } from '$config/ui/CONST__UI__base';
import { Hero } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'B - atomic/Hero',
	component: Hero,
	tags: ['autodocs']
} satisfies Meta<Hero>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		image1: CONST__UI__baseDirMedia + 'frame/logo-01.png',
		image2: CONST__UI__baseDirMedia + 'content/acceuil/img/subtitle-logo--inkfree.png'
	}
};
