<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	/* global styles */
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>