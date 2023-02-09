<script>
	export let slug = '';
	export let title = '';
	export let image = '';
</script>

<li class=" flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-2 pb-0">
	<a href="posts/{slug}" class=" text-center">
		<img
			class="w-1/1 mt-2 h-60 object-fill "
			src={image == null ? '/nophoto.png' : image}
			alt={title}
		/>
		<p class="text-center">{title.split(' ').slice(0, 7).join(' ') + '...'}</p>
	</a>
</li>
