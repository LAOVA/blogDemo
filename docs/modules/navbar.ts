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
        text: 'Node.js',
        link: '/markdowns/三、后端知识/1）Node.js'
      },
      {
        text: '数据结构与算法',
        link: '/markdowns/三、后端知识/2）数据结构与算法'
      },
      {
        text: 'Nginx的基本使用',
        link: '/markdowns/三、后端知识/3）Nginx的基本使用'
      }
    ]
  },
  {
    text: '实战项目',
    items: [
      {
        text: '小米商城页面仿写',
        link: 'https://github.com/LAOVA/MIshopCode'
      },
      {
        text: '网易云音乐移动端仿写',
        link: 'https://github.com/LAOVA/wy-music'
      },
      {
        text: '色彩星球小程序',
        link: 'https://github.com/LAOVA/ColorPlanet'
      },
      {
        text: 'IM在线聊天系统',
        link: 'https://github.com/LAOVA/IMsystem'
      },
      {
        text: '疫情数据可视化',
        link: 'https://github.com/LAOVA/YQ-DLV'
      },
      {
        text: '简易win10计算器',
        link: 'https://github.com/LAOVA/simpleCalculator'
      },
      {
        text: '王者荣耀官网镜像',
        link: 'https://github.com/LAOVA/HOK-MS'
      },
    ]
  },
  {
    text: '杂七杂八',
    items: [
      {
        text: '面经',
        items: [
          {
            text: '常见面试题',
            link: '/markdowns/四、杂七杂八/1）面经/常见面试题'
          }
        ]
      },
      {
        text: '开发技巧',
        items: []
      },
      {
        text: '常见报错',
        items: []
      }
    ]
  },
  // {
  //   text: '关于我',
  //   items: [
  //     { text: 'Github', link: 'https://github.com/LAOVA' },
  //     { text: '稀土掘金', link: 'https://juejin.cn/user/3347365561894494' },
  //     { text: 'CSDN', link: 'https://blog.csdn.net/qq_28633683?spm=1010.2135.3001.5343' },
  //   ]
  // },
]