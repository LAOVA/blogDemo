import { defineConfig } from 'vitepress'
import { nav } from '../modules/navbar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My First Blog",
  description: "A VitePress Site",
  themeConfig: {
    logo: 'logo.png',
    // https://vitepress.dev/reference/default-theme-config
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
    ]
  }
})