import type { Meta, StoryObj } from '@storybook/svelte'
import Postcards from '../lib/components/Postcards.svelte'

const meta = {
	title: 'Postcards',
	component: Postcards,
} satisfies Meta<Postcards>
export default meta

export const WithImage: StoryObj<typeof meta> = {
	args: {
		title: 'This is the new stuff',
		slug: 'just-a-slug',
		image: 'https://picsum.photos/300/200.webp',
	},
}
export const WithoutImage: StoryObj<typeof meta> = {
	args: {
		title: 'Without image',
		slug: 'just-a-slug',
		image: null,
	},
}
