import { defineConfig } from 'vitepress'
import { nav } from '../modules/navbar'

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

    sidebar: [
      {
        text: '文章总览',
        items: [
          { text: '关于我', link: '/markdowns/home/Web' },
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
})
