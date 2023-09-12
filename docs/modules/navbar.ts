import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  // { text: 'Examples', link: '/markdown-examples' }
  {
    text: '前端知识',
    items: [
    ]
  },
  {
    text: '后端知识',
    items: [
      {
        text: '数据结构与算法',
        link: '/markdowns/3.后端知识/数据结构与算法'
      }
    ]
  },
  {
    text: '个人项目',
    items: [
    ]
  },
  {
    text: '杂七杂八',
    items: [
      {
        text: '常见面试题',
        link: '/markdowns/杂七杂八/面经/常见面试题'
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/LAOVA' },
      { text: '稀土掘金', link: 'https://juejin.cn/user/3347365561894494' },
      { text: 'CSDN', link: 'https://blog.csdn.net/qq_28633683?spm=1010.2135.3001.5343' },
    ]
  },
]