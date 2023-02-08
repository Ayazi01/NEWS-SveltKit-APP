import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SECRET_API_KEY } from '$env/static/private';

export interface Welcome {
	pagination: Pagination;
	data: Datum[];
}

export interface Datum {
	author: null;
	title: string;
	description: string;
	url: string;
	source: Language;
	image: null | string;
	category: Category;
	language: Language;
	country: Country;
	published_at: Date;
}

export type Category = 'general';

export type Country = 'us';

export type Language = 'en';

export interface Pagination {
	limit: number;
	offset: number;
	count: number;
	total: number;
}
export const GET: RequestHandler = async () => {
	const resourceUrl = `http://api.mediastack.com/v1/news?countries=us,in&'sort=published_desc&&sources=en&access_key=${SECRET_API_KEY}`;
	const res = await fetch(resourceUrl);
	const posts: Welcome = await res.json();

	return json(posts);
};
