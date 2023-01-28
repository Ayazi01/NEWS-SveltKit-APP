<script>
	import { toggle_class } from 'svelte/internal';
	import '../app.postcss';
	/**
	 * @type {any}
	 */

	let isOpen = false;

	function clickHandler() {
		isOpen = !isOpen;
	}
</script>

<body>
	<main>
		<!-- navbar -->
		<div class="relative container mx-auto p-6  mt-10 max-w-980 ">
			<nav>
				<!-- flex container -->
				<!-- Flex container -->

				<div class="flex items-center  justify-between ">
					<!-- Logo -->
					<div
						id="logoDiv"
						class=" flex items-center justify-between pr-0 mr-0 text-3xl font-bold "
					>
						FakeNews
					</div>
					<!-- Menu Items -->
					<div class="hidden space-x-6 md:flex justify-end ">
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
						class=" hamburger  relative bottom-2 right-5 md:hidden  focus:outline-none"
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
							: ''} self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md "
					>
						<a href="/" on:click={clickHandler}>Home</a>
						<a href="/posts" on:click={clickHandler}>All Articles</a>
						<a href="/bookmarks" on:click={clickHandler}>Bookmarks</a>
					</div>
				</div>
			</nav>
		</div>
		<slot />
	</main>

	<footer class="block bottom-0 text-center mt-20 py-10">all rights reserved</footer>
</body>
