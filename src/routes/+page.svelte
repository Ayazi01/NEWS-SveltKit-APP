<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);

	// console.log(data);
</script>

<h1>posts</h1>

<p>showing {posts.pagination.limit} posts.</p>

{#each posts.data as { slug, title }}
	<ul>
		<li>
			title: <a href="/posts/{slug}"> {title}</a>
		</li>
	</ul>
{/each}
