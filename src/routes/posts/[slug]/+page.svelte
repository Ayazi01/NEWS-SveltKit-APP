<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.clickedPost);
	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', {
			dateStyle: 'long'
		}).format(date);
	}
</script>

<hgroup>
	<h1>{data.clickedPost[0].title}</h1>

	<h2>{formatDate(data.clickedPost.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.clickedPost[0].description}
</div>
