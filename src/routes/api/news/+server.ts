import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SECRET_API_KEY } from '$env/static/private';
import type { Media } from '../../../lib/interfaces/posts.interface';

export const GET: RequestHandler = async () => {
	const resourceUrl = `http://api.mediastack.com/v1/news?countries=us,in&'sort=published_desc&&sources=en&access_key=${SECRET_API_KEY}`;
	const res = await fetch(resourceUrl);
	const posts: Media = await res.json();

	return json(posts);
};
