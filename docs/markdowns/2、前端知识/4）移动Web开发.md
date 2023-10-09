# 移动 Web 开发

## 移动端基础

### 常见移动端屏幕尺寸

![](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092331380.png)

<br/>

### 移动端调试方法

- Chrome DevTools (谷歌浏览器）的模拟手机调试
- 搭建本地 web 服务器，手机和服务器一个局域网内，通过手机访问服务器
- 使用外网服务器，直接 IP 或域名访问

<br/>

### 总结

- 移动端浏览器我们主要对 webkit 内核进行兼容
- 我们现在开发的移动端主要针对手机端开发
- 现在移动端碎片化比较严重，分辨率和屏幕尺寸大小不一
- 学会用谷歌浏览器模拟手机界面以及调试

<br/>

<br/>

## 视口

**视口（ viewport）**就是浏览器显示页面内容的屏幕区域，视口可以分为布局视口、视觉视口和理想视口。

<br/>

#### 三大视口

> **布局视口 layout viewport**
>
> ![image-20230306101442553](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092331141.png)

> **视觉视口 visual viewport**
>
> ![image-20230306101545011](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092331915.png)

> **理想视口 ideal viewport**
>
> ![image-20230306101651252](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092333668.png)

**总结**

- 视口就是浏览器显示页面内容的屏幕区域
- 视口分为布局视口、视觉视口和理想视口
- 我们移动端布局想要的是理想视口就是手机屏幕有多宽，我们的布局视口就有多宽
- 想要理想视口，我们需要给我们的移动端页面添加 meta 视口标签

<br/>

### meta 视口标签

![image-20230306102122059](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334610.png)

**标准的 viewport 设置**

- 视口宽度和设备保持一致
- 视口的默认缩放比例 1.0
- 不允许用户自行缩放
- 最大允许的缩放比例 1.0
- 最小允许的缩放比例 1.0

<br/>

<br/>

## 二倍图

### 物理像素&物理像素比

- 物理像素点指的是屏幕显示的最小颗粒，是物理真实存任的。这是厂商在出厂时就设置好了，比如苹果 6\7\8 是 750\*1334
- 我们开发时候的 1px 不是一定等于 1 个物理像素的
- PC 端页面，1 个 px 等于 1 个物理像素的，但是移动端就不尽相同
- 一个 px 的能显示的物理像素点的个数，称为物理像素比或屏幕像素比

<br/>

### 多倍图

- 对于一张 50px\*50px 的图片,在手机 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊
- 在标准的 viewport 设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题
  通常使用二倍图，因为 iPhone 6\7\8 的影响,但是现在还存在 3 倍图 4 倍图的情况，这个看实际开发公司需求
- 背景图片注意缩放问题

![image-20230306103737292](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334553.png)

<br/>

### 背景缩放 background-size

![image-20230306105140860](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334619.png)

![image-20230306105051029](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092333597.png)

<br/>

### 二倍精灵图做法

- 在 firework 里面把精灵图等比例缩放为原来的一半之后
- 根据大小测量坐标
- 注意代码里面 background-size 也要写 ∶ 精灵图原来宽度的一半

<br/>

### 图片格式

![image-20230307110635544](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334310.png)

<br/>

<br/>

## 移动端开发选择

### 移动端主流方案

> **单独移动端页面（主流）**
>
> 通常情况下，网址域名前面加**m(mobile)**可以打开移动端。通过判断设备，如果是移动设备打开，则跳到**移动端页面**。

> **响应式兼容 PC 移动端**
>
> 通过判断屏幕宽度来改变样式，以适应不同终端。

<br/>

<br/>

## 移动端技术解决方案

### 移动端浏览器

![image-20230306105933950](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334210.png)

<br/>

### CSS 初始化 normalize.css

移动端 CSS 初始化推荐使用 normalize.css/

- Normalize.css：保护了有价值的默认值
- Normalize.css：修复了浏览器的 bug
- Normalize.css：是模块化的
- Normalize.css：拥有详细的文档

官网地址: http://necolas.github.io/normalize.css/

<br/>

### CSS3 盒子模型 box-sizing

- **传统模式宽度计算**：盒子的宽度=CSS 中设置的 width + border + padding
- **CSS3 盒子模型**：盒子的宽度=CSS 中设置的宽度 width 里面包含了 border 和 padding 也就是说，我们的 CSS3 中的盒子模型，padding 和 border 不会撑大盒子了
- 移动端可以全部 CSS3 盒子模型
- PC 端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型

![image-20230306110505804](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334023.png)

<br/>

### 特殊样式

![image-20230306110847438](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334981.png)

```css
/* 点击高亮我们需要清除清除设置为transparent完成透明*/
* {
  -webkit-tap-highlight-color: transparent;
}

/*在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式*/
input {
  -webkit-appearance: none;
}

/*禁用长按页面时的弹出菜单*/
img,
a {
  -webkit-touch-callout: none;
}
```

<br/>

<br/>

## 移动端常见布局

![image-20230306111045172](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334735.png)

<br/>

### 流式布局（百分比布局）

- 流式布局，就是百分比布局，也称非固定像素布局。
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。
- 流式布局方式是移动 web 开发使用的比较常见的布局方式。
- max-width 最大宽度（max-height 最大高度）
- min-width 最小宽度（min-height 最小高度）

<br/>

### Flex 布局

**传统布局与 flex 布局**

![image-20230307221457603](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334702.png)

#### 布局原理

flex 是 flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。

- 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效
- 伸缩布局=弹性布局=伸缩盒布局=弹性盒布局=flex 布局

![image-20230307222006274](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092334229.png)

#### 父项常见属性

- flex-direction：设置主轴的方向
- justify-content：设置主轴上的子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式(多行)
- align-items：设置侧轴上的子元素排列方式(单行)
- flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

> **flex-direction 设置主轴方向**
>
> flex-direction 属性决定主轴的方向(即项目的排列方向)
> 注意 ∶ 主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的

![image-20230307222346250](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335603.png)

> **justify-content 设置主轴上的子元素排列方式**

![image-20230307222547915](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335456.png)

> **flex-wrap 设置子元素是否换行**
>
> 默认情况下，项目都排在一条线(又称”轴线”)上。flex-wrap 属性定义，flex 布局中默认是不换行的。

![image-20230307222951793](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335198.png)

> **align-items 设置侧轴上的子元素排列方式(单行)**

![image-20230308083644480](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335880.png)

> **align-content 设置侧轴上的子元素的排列方式（多行)**
>
> 设置子项在侧轴上的排列方式并且只能用于子项出现换行的情况(多行），在单行下是没有效果的。

![image-20230308083942102](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335688.png)

\***\*align-content 和 align-items 区别\*\***

- align-items 适用于单行情况下，只有上对齐、下对齐、居中和拉伸
- align-content 适应于换行(多行)的情况下(单行情况下无效），可以设置上对齐、下对齐居中、拉伸以及平均分配剩余空间等属性值。
- 总结就是单行找 align-items 多行找 align-content

![image-20230308084225338](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335313.png)

> **flex-flow**

![image-20230308084456612](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335566.png)

#### 子项常见属性

> **flex 属性**
>
> flex 可以填整数值可以填百分比

![image-20230308084940777](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335359.png)

> **align-self 控制子项自己在侧轴上的排列方式**

![image-20230308085144017](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335347.png)

> **order 属性定义项目的排列顺序**
>
> 数值越小，排列越靠前，默认为 0。注意:和 z-index 不一样。

<br/>

### rem 适配布局

#### rem 基础

![image-20230308102321717](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335081.png)

#### 媒体查询

媒体查询( **Media Query**)是 CSS3 新语法。

- 使用@media 查询，可以针对不同的媒体类型定义不同的样式
- @media 可以针对不同的屏幕尺寸设置不同的样式
- 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
- 目前针对很多苹果手机、Android 手机，平板等设备都用得到多媒体查询

![image-20230308102526909](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335036.png)

> mediatype 查询类型

![image-20230308102720392](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335971.png)

> 关键字

![image-20230308102805464](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335065.png)

> 媒体特性

![image-20230308102913242](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335546.png)

**媒体查询+rem 实现元素动态大小变化**

rem 单位是跟着 html 来走的，有了 rem 页面元素可以设置不同大小尺寸媒体查询可以根据不同设备宽度来修改样式
媒体查询+rem 就可以实现不同设备宽度，实现页面元素大小的动态变化

![image-20230308104403619](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335661.png)

**引入资源**

当样式比较繁多的时候，我们可以针对不同的媒体使用不同 stylesheets (样式表)。原理，就是直接在 link 中判断设备的尺寸，然后引用不同的 css 文件。

#### less 基础

**Less 是一门 CSS 预处理语言，它扩展了 CSS 的动态特性。**

![image-20230310143635553](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092335899.png)

> **less 变量**

![image-20230310144055154](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336939.png)

> **less 编译**

![image-20230310150018082](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336139.png)

> **less 嵌套**

![image-20230310150356214](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336351.png)

![image-20230310151223453](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336265.png)

> **less 运算**

![image-20230310151457090](C:\Users\17232\Desktop\Markdown笔记\前端学习\移动Web开发\image-20230310151457090.png)

![image-20230310151833251](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336861.png)

#### rem 适配方案

![image-20230310152034806](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336757.png)

**苏宁移动端首页案例 **

> **方案 1**
>
> less+rem+媒体查询

![image-20230310153020880](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336751.png)

![image-20230310153240496](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336729.png)

![image-20230310154733760](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336880.png)

![image-20230310155813855](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336899.png)

> **方案 2**
>
> flexible.js

![image-20230310170902251](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336892.png)

![image-20230310172115602](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092336615.png)

![image-20230310172127631](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337996.png)

![image-20230310174257292](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337294.png)

![image-20230310174721596](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337154.png)

<br/>

### 响应式布局

#### 原理

就是使用**媒体查询**针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

![image-20230313084751050](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337339.png)

#### 布局容器

响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果。
原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

- 超小屏幕（手机，小于 768px )：设置宽度为 100%
- 小屏幕（平板，大于等于 768px )：设置宽度为 750px
- 中等屏幕（桌面显示器，大于等于 992px )：宽度设置为 970px
- 大屏幕(大桌面显示器，大于等于 1200px )：宽度设置为 1170px

<br/>

<br/>

## Bootstrap

Bootstrap 来自 Twitter(推特），是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS 和 JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。
框架︰顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件。使用者要按照框架所规定的某种规范进行开发。

**优点**

- 标准化的 html+css 编码规范
- 提供了一套简洁、直观、强悍的组件
- 有自己的生态圈，不断的更新迭代
- 让开发更简单，提高了开发的效率

### **Bootstrap 的使用**

![image-20230313091545352](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337605.png)

![image-20230313091606872](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337431.png)

![image-20230313091621492](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337075.png)

![image-20230313091832469](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337406.png)

<br/>

### 布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个.container 容器，Bootstarp 预先定义好了这个类，叫.container 它提供了两个作此用处的类。

1. **.container 类**

   - 响应式布局的容器固定宽度

   - 大屏( >=1200px)宽度定为 1170px

   - 中屏( >=992px)宽度定为 970px

   - 小屏(>=768px)宽度定为 750px

   - 超小屏(100%)

2. **.container-fluid 类**

   - 流式布局容器百分百宽度
   - 占据全部视口( viewport )的容器
   - 适合于单独做移动端开发

<br/>

### Bootstrap 栅格系统

**栅格系统**英文为"gridsystems",也有人翻译为“网格系统”，它是指将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局。
Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口( viewport )尺寸的增加，系统会自动分为**最多 12 列**。
Bootstrap 里面 container 宽度是固定的，但是不同屏幕下，container 的宽度不同，我们再把 container 划分为 12 等份.

#### 栅格选项参数

![image-20230313093357303](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092337325.png)

```html
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">1</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">2</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">3</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">4</div>
  </div>
  <div class="row">
    <div class="col-lg-6">1</div>
    <div class="col-lg-2">2</div>
    <div class="col-lg-2">3</div>
    <div class="col-lg-2">4</div>
  </div>
</div>
```

#### 列嵌套

![image-20230313101257597](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092338879.png)

```html
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">1</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">2</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">3</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">4</div>
  </div>
  <div class="row">
    <div class="col-lg-6">
      <div class="row">
        <div class="col-md-6">a</div>
        <div class="col-md-6">b</div>
      </div>
    </div>
    <div class="col-lg-2">2</div>
    <div class="col-lg-2">3</div>
    <div class="col-lg-2">4</div>
  </div>
</div>
```

#### 列偏移

![image-20230313101423671](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092338404.png)

```html
<div class="container">
  <div class="row">
    <div class="col-md-3">左侧</div>
    <!--偏移的份数就是12-两个盒子的份数=6 -->
    <div class="col-md-3 col-md-offset-6">右侧</div>
  </div>
  <div class="row">
    <!--如果只有一个盒子那么就偏移=(12- 8)/2 -->
    <div class="col-md-8 col-md-offset-2">中间盒子</div>
  </div>
</div>
```

#### 列排序

![image-20230313101754682](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092338166.png)

#### 响应式工具

![image-20230313101932747](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092338451.png)
