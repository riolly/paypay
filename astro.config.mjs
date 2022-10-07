import {defineConfig} from 'astro/config'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
// import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		solidJs(),
		image(),
		// image({
		// 	serviceEntryPoint: '@astrojs/image/sharp',
		// }),
	],
	output: 'static',
	// adapter: netlify(),
})
