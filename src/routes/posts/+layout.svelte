<script lang="ts">
	import type { LayoutData } from './$types';
	import { slugify } from '../../lib/utils.svelte';

	export let data: LayoutData;
</script>

<h1>posts</h1>

<div class="layout">
	<aside>
		<nav>
			<h4>posts</h4>
			<ul>
				{#each data.posts.data as { title }}
					<li>
						<a href="/posts/{slugify(title)}"> {title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 200px minmax(auto, 60ch);
		gap: 4rem;
		margin-top: 2rem;
	}
</style>
