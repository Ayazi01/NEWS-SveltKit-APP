<script lang="ts">
	import { slugify } from '../lib/utils/utils'
	import { onMount } from 'svelte'
	import Postcard from '$lib/components/Postcards.svelte'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	// onmounting data

	let dataFetch = false
	onMount(async () => {
		dataFetch = true
	})
</script>

<!-- rendering data -->
<h1 class=" mx-auto pb-5 text-center  text-3xl">Recent Articles</h1>
<div class=" container mx-auto">
	<ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#if dataFetch}
			<!-- content here -->
			{#each data?.data as post}
				<Postcard title={post.title} image={post.image} slug={slugify(post.title)} />
			{/each}
		{/if}
	</ul>
</div>
