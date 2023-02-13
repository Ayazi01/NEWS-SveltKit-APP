import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkBtn from '../lib/components/BookmarkBtn.svelte'

const meta = {
	title: 'BookmarkBtn',
	component: BookmarkBtn,
} satisfies Meta<BookmarkBtn>
export default meta

export const AddToBookmark: StoryObj<typeof meta> = {
	args: {
		postIsBookmarked: false,
		slug: 'add to bookmark',
	},
}
