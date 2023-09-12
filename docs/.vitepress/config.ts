import { defineConfig } from 'vitepress'
import { nav } from '../modules/navbar'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LAOVA's blog",
  description: "我的简约风个人博客",
  themeConfig: {
    logo: 'logo.png',
    search: {
      provider: 'local'
    },
    nav,
    outline: {
      level: [2, 4],
      label: '目录'
    },
    sidebar: [
      {
        text: '文章总览',
        items: [
          { text: '关于我', link: '/markdowns/1.知识大门/开发必备清单' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
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
