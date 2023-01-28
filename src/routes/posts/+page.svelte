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

<h1 class="prose prose-2xl text-center m-10  text-3xl">All Articles</h1>
<div class=" container mx-auto">
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#if dataFetch}
			<!-- content here -->
			{#each posts?.data as post}
				<Postcard title={post.title} image={post.image} slug={slugify(post.title)} />
			{/each}
		{/if}
	</ul>
</div>
