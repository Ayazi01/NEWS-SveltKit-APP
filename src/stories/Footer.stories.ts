import type { Meta, StoryObj } from '@storybook/svelte'
import Footer from '../lib/components/Footer.svelte'

const meta = {
	title: 'Footer',
	component: Footer,
} satisfies Meta<Footer>
export default meta

export const WithImage: StoryObj<typeof meta> = {}
