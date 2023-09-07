import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  // { text: 'Examples', link: '/markdown-examples' }
  {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/markdowns/home/SuanFa' // 对应docs/column/Algorithm下的idnex.md文件
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