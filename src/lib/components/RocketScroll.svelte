<script lang="ts">
  // === Scroll State ===
  let scrollY = $state(0);
  let lastY = $state(0);
  let scrollDir = $state<'up' | 'down'>('up');
  let scrollHeight = $state(1);
  let scrollProgress = $state(0);

  // === Derived Flight Data ===
  let altitude = $derived(100 - scrollProgress * 100); // km
  let speed = $derived(Math.abs(scrollY - lastY) * 0.1); // m/s
  let satellites = $derived(Math.floor(10 + 5 * Math.sin(scrollProgress * Math.PI * 2)));
  let acceleration = $derived(Math.abs(speed - (Math.abs(lastY - scrollY) * 0.1)));

  // === Scroll Listener ===
  $effect(() => {
    const handleScroll = () => {
      lastY = scrollY;
      scrollY = window.scrollY;
      scrollDir = scrollY > lastY ? 'down' : 'up';
      scrollHeight = document.body.scrollHeight - window.innerHeight;
      scrollProgress = scrollY / scrollHeight;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<style>
  .rocket {
    transition: transform 0.15s ease-out;
  }
</style>

<!-- === Rocket Scrollbar === -->
<div class="fixed right-4 top-1/12 bottom-0 w-4 bg-gray/40 rounded-full overflow-hidden z-40">
  <div class="relative w-full h-full">
    <div
      class="absolute left-1/2 transform -translate-x-1/2 rocket"
      style:top={`calc(${scrollProgress * 100}% - 1rem)`}
    >
    
      <!-- SVG Rocket -->
       <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 21.5C11 21.2239 11.2239 21 11.5 21H12.5C12.7762 21 13 21.2239 13 21.5C13 21.7761 12.7762 22 12.5 22H11.5C11.2239 22 11 21.7761 11 21.5Z" fill="#47495F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6799 2.61589C11.8654 2.46137 12.1347 2.46137 12.3201 2.61589L12.4416 2.71712C14.3795 4.33207 15.5 6.72437 15.5 9.247V13.25L17.3001 14.6C17.426 14.6945 17.5001 14.8427 17.5001 15V20C17.5001 20.2762 17.2762 20.5 17.0001 20.5C16.7239 20.5 16.5001 20.2762 16.5001 20V15.25L15.5 14.5V20C15.5 20.2761 15.2762 20.5 15 20.5H9.00003C8.72389 20.5 8.50003 20.2761 8.50003 20V14.5L7.5 15.25V20C7.5 20.2762 7.27614 20.5 7 20.5C6.72386 20.5 6.5 20.2762 6.5 20V15C6.5 14.8427 6.5741 14.6945 6.7 14.6L8.50003 13.25V9.247C8.50003 6.72437 9.62052 4.33207 11.5585 2.71712L11.6799 2.61589ZM9.50003 19.5H14.5V9.247C14.5 7.10879 13.5877 5.0767 12 3.65682C10.4124 5.0767 9.50003 7.10879 9.50003 9.247V19.5Z" fill="#47495F"/>
       </svg>      
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        class="h-8 w-8"
        style:transform={`rotate(${scrollDir === 'down' ? 180 : 0}deg)`}
      > 
        <defs>
          <linearGradient id="rocketGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#b8c0ff" />
            <stop offset="100%" stop-color="#748cab" />
          </linearGradient>
        </defs>
        <path
          d="M32 2C28 8 20 24 20 36c0 10 6 18 12 26 6-8 12-16 12-26 0-12-8-28-12-34z"
          fill="url(#rocketGradient)"
        />
        <circle cx="32" cy="20" r="4" fill="#e0eaff" />
        <path d="M32 62l-4-8h8z" fill="#fca311" />
      </svg> -->
    </div>
  </div>
</div>

<!-- === Flight Data HUD === -->
<div
  class="fixed bottom-6 right-6 bg-[#1b263b]/80 text-[#e0eaff] rounded-2xl shadow-lg p-4 w-56 z-40 backdrop-blur-md border border-[#415a77]/30"
>
  <h2 class="font-semibold text-sm text-[#b8c0ff] mb-1">Flight Data</h2>
  <div class="text-sm space-y-1 font-mono">
    <p>Altitude: {altitude.toFixed(1)} km</p>
    <p>Speed: {speed.toFixed(1)} m/s</p>
    <p>Satellites: {satellites}</p>
    <p>Acceleration: {acceleration.toFixed(2)}</p>
  </div>
</div>
