export interface Media {
	pagination: Pagination;
	data: Posts[];
}

export interface Posts {
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