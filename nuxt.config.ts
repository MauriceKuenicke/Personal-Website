export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  css: ['./assets/global.css'],
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],

  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: {
        'rehype-katex': {
          output: 'htmlAndMathml' // the default value is 'htmlAndMathml'
        }
      }
    }
  }
})
