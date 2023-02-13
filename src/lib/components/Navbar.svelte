<script lang="ts">
	export let isOpen = false

	export function clickHandler() {
		isOpen = !isOpen
	}
</script>

<div class="max-w-980 container relative mx-auto  mt-10 p-6 ">
	<!-- navbar -->
	<nav>
		<div class="flex items-center  justify-between ">
			<!-- Logo -->
			<div id="logoDiv" class=" mr-0 flex items-center justify-between pr-0 text-3xl font-bold ">
				FakeNews
			</div>
			<!-- Menu Items -->
			<div class="hidden justify-end space-x-6 md:flex ">
				<a href="/" class="hover:text-darkGrayishBlue ">Home</a>
				<a href="/posts" class="hover:text-darkGrayishBlue">All Articles</a>
				<a href="/bookmarks" class="hover:text-darkGrayishBlue">Bookmarks</a>
			</div>
			<!-- Button -->

			<!-- Hamburger Icon -->
			<button
				class:open={isOpen}
				on:click={clickHandler}
				id="menu-btn "
				class=" hamburger  relative bottom-2 right-5 focus:outline-none  md:hidden"
			>
				<span class="hamburger-top" />
				<span class="hamburger-middle" />
				<span class="hamburger-bottom" />
			</button>
		</div>

		<!-- Mobile Menu -->
		<div class="md:hidden">
			<div
				id="menu"
				class="absolute {isOpen ? 'flex' : ''} flex-col items-center {!isOpen
					? 'hidden'
					: ''} left-6 right-6 mt-5 space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center "
			>
				<a href="/" on:click={clickHandler}>Home</a>
				<a href="/posts" on:click={clickHandler}>All Articles</a>
				<a href="/bookmarks" on:click={clickHandler}>Bookmarks</a>
			</div>
		</div>
	</nav>
</div>
