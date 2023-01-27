<script lang="ts">
	import Postcard from '$lib/postcard.svelte';
	import { slugify } from '$lib/utils.svelte';
	import { onMount } from 'svelte';

	type Post = {
		slug: string;
		title: string;
	};

	let bookmark_posts: Post[] = [];
	let bookmarks;
	let posts: object;
	let filtered_posts;

	onMount(async () => {
		const resourceUrl = `/api/news`;
		const res = await fetch(resourceUrl);
		posts = await res.json();

		// get bookmarks

		bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
		bookmarks.forEach((bookmark: string) => {
			// get post coresponding to the slug
			filtered_posts = posts.data.filter((post) => slugify(post.title) == bookmark);
			if (filtered_posts.length == 1) {
				bookmark_posts.push(filtered_posts[0]);
			}
		});
		// update variable to rerender each block
		bookmark_posts = bookmark_posts;
	});
</script>

<h1 class="text-3xl mb-4">Bookmarks:</h1>

<div class="flex flex-col gap-4">
	{#if bookmark_posts.length > 0}
		{#each bookmark_posts as post}
			<p>{post.title}</p>
		{/each}
	{:else}
		<p>No Bookmarks stored!</p>
	{/if}
</div>
