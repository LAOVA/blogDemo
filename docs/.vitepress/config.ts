import { defineConfig } from 'vitepress'
import { nav } from '../modules/navbar'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LAOVA's blog",
  description: "一个简约的个人博客",
  themeConfig: {
    logo: 'logo.png',
    search: {
      provider: 'local'
    },
    nav,
    outline: {
      level: [1, 4],
      label: '目录'
    },
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LAOVA' }
    ],

    // footer: {
    //   message: 'Fortune favors the bold.',
    //   copyright: 'LAOVA',
    // }
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar()
    ]
  },
})
