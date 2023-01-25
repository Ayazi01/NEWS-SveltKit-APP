<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>posts</h1>

<p>showing {posts.pagination.limit} posts.</p>

<ul>
	{#each posts.data as post}
		<li>
			<a href="/posts/{post.slug}"> {post.title}</a>
		</li>
	{/each}
</ul>
