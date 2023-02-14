<<<<<<< HEAD
// import type { PageLoad } from './$types';

// let posts;
// export const load = (async ({ fetch }) => {
// 	const resourceUrl = `/api/news`;
// 	const res = await fetch(resourceUrl);
// 	posts = await res.json();

// 	return posts;
// }) satisfies PageLoad;
=======
import type { PageLoad } from './$types'

let posts
export const load = (async ({ fetch }) => {
	const resourceUrl = `/api/news`
	const res = await fetch(resourceUrl)
	posts = await res.json()

	return posts
}) satisfies PageLoad
>>>>>>> 8586373b294ae5dc40649f11d05da35a34976b0d
