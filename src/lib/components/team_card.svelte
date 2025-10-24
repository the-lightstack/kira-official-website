<script lang="ts">
	import ISVG from "./ISVG.svelte";

    // maybe add child html element for more customizability
    let {title, description, isActive} = $props();
</script>

<div class="border-[1px] border-ring rounded-md p-4 px-6 bg-card hover:underline-kira-blue hover:underline flex flex-col h-48  w-fit">
    <h2 class="text-fg text-2xl">{title}</h2>
    <p class="text-muted">{description}</p>
</div>