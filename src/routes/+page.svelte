<script lang="ts">
	import TeamCard from "$lib/components/team_card.svelte";
	import TeamCarousel from "$lib/components/TeamCarousel.svelte";
	import { onMount } from "svelte";

    let scrollY = $state(0);



</script>

<!-- <span class="w-0 border-slate-400 top-2/8 border h-full absolute left-1/2"></span> -->

<div class="h-full px-6 w-full bg-black " >
    <nav class="flex flex-row sticky h-6 py-8 top-0 gap-6 items-center backdrop-blur-xs">
        <!-- ORB -->
        <div class="w-3 h-3 rounded-full bg-kira-orange" style="box-shadow: 0 0 10px var(--color-kira-orange)"></div>
        <div class="text-white font-bold font-mono">KIRA</div>
        <span class="grow"></span>
        <a href="/" class="text-kira-blue hover:underline">Home</a>

        <a href="#teams" class="text-kira-blue hover:underline">Teams</a>
        <a href="#join" class="text-kira-blue outline-ring outline-[1px] outline-offset-6 rounded-sm hover:underline">Join Us</a>

    </nav>
    <div class="h-20"></div>
    <div class="flex flex-col gap-4 w-2/3 font-[Outfit]">
        <div class="text-3xl text-kira-orange">
            <h2>Karlsruhe International <br/> Rocketry Association</h2>
        </div>
        
        <p class="text-muted">Student rocketry at KIT – safety, learning and engineering excellence</p>
        <div class="flex flex-row gap-4">
            <a href="#teams" class="p-2 transition-all text-black font-semibold bg-gradient-to-r from-kira-orange to-orange-300 rounded-lg hover:outline-2 hover:outline-fg hover:outline-offset-4">Explore Teams</a>
            <a href="#join" class="p-2 px-3 text-fg  outline-ring outline-1 rounded-lg hover:outline-fg">Join Us</a>
        </div>
    </div>
    <div class="h-40"></div>
    <div id="join" class="text-fg flex flex-col b ">
        
<div class="w-full flex flex-row lg:hidden">
            <img src="/svgs/rocketlaunch.svg" class="w-1/4 mx-auto mb-6" alt="">
        </div>
        <h2 class="text-2xl text-fg font-semibold">Become part of the Team!</h2>
        <span class="h-0.5"></span>
        
        <p class="text-muted">You are interested in applying your knowledge and want to be part of something big?</p>
        <span class="h-3"></span>
        
        
        <a href="#" class="transition-all border-kira-blue border w-fit p-2 text-white font-semibold rounded-lg hover:rotate-2 hover:scale-105">Apply Here</a>
    </div>
    <div class="h-20"></div>
    <div class="flex flex-col gap-2 justify-center items-center">
        <h2 class="text-2xl text-fg font-semibold">Teams</h2>
        <TeamCard title="Propulsion" description="Getting us up to apogee" isActive={true}/>

    </div>

    <div class="w-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores dignissimos nam molestiae neque laudantium beatae asperiores consectetur facilis, nisi consequatur quaerat. Ipsam vel libero deserunt dolor ut molestias impedit.</div>
</div>



