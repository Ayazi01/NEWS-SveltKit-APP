<script lang="ts">
	import type { PageData } from './$types';
	import { slugify } from '../lib/utils.svelte';
	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>posts</h1>

<p>showing {posts.pagination.limit} posts.</p>

<ul>
	{#each posts.data as { title }}
		<li>
			<a href="/posts/{slugify(title)}"> {title}</a>
		</li>
	{/each}
</ul>
