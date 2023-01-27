<script lang="ts">
	import type { PageData } from './$types';
	import { slugify } from '$lib/utils.svelte';
	import { onMount } from 'svelte';
	import Postcard from '$lib/postcard.svelte';
	// export let data: PageData;

	let posts: any;
	let dataFetch = false;
	onMount(async () => {
		//http://api.mediastack.com/v1/news?countries=us,in&access_key=c739c8bd8d8756c714c3841e2113a88f
		const resourceUrl = `/api/news`;
		const res = await fetch(resourceUrl);
		posts = await res.json();
		console.log(posts.data[0].title);
		dataFetch = true;
	});
	// $: ({ posts } = data);
</script>

<h1>posts</h1>

<ul>
	{#if dataFetch}
		<!-- content here -->
		{#each posts?.data as post}
			<!-- {console.log(post)} -->
			<!-- <Postcard slug={slugify(post.title)} title={post.title} /> -->
			<a href="posts/{slugify(post.title)}">
				<p>{post.title}</p>
			</a>
		{/each}
	{/if}
</ul>
