import { CONST__UI__baseFormatMedia } from '$config/ui/CONST__UI__base';
import { Post } from '$ui/index.js';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'C - molecule/Post',
	component: Post,
	tags: ['autodocs']
} satisfies Meta<Post>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		post: {
			idDoc: 'idDoc',
			titlePost: {
				pos: 0,
				tag: 'tag',
				label: 'label',
				value: 'storageUrl',
				blobs: [],
				format: CONST__UI__baseFormatMedia.video
			},
			// slug: I_DTO__formInput
			body: {
				pos: 0,
				tag: 'tag',
				label: 'label',
				value: 'storageUrl',
				blobs: [],
				format: CONST__UI__baseFormatMedia.video
			},
			createdAt: 15224445 // timestamp
		}
	}
};
