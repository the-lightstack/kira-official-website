<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import RocketScroll from '$lib/components/RocketScroll.svelte';


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>KIRA - Karlsruhe International Rocketry Association</title>
</svelte:head>

<!-- <RocketScroll/> -->
<div class="" onscroll={(e)=>{console.log(e)}}>
	{@render children?.()}
	
</div>