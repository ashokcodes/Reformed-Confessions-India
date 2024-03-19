import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// Adjust paths if needed
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
		}),
	},
};