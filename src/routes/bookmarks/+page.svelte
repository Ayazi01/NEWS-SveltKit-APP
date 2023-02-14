<script lang="ts">
	import Postcard from '../../lib/components/Postcards.svelte'
	import { slugify } from '$lib/utils/utils'
	import { onMount } from 'svelte'
	import type { Posts } from '$lib/interfaces/posts.interface'
	import type { PageData } from '../$types'

	export let data: PageData

	let bookmarks: string[]
	let filtered_posts: Posts[]

	onMount(async () => {
		// get bookmarks

		bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]')

		filtered_posts = data?.data.filter((post: Posts) => bookmarks.includes(slugify(post.title)))
	})
</script>

<h1 class=" mx-auto pb-5 text-center  text-3xl">Favourite Articles</h1>

<div class=" container mx-auto flex items-center justify-center">
	{#if filtered_posts}
		<ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each filtered_posts as post}
				<Postcard
					title={post.title}
					image={post.image ? post.image : ''}
					slug={slugify(post.title)}
				/>
			{/each}
		</ul>
	{:else}
		<p>No Bookmarks stored!</p>
	{/if}
</div>
