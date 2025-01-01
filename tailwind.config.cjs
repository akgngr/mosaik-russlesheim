module.exports = {
  mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ["Barlow","sans-serif"],
      },
    },
	},
	plugins: [],
};
