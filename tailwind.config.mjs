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
				'landing': 'var(--landing)',
				'landing-bg': 'var(--landing-bg)'
			},
			colors: {
				'background': 'var(--background)',
				'primary': 'var(--primary)',
				'secondary': 'var(--secondary)',
				'text': 'var(--text)',
				'text-darker': 'var(--text-darker)',
				'landing-bg': 'var(--landing-bg)',
				'codeblock-specifier': 'var(--codeblock-specifier)',
				'codeblock-selector': 'var(--codeblock-selector)',
				'codeblock-value': 'var(--codeblock-value)',
				'codeblock-rest': 'var(--codeblock-rest)',
			},
			fontFamily: {
				'default': 'var(--font-default)',
			}
		},
	},
	plugins: [],
}
