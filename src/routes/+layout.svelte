<script>
	import '../app.postcss'
	import Navbar from '../lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<body>
	<main>
		<Navbar />
		<slot />
	</main>
	<Footer />
</body>
