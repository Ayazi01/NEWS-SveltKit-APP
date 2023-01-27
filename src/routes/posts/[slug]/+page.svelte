<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { slugify } from '$lib/utils.svelte';
	let slug = $page.params.slug;

	let posts: any;
	let filtered_post;
	let post_is_bookmarked = false;

	onMount(async () => {
		//http://api.mediastack.com/v1/news?countries=us,in&access_key=c739c8bd8d8756c714c3841e2113a88f
		const resourceUrl = `/api/news`;
		const res = await fetch(resourceUrl);
		posts = await res.json();
		console.log(posts);
		const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
		const filtered_bookmarks = bookmarks.filter((bookmark: string) => bookmark == slug);

		filtered_post = posts.data.filter((post: any) => slugify(post.title) == slug);
		if (filtered_bookmarks.length == 1) {
			post_is_bookmarked = true;
		}
	});

	function toggleBookmark() {
		if (post_is_bookmarked) {
			// remove from bookmark
			const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
			var index = bookmarks.indexOf(slug);
			if (index !== -1) {
				bookmarks.splice(index, 1);
			}
			localStorage.setItem('articles', JSON.stringify(bookmarks));
			post_is_bookmarked = false;
		} else {
			// add to bookmark
			const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
			bookmarks.push(slug);
			localStorage.setItem('articles', JSON.stringify(bookmarks));
			post_is_bookmarked = true;
		}
	}
</script>

{#if filtered_post?.length == 1}
	{@const post = filtered_post[0]}

	<div class="mb-4">
		<p class="font-bold text-xl">{post.title}</p>
		<p>{post.slug}</p>
	</div>

	<button on:click={toggleBookmark} class="border p-1"
		>{post_is_bookmarked ? '🔥 Remove from' : '✔️ Add to'} Bookmarks</button
	>
{:else}
	<p>Post not found</p>
{/if}
