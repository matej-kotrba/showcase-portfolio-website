/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'h1': 'var(--h1)',
				'h2': 'var(--h2)',
				'h3': 'var(--h3)',
				'h4': 'var(--h4)',
				'h5': 'var(--h5)',
				'h6': 'var(--h6)',
				'body': 'var(--body)',
				'small': 'var(--small)',
			},
			colors: {
				'background': 'var(--background)',
				'primary': 'var(--primary)',
				'secondary': 'var(--secondary)',
				'text': 'var(--text)',
			},
			fontFamily: {
				'default': 'var(--font-default)',
			}
		},
	},
	plugins: [],
}
