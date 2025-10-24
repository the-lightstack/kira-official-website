export default {
  content:[
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      boxShadow:{
        glow: "0 0 10px 3px rgba(255, 165, 0, 0.6)",
      },

      fontFamily: {
        ee: ["EurostileExtended", "sans-serif"],
      },
    },
  },
}