<script lang="ts">
	import type { PageData } from './$types';
	import { slugify } from '$lib/utils.svelte';
	import { onMount } from 'svelte';
	import Postcard from '$lib/postcard.svelte';
	// export let data: PageData;
	import type { LayoutData } from '../$types';

	export let data: LayoutData;

	//onMounting data
	let posts: any;
	let dataFetch = false;
	onMount(async () => {
		const resourceUrl = `/api/news`;
		const res = await fetch(resourceUrl);
		posts = await res.json();
		console.log(posts.data[0].title);
		dataFetch = true;
	});
</script>

<!-- rending data -->
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
