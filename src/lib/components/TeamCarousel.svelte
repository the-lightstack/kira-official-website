<script lang="ts">
  type Team = {
    name: string;
    description: string;
    icon: string;
    color?: string;
  };

  let teams: Team[] = [
    {
      name: "Propulsion",
      description: "Designs and tests the rocket engines — liquid and hybrid propulsion systems.",
      icon: "🧯",
      color: "#fca311"
    },
    {
      name: "Avionics",
      description: "Builds the flight computer, telemetry systems, and sensor integrations.",
      icon: "📡",
      color: "#4cc9f0"
    },
    {
      name: "Structures",
      description: "Develops the rocket body, airframe materials, and load-bearing design.",
      icon: "🧱",
      color: "#90e0ef"
    },
    {
      name: "Recovery",
      description: "Ensures safe landing through parachute deployment and tracking systems.",
      icon: "🪂",
      color: "#b8c0ff"
    },
    {
      name: "Operations",
      description: "Manages launches, ground systems, and mission coordination.",
      icon: "🎛️",
      color: "#ffd6a5"
    }
  ];

  // Duplicate first and last cards for seamless looping
  let extended = $derived([teams.at(-1), ...teams, teams[0]]);

  let current = $state(1); // start at first real card
  let transitioning = $state(false);
  let interval: ReturnType<typeof setInterval> | null = null;

  function goTo(index: number) {
    if (transitioning) return;
    transitioning = true;
    current = index;
    setTimeout(() => {
      // handle wrap-around
      if (current === 0) current = teams.length;
      else if (current === teams.length + 1) current = 1;
      transitioning = false;
    }, 450);
  }

  function next() {
    goTo(current + 1);
  }

  // Auto-scroll
  $effect(() => {
    interval = setInterval(next, 4000);
    return () => clearInterval(interval!);
  });
</script>

<style>
  .carousel-track {
    transition: transform 0.45s ease;
  }
  .no-transition {
    transition: none !important;
  }
</style>

<div class="relative w-full flex flex-col items-center mt-12 select-none">
  <h2 class="text-2xl font-bold text-[#b8c0ff] mb-6">Rocket Teams</h2>

  <div class="relative w-full max-w-5xl overflow-hidden px-8">
    <!-- Track -->
    <div
      class="flex items-center justify-center carousel-track"
      class:no-transition={transitioning === false && (current === 0 || current === teams.length + 1)}
      style:transform={`translateX(-${current * (100 / 3)}%)`}
    >
      {#each extended as team, i}
        <div
          class="min-w-[33.3333%] px-3 flex justify-center transition-opacity duration-500"
          style:opacity={i === current ? 1 : 0.4}
        >
          <div
            class="bg-[#1b263b]/80 backdrop-blur-md border border-[#415a77]/40 rounded-2xl p-6 w-full shadow-lg text-[#e0eaff] flex flex-col items-center text-center"
          >
            <div class="text-5xl mb-3" style:color={team.color}>
              {team.icon}
            </div>
            <h3 class="text-xl font-semibold mb-2">{team.name}</h3>
            <p class="text-sm text-[#b8c0ff]">{team.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Dots -->
  <div class="flex space-x-2 mt-4">
    {#each teams as _, i}
      <button
        class="w-3 h-3 rounded-full transition"
        class:bg-[#b8c0ff]={current - 1 === i}
        class:bg-[#415a77]={current - 1 !== i}
        on:click={() => goTo(i + 1)}
      />
    {/each}
  </div>
</div>
