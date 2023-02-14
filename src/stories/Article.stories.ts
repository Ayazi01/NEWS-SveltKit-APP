import type { Meta, StoryObj } from '@storybook/svelte'
import Article from '../lib/components/Article.svelte'

const meta = {
	title: 'Article',
	component: Article,
} satisfies Meta<Article>
export default meta

export const Articles: StoryObj<typeof meta> = {
	args: {
		post: {
			author: null,
			title: 'White House against Trump\u0027s attack on the Constitution',
			description:
				'White House Spokesman Andrew Bates Sunday said in a statement that \u0022attacking the Constitution and all it stands for is anathema to the soul of our nation and should be universally condemned.\u0022',
			url: 'https://en.mercopress.com/2022/12/05/white-house-against-trump-s-attack-on-the-constitution?utm_source=feed\u0026utm_medium=rss\u0026utm_content=main\u0026utm_campaign=rss',

			image: 'https://en.mercopress.com/data/cache/noticias/91729/100x80/trump.jpg',
			source: 'en',
			language: 'en',
			country: 'us',
			published_at: new Date(),
			category: 'general',
		},
		postIsBookmarked: false,
		slug: 'slug',
	},
}
