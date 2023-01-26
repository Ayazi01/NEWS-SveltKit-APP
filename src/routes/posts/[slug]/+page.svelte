<script lang="ts">
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import type { PageData } from './$types';
	import { slugify } from '$lib/utils.svelte';
	export let data: PageData;
	// console.log(data.clickedPost);
	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', {
			dateStyle: 'long'
		}).format(date);
	}

	let toggle = writable<boolean>(false);

	function handleBookmark() {
		if (!$toggle) {
			const value = slugify(data.clickedPost[0].title);
			const item = writable<string>(value);
			item.subscribe((value) => {
				localStorage.setItem('slug', value);
			});
		} else {
			localStorage.removeItem('slug');
		}

		toggle.update((n) => !n);
	}
</script>

<hgroup>
	<h1>{data.clickedPost[0].title}</h1>

	<h2>{formatDate(data.clickedPost.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.clickedPost[0].description}
	<button on:click={handleBookmark}>
		{$toggle ? 'delete from bookmarks' : 'bookmark this article'}
	</button>
</div>
