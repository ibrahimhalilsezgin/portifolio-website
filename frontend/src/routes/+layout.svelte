<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/Components/Navbar.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	const isAdminPage = $derived($page.url.pathname.includes('/admin'))
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
{#if !isAdminPage}
	<Navbar />
{/if}
{@render children()}

