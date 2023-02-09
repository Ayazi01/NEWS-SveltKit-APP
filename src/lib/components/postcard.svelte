<script>
	export let slug = '';
	export let title = '';
	export let image = '';
</script>

<li class=" flex justify-center border-2 border-gray-300 rounded-xl p-2 pb-0 bg-gray-100">
	<a href="posts/{slug}" class=" text-center">
		<img
			class="object-fill h-60 w-1/1 mt-2 "
			src={image == null ? '/nophoto.png' : image}
			alt={title}
		/>
		<p class="text-center">{title.split(' ').slice(0, 7).join(' ') + '...'}</p>
	</a>
</li>
