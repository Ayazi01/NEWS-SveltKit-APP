<script lang="ts">
	import { slugify } from '$lib/utils/utils'
	import { onMount } from 'svelte'
	import Postcard from '../../lib/components/Postcards.svelte'
	import { browser } from '$app/environment'
	// export let data: PageData;
<<<<<<< HEAD
	import type { LayoutData } from '../$types'

	export let data: LayoutData
=======
	import type { PageData } from '../$types'

	export let data: PageData
>>>>>>> 8586373b294ae5dc40649f11d05da35a34976b0d

	//onMounting data
	let dataFetch = false
	onMount(async () => {
		dataFetch = true
	})
</script>

{#if browser}
	<!-- rending data -->
	<h1 class=" m-10 text-center  text-3xl">All Articles</h1>
	<div class=" container mx-auto">
		<ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#if dataFetch}
				<!-- content here -->
				{#each data?.data as post}
					<Postcard title={post.title} image={post.image} slug={slugify(post.title)} />
				{/each}
			{/if}
		</ul>
	</div>
{/if}
