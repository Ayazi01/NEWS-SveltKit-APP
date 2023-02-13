<script lang="ts">
	import type { Posts } from '$lib/interfaces/posts.interface'
	import BookmarkBtn from './BookmarkBtn.svelte'
	export let post: Posts
	export let slug: string
	export let postIsBookmarked: boolean
</script>

<div class="mb-4 flex flex-col items-center justify-center  ">
	<h1 class="my-10 mx-20 text-left text-xl font-bold">{post?.title}</h1>
	<img src={post?.image} class=" w-1/2 pb-10 " alt="" />
	<p class=" text-center">{post?.description}</p>
	<BookmarkBtn {postIsBookmarked} {slug} />
</div>
