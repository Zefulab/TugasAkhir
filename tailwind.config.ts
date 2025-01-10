import { withUt } from "uploadthing/tw";

export default withUt({
  // Your existing Tailwind config
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadingPrimary: "#0102f1c",
        topHeadingSecondy: "#021d35",
        pink: "#FD4B6B",
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
});
