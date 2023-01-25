<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
	function slugify(text: string) {
		return text
			.replace(/\s/g, '-')
			.replace(/[^a-zA-Z0-9-]/g, '')
			.toLowerCase();
	}
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
