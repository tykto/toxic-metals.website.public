import type { Handle } from '@sveltejs/kit';
import type { Options } from 'html-minifier';
import { minify } from 'html-minifier';

const options: Options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
  removeEmptyElements: true,
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (response.headers.get('content-type') === 'text/html') {
    const body = await response.text();
    const minifiedBody = minify(body, options);
    return new Response(minifiedBody);
  } else {
    return response;
  }
};
