<script lang="ts">
	import type { PageData } from './$types';
	import { slugify } from '../lib/utils.svelte';
	import { onMount } from 'svelte';
	import Postcard from '$lib/postcard.svelte';

	// onmounting data
	let posts: any;
	let dataFetch = false;
	onMount(async () => {
		const resourceUrl = `/api/news`;
		const res = await fetch(resourceUrl);
		posts = await res.json();
		dataFetch = true;
	});
</script>

<!-- rendering data -->
<h1 class="prose prose-2xl text-center mx-auto pb-5  text-3xl">Recent Articles</h1>
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
