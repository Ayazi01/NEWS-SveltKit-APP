<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { slugify } from '$lib/utils.svelte';
	let slug = $page.params.slug;

	let posts: any;
	let filteredPost;
	let postIsBookmarked = false;

	onMount(async () => {
		//http://api.mediastack.com/v1/news?countries=us,in&access_key=c739c8bd8d8756c714c3841e2113a88f
		const resourceUrl = `/api/news`;
		const res = await fetch(resourceUrl);
		posts = await res.json();
		console.log(posts);
		const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
		const filtered_bookmarks = bookmarks.filter((bookmark: string) => bookmark == slug);

		filteredPost = posts.data.filter((post: any) => slugify(post.title) == slug);
		if (filtered_bookmarks.length == 1) {
			postIsBookmarked = true;
		}
	});

	function toggleBookmark() {
		if (postIsBookmarked) {
			// remove from bookmark
			const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
			var index = bookmarks.indexOf(slug);
			if (index !== -1) {
				bookmarks.splice(index, 1);
			}
			localStorage.setItem('articles', JSON.stringify(bookmarks));
			postIsBookmarked = false;
		} else {
			// add to bookmark
			const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]');
			bookmarks.push(slug);
			localStorage.setItem('articles', JSON.stringify(bookmarks));
			postIsBookmarked = true;
		}
	}
</script>

{#if filteredPost?.length == 1}
	{@const post = filteredPost[0]}

	<div class="mb-4 flex justify-center flex-col items-center  ">
		<h1 class="font-bold text-xl my-10 mx-20 text-left">{post.title}</h1>
		<img src={post.image} class=" w-1/2 pb-10 " alt="" />
		<p class="prose lg:prose-base ">{post.description}</p>
		<button on:click={toggleBookmark} class="border p-10 "
			>{postIsBookmarked ? '🔥 Remove from' : '✔️ Add to'} Bookmarks</button
		>
	</div>
{:else}
	<p>Post not found</p>
{/if}
