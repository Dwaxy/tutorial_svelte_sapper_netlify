// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    scss: false,
  }),
  // ...other svelte options
};