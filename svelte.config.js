import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({})],

  kit: {
    adapter: adapter(),
  },
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve('src/lib'),
        $general: path.resolve('src/general'),
      },
    },
  },
};

export default config;
