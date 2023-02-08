<script lang="ts">
	import { slugify } from '$lib/utils';
	import { onMount } from 'svelte';
	import Postcard from '$lib/postcard.svelte';
	// export let data: PageData;
	import type { PageData } from '../$types';

	export let data: PageData;

	//onMounting data
	let posts: any;
	let dataFetch = false;
	onMount(async () => {
		dataFetch = true;
	});
</script>

<!-- rending data -->
<h1 class=" text-center m-10  text-3xl">All Articles</h1>
<div class=" container mx-auto">
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#if dataFetch}
			<!-- content here -->
			{#each data?.data as post}
				<Postcard title={post.title} image={post.image} slug={slugify(post.title)} />
			{/each}
		{/if}
	</ul>
</div>
