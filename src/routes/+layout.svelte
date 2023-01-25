<!-- <script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{console.log($page.data.post?.title)}</title>
</svelte:head> -->
<nav>
	<ul>
		<li>
			<a href="/">home</a>
		</li>
		<li>
			<a href="/posts">posts</a>
		</li>
	</ul>
</nav>

<slot />
