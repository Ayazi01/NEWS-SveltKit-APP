<script lang="ts">
	export let postIsBookmarked: boolean
	export let slug: string

	export function toggleBookmark() {
		if (postIsBookmarked) {
			// remove from bookmark
			const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]')
			var index = bookmarks.indexOf(slug)
			if (index !== -1) {
				bookmarks.splice(index, 1)
			}
			localStorage.setItem('articles', JSON.stringify(bookmarks))
			postIsBookmarked = false
		} else {
			// add to bookmark
			const bookmarks = JSON.parse(localStorage.getItem('articles') ?? '[]')
			bookmarks.push(slug)
			localStorage.setItem('articles', JSON.stringify(bookmarks))
			postIsBookmarked = true
		}
	}
</script>

<button on:click={toggleBookmark} class=" flex justify-center border-2 border-gray-400 p-5 ">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="h-6 w-6 {postIsBookmarked ? 'fill-blue-500' : ''}"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
		/>
	</svg>

	{postIsBookmarked ? ' Remove from' : ' Add to'} Bookmarks</button
>
