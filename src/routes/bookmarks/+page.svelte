<script lang="ts">
	import Postcard from '$lib/postcard.svelte';
	import { slugify } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { Datum, Welcome } from '../api/news/+server';
	import type { PageData } from '../$types';

	export let data: PageData;

	type Post = {
		slug: string;
		title: string;
		image?: string;
	};

	let bookmark_posts: Post[];
	let bookmarks;
	let filtered_posts;

	onMount(async () => {
		// get bookmarks

		bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
		bookmarks.forEach((bookmark: string) => {
			// get post coresponding to the slug
			filtered_posts = data?.data.filter((post: Datum) => slugify(post.title) == bookmark);
			if (filtered_posts.length == 1) {
				bookmark_posts.push(filtered_posts[0]);
			}
		});
		// update variable to rerender each block
		bookmark_posts = bookmark_posts;
	});
</script>

<h1 class=" text-center mx-auto pb-5  text-3xl">Favourite Articles</h1>

<div class=" container mx-auto flex justify-center items-center">
	{#if bookmark_posts?.length > 0}
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each bookmark_posts as post}
				<Postcard title={post.title} image={post.image} slug={slugify(post.title)} />
			{/each}
		</ul>
	{:else}
		<p>No Bookmarks stored!</p>
	{/if}
</div>
