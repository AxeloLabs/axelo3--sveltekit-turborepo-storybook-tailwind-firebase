import { CONST__UI__baseDirMedia, CONST__UI__baseFormatMedia } from '$config/ui/CONST__UI__base';
import { EventCard } from '$ui/index';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	title: 'C - molecule/EventCard',
	component: EventCard,
	tags: ['autodocs']
} satisfies Meta<EventCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		event: {
			idDoc: 'idDoc',
			titleEvent: {
				pos: 0,
				tag: '-',
				label: '-',
				value: 'title',
				blobs: [],
				format: CONST__UI__baseFormatMedia.video
			},
			// slug: I_DTO__formInput,
			date: {
				pos: 0,
				tag: '-',
				label: '-',
				value: '15/11/1985',
				blobs: [],
				format: CONST__UI__baseFormatMedia.video
			},
			body: {
				pos: 0,
				tag: '-',
				label: '-',
				value: 'body',
				blobs: [],
				format: CONST__UI__baseFormatMedia.video
			},
			image: {
				pos: 0,
				tag: '-',
				label: '-',
				value: CONST__UI__baseDirMedia + 'content/images/prochains-rdv/1.jpg',
				blobs: [],
				format: CONST__UI__baseFormatMedia.video
			},
			createdAt: 23234311
		}
	}
};
