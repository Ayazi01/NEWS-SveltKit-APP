<script>
	export let slug = '';
	export let title = '';

	// console.log(title);
</script>

<a href="posts/{slug}">
	<p>{title}</p>
	<p>{slug}</p>
</a>
