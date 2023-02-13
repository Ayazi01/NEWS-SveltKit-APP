import type { Meta, StoryObj } from '@storybook/svelte'
import Navbar from '../lib/components/Navbar.svelte'

const meta = {
	title: 'Navbar',
	component: Navbar,
} satisfies Meta<Navbar>
export default meta

export const Navbarx: StoryObj<typeof meta> = {
	args: {
		isOpen: false,
	},
}
