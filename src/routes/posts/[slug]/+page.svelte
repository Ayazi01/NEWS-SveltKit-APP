<script lang="ts">
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { slugify } from '$lib/utils/utils'
	import type { LayoutData } from '../$types'
	import type { Posts } from '$lib/interfaces/posts.interface'
	import Article from '$lib/components/Article.svelte'

	export let data: LayoutData
	let slug = $page.params.slug

	let filteredPost
	let postIsBookmarked = false
	let isOnMounted = false

	// onmouting data
	onMount(async () => {
		const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]')
		const filteredBookmarks = bookmarks.filter((bookmark: string) => bookmark == slug)

		filteredPost = data.data?.filter((post: Posts) => slugify(post.title) == slug)
		if (filteredBookmarks.length == 1) {
			postIsBookmarked = true
		}
		isOnMounted = true
	})
</script>

{#if filteredPost?.length == 1}
	{@const post = filteredPost[0]}

	<Article {post} {postIsBookmarked} {slug} />
	<!-- <BookmarkBtn /> -->
{:else}
	<p>Post not found</p>
{/if}
