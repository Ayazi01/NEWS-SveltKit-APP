import type { LayoutData } from './$types'

let posts
export const load = (async ({ fetch }) => {
	const resourceUrl = `/api/news`
	const res = await fetch(resourceUrl)
	posts = await res.json()
	return posts
}) satisfies LayoutData
