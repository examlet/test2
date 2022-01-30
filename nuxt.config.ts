import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: 'src/',
  meta: {
    title: 'FastApi Nuxt3 CRM',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'keywords',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'description',
      },
    ],
    link: [],
    script: [],
  },
  css: [
    '@/assets/css/index.css',
  ],
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
      ['btn-border', 'cursor-pointer inline-block border rounded border-solid border-gray-500 hover:border-teal-600 border-opacity-40 active:bg-gray-100 text-base px-4 py-1 disabled:cursor-not-allowed disabled:border-opacity-40 disabled:op50']
    ],
    rules: [],
  },
})
