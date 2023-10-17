# Vue.js 基础

## Vue 简介

vue：一套用于构建用户的前端框架

<br/>

### Vue 的特性

1. 数据驱动视图
2. 双向数据绑定

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142515.png" alt="截图" style="zoom: 80%;" />

**数据驱动视图**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142579.png" alt="截图" style="zoom: 80%;" />

**双向数据绑定**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142444.png" alt="截图" style="zoom:50%;" />

<br/>

## MVVM

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142847.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172206691.png" alt="截图" style="zoom:50%;" />

<br/>

### 工作原理

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142946.png" alt="截图" style="zoom:50%;" />

<br/>

# Vue2

## vue 的基本使用

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142553.png" alt="截图" style="zoom:50%;" />

<br/>

## vue 项目的运行流程

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142566.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142399.png" alt="截图" style="zoom:50%;" />

<br/>
**vue 组件的实例对象**

vue-template-compiler：vue 模版编译器(包)，将 vue 文件编译成 js 文件。

在 vue 文件创建组件对象，当使用标签使用组件时，就是在对 vue 组件进行实例化。

<br/>

### vue 的指令

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142394.png" alt="截图" style="zoom:50%;" />

<br/>

**内容渲染指令**

内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下 3 个:

1. `v-text`
2. `{{}}`
3. `v-html`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142854.png" alt="截图" style="zoom:50%;" />

<br/>

`v-text`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142741.png" alt="截图" style="zoom:50%;" />

`{{}}`

除了支持绑定简单的数据值之外，还支持 Javascript 表达式的运算

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172142843.png" alt="截图" style="zoom:50%;" />

`v-html`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143317.png" alt="截图" style="zoom:50%;" />

<br/>

**属性绑定指令**

`v-bind`，简写":"

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143044.png" alt="截图" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143483.png" alt="截图" style="zoom:50%;" />

<br/>

**事件绑定指令**

`v-on`，简写“@”

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143091.png" alt="截图" style="zoom:50%;" />

- 方法写在 methods:{}里
- 传参中加入“$event”，可以获得原生 DOM 对象参数

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143211.png" alt="截图" style="zoom: 80%;" />

<br/>

**事件修饰符**

在事件后面加上事件修饰符

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143548.png" alt="截图" style="zoom: 80%;" />

<br/>

**按键修饰符**

`@key**`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143544.png" alt="截图" style="zoom:50%;" />

<br/>

**双向数据绑定**

`v-model`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172143957.png" alt="截图" style="zoom: 80%;" />

`v-model`修饰符

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144279.png" alt="截图" style="zoom: 80%;" />

<br/>

**条件渲染指令**

`v-if、v-show`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144576.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144238.png" alt="截图" style="zoom:50%;" />

`v-else-if、v-else`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144851.png" alt="截图" style="zoom:50%;" />

<br/>

**列表渲染指令**

`v-for`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144489.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144477.png" alt="截图" style="zoom:50%;" />

`key属性`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144560.png" alt="截图" style="zoom:50%;" />

<br/>

### vue 的过滤器（filter）

**私有过滤器**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144247.png" alt="截图" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172206754.png" alt="截图" style="zoom: 80%;" />

**全局过滤器**

（写在全局 js 实例上面）

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144581.png" alt="截图" style="zoom: 80%;" />

<br/>

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144339.png" alt="截图" style="zoom: 80%;" />

<br/>

连续调用过滤器

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144836.png" alt="截图" style="zoom:50%;" />

<br/>

过滤器传参

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144680.png" alt="截图" style="zoom:80%;" />

<br/>

<br/>

### vue 的侦听器（watch）

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144169.png" alt="截图" style="zoom:80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144539.png" alt="截图" style="zoom:50%;" />

<br/>

侦听器格式

```js
watch:{
  xxx:{
    handler(newVal,oldVal){
      ...
    }
    immediate:true,
  	deep:true
  },
}
```

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144438.png" alt="截图" style="zoom:80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144367.png" alt="截图" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144818.png" alt="截图" style="zoom:50%;" />

侦听对象单个属性的变化

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144477.png" alt="截图" style="zoom: 80%;" />

<br/>

<br/>

### vue 的计算属性（computed）

特点：

1. 定义的时候，要被定义为"方法”
2. 在使用计算属性的时候，当普通的属性使用即可

好处：

1. 实现了代码的复用
2. 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值!

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144229.png" alt="截图" style="zoom: 80%;" />

<br/>

## vue 组件

### **组件化开发**

**组件化开发**：根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目的开发和维护。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172145312.png" alt="截图" style="zoom:50%;" />

<br/>

**三个组成部分**

1. `template`（只能包含一个 div 根节点）
2. `script` （_export default {} 来作为一个伪 vue 对象_）
3. `style`（启用 less 语法需要加上属性：lang="less"）

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172144485.png" alt="截图" style="zoom:50%;" />

`script`中必须使用：

- `export default {}`来默认导出
- 组件中的`data`必须是一个**函数**且有 return 返回对象
- 方法写在`methos{}`中

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146784.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146245.png" alt="截图" style="zoom:50%;" />

<br/>

**组件之间的父子关系**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146893.png" alt="截图" style="zoom:50%;" />

<br/>

**使用组件的三个步骤**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146876.png" alt="截图" style="zoom:50%;" />

<br/>

**注册组件**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146817.png" alt="截图" style="zoom:50%;" />

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146413.png" alt="截图" style="zoom:50%;" />

<br/>

**组件的`props`**

组件的复用性：

props 是组件的自定义属性，在封装通用组件的时候，合理地使用 props 可以极大的提高组件的复用性!

1. props 是”自定义属性”，允许使用者通过自定义属性，为当前组件指定初始值
2. 自定义属性的名字，是封装者自定义的(只要名称合法即
3. props 中的数据，可以直接在模板结构中被使用
4. 注意:props 是只读的，不要直接修改 props 的值，否则终端会报错!

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146337.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146798.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172146378.png" alt="截图" style="zoom:50%;" />

<br/>

## 插槽

### 插槽的基本使用

**插槽（slot），标签起到占位作用**

- 默认插槽：default
- 具名插槽：定义了 name 名字

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172152971.png" alt="image-20230201194428645" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172152574.png" alt="image-20230201194846771" style="zoom: 67%;" />

<br/>

### `v-slot`指令

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172152174.png" alt="image-20230201200432460" style="zoom:67%;" />

```html
// 父组件中
<template v-slot:sl> slot!! </template>

//子组件中
<slot name="sl"></slot>
```

<br/>

### v-slot 的简写形式以及插槽后备内容

v-slot 的简写形式：“#”

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172153125.png" alt="image-20230201201827212" style="zoom:67%;" />

未设置 template 指向时，显示的是 slot 中的默认内容；设置后会覆盖默认内容。

<br/>

### 作用域插槽的基本用法

作用域插槽：在封装组件时，为预留的`<slot>`提供属性对应的值

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172153062.png" alt="image-20230201203744464" style="zoom:67%;" />

**作用域插槽的解构赋值**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172153906.png" alt="image-20230201204025565" style="zoom:67%;" />

<br/>

## 自定义指令

### 私有自定义指令

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172153310.png" alt="image-20230201230751600" style="zoom:67%;" />

<br/>

### 获取指令绑定的值

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154928.png" alt="image-20230201231450545" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154269.png" alt="image-20230201231558945" style="zoom:67%;" />

<br/>

### update 函数

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154942.png" alt="image-20230202005932692" style="zoom:67%;" />

<br/>

### 函数简写形式

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154563.png" alt="image-20230202010643884" style="zoom:67%;" />

<br/>

## 全局自定义指令

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154885.png" alt="image-20230202010740477" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154489.png" alt="image-20230202011117848" style="zoom:67%;" />

<br/>

## vue 中的 axios

> 安装依赖：npm install axios -s --legacy-peer-deps

（安装 ESLint 后，提醒如果配置后安装报错可以在 -S 后空格加上 --legacy-peer-deps，忽视依赖冲突）

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154190.png" alt="image-20230202205714874" style="zoom:67%;" />

<br/>

### axios 挂载到 Vue 的原型上

```javascript
// 在全局main.js中挂载axios到Vue上
import axios from "axios";
Vue.prototype.$http = axios;

// 在每个.vue 组件中要发起请求，直接调用this.$http.xxx
const { data: res } = await this.$http.get("https://www.escook.cn/api/cart");
```

<br/>

### 配置请求根路径

```js
// 全局main.js配置根路径
axios.defaults.baseURL = "https://www.escook.cn";

//发起请求
const { data: res } = await this.$http.get("/api/cart");
```

<br/>

### axios 挂载到 Vue 原型上的缺点

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154301.png" alt="image-20230202211723901" style="zoom:67%;" />

<br/>

### axios 的基础语法

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154346.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154739.png" alt="截图" style="zoom:50%;" />

<br/>

### 结合 async 和 await 调用 axios

调用 axios 方法得到的返回值是 Promise 对象，则前面可以添加 awai

await 只能用在被 async“修饰”的方法中

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154606.png" alt="截图" style="zoom:50%;" />

<br/>

**解构赋值**

解构赋值的时候,使用 : 进行重命名

```javascript
async function(){
  const { data:res } = await axios({
    method: '...',
    url: '...',
    data: {
      ...
    }
    // params: {...}
  })
}
```

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154780.png" alt="截图" style="zoom:50%;" />

<br/>

**基于 axios.get()和 axios.post()发送请求**

```javascript
async function(){
  // axios.get()
  const { data:res } = await axios.get('url',{params: {...}})

  // axios.post()
  const { data:res } = await axios.post('url',{...})
}
```

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154583.png" alt="截图" style="zoom:50%;" />

<br/>

## 路由

路由（router），就是对应关系。

### 前端路由

通俗易懂的概念：Hash 地址与组件之间的对应关系。

**前端路由的工作方式**

1. 前端路由的工作方式
2. 用户点击了页面上的路由链接
3. 导致了 URL 地址栏中的 Hash 值发生了变化
4. 前端路由监听了到 Hash 地址的变化
5. 前端路由把当前 Hash 地址对应的组件渲染都浏览器中

![image-20230301095353475](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154645.png)

**可复用组件存放在 component 文件夹，路由组件存放在 views 文件**

![image-20230301222559861](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172154429.png)

<br/>

<br/>

# 铺垫知识

## ES6 模块化

### node.js 中的模块化

![image-20230412091042117](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155705.png)

<br/>

### 前端模块化规范分类

![image-20230412091114506](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155447.png)

**默认**

![image-20230412091342849](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155395.png)

![image-20230412091427161](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155592.png)

默认导出的注意事项

1. 每个模块中，只允许使用唯一的一次 export default，否则会报错；
2. 默认导入时的接收名称可以任意名称，只要是合法的成员名称即可；

**按需**

![image-20230412091657090](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155734.png)

![image-20230412091723442](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155196.png)

按需导出与按需导入的注意事项：

1. 每个模块中可以使用多次按需导出
2. 按需导入的成员名称必须和按需导出的名称保持一致
3. 按需导入时，可以使用 as 关键字进行重命名
4. 按需导入可以和默认导入一起使用

**直接导入并执行模块中的代码**

![image-20230412091953961](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155244.png)

<br/>

### ES6 模块化规范

![image-20230412091213658](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155216.png)

<br/>

## Promise

### 回调地狱

![image-20230412092130821](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155890.png)

回调地狱的**缺点**：

1. 代码耦合性太强，牵一发而动全身，难以维护
2. 大量冗余的代码相互嵌套，代码的可读性变差

### Promise 的基本概念

![image-20230412093545835](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155994.png)

<br/>

### .then() 方法的特性

如果上一个.then()方法中返回了一个==新的 Promise 实例对象==，则可以通过下一个.then()继续进行处理。通过.then()方法的==链式调用==，就解决了==回调地狱==的问题。

![image-20230412093830404](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155700.png)

<br/>

### 通过.catch 捕获错误

![image-20230412094017012](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155863.png)

![image-20230412094053227](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155730.png)

<br/>

### Promise.all() 方法

![image-20230412094217485](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155354.png)

<br/>

### Promise.race() 方法

![image-20230412094334526](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155298.png)

<br/>

### 获取 .then 的两个实参

![image-20230412094512267](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155055.png)

<br/>

### 调用 resolve 和 reject 回调函数

![image-20230412094629290](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155966.png)

<br/>

### async / await

![image-20230412094821969](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155786.png)

![image-20230412094856019](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155210.png)

**使用注意事项**

1. 如果在 function 中使用了 await，则 function 必须被 async 修饰
2. 在 async 方法中，第一个 await 之前的代码会同步执行，await 之后的代码会异步执行

<br/>

## EventLoop

### JavaScript 单线程

![image-20230412095128184](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155291.png)

<br/>

### 同步任务 和 异步任务

![image-20230412095220614](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155802.png)

**执行过程**![image-20230412095329023](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155418.png)

### EventLoop 基本概念

JavaScript 主线程从“任务队列”中读取异步任务的回调函数，放到执行栈中依次执行。这个过程是循环不断的，所以整个的这种运行机制又称为 EventLoop(事件循环)。

<br/>

## 宏任务 和 微任务

![image-20230412095734826](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155966.png)

<br/>

### 执行顺序

![image-20230412095832423](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155712.png)

**场景**

![image-20230412095945870](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155662.png)

![image-20230412100244123](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172155805.png)

<br/>

## 接口案例

### 搭建项目的基本结构

> ![image-20230412101123708](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156011.png)
>
> ![image-20230412101247489](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156479.png)

### 创建基本的服务器

> ![image-20230412101216699](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156168.png)

### 创建 db 数据库操作模块

![image-20230412101318438](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156336.png)

### 创建 user_ctrl 模块

![image-20230412101410098](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156179.png)

### 创建 user_router 模块

![image-20230412101525014](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156151.png)

### 使用 try...catch 捕获异常

![image-20230412101720433](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156964.png)

<br/>

## 总结

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156435.png" alt="image-20230412101901072" style="zoom:67%;" />

<br/>

<br/>

# vue-cli

vue-cli 是 Vue.js 开发的标准工具。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。

<br/>

## 安装和使用

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156527.png" alt="截图" style="zoom:50%;" />

<br/>

## 项目的目录结构

- node_modules：第三方包
- public：公共资源
- src：源代码

<br/>

**src 目录构成**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156131.png" alt="截图" style="zoom: 80%;" />

<br/>

<br/>

# vue-router

vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目中组件的切换。

### vue-router 安装和配置的步骤

1. 安装 vue-router 包
2. 创建路由模块
3. 导入并挂载路由模块
4. 声明路由链接和占位符

![image-20230303085008468](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156368.png)

![image-20230303084950989](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156605.png)

在 main.js 文件中挂载

![image-20230303085049286](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156464.png)

![image-20230303085201447](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156425.png)

使用 router-link 代替 a 链接

![image-20230303085308471](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156465.png)

<br/>

### redirect 重定向

![image-20230303085406274](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156094.png)

### 嵌套路由

![image-20230303085448179](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156417.png)

**通过 childer 属性声明子路由规则**

![image-20230303085537296](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156195.png)

**默认子路由**

![image-20230303085650693](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156705.png)

<br/>

### 动态路由匹配

![image-20230303085744454](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156496.png)

**开启 props 传参**

![image-20230303085838564](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156398.png)

**query 和 fullPath**

![image-20230303085930835](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156125.png)

<br/>

### 导航守卫

![image-20230303090115053](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172156146.png)

**全局前置守卫**

![image-20230303090139899](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157624.png)

**守卫方法的 3 个形参**

![image-20230303090221249](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157129.png)

**next 函数的 3 种调用方式**

![image-20230303090327955](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157017.png)

**控制权限访问**

![image-20230303090418959](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157952.png)

<br/>

<br/>

# Vuex

### 组件之间共享数据的方式

![image-20230402155131786](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157770.png)

<br/>

### Vuex 概念

Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。

**好处**

1. 能够在 vuex 中集中管理共享的数据，易于开发和后期维护
2. 能够高效地实现组件之间的数据共享，提高开发效率
3. 存储在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步

<br/>

### Vuex 的基本使用

![image-20230402155355249](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157292.png) ![image-20230402155422088](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157068.png)

<br/>

### State

> State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。
>
> （使用 es6 语法中的"..."可以实现映射，即将目标数据映射为当前页面数据）
>
> ![image-20230402161903952](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157937.png)
>
> ![image-20230402161959380](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157039.png)

<br/>

### Mutation

> Mutation 用于变更 Store 中的数据。
>
> 1. 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据（只有 mutation 有权利修改）。
> 2. 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。
> 3. （使用 es6 语法中的"..."可以实现映射，即将目标方法映射为当前页面方法）
>
> ![image-20230402162741280](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157812.png)
>
> 传递参数方法一：
>
> ![image-20230402164155374](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157106.png)
>
> 传递参数方法二：
>
> ![image-20230402164523392](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157847.png)
>
> <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157824.png" alt="image-20230402164732091" style="zoom:67%;" />

<br/>

### Action

> Action 用于处理异步任务。
> 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。(类似桥梁作用)
>
> state 也可以使用 mapState 引入。对应的其它的都可以使用 mapActions、mapMutations、mapGetters 进行引入
>
> 方法一：
>
> ![image-20230402173542781](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157043.png)
>
> 注意：只能借助传入的"context"参数来帮助 actions 异步方法来进行 commit 操作
>
> <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157958.png" alt="image-20230402173701459" style="zoom:67%;" />
>
> ![image-20230402175113797](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157534.png)
>
> 方法二：
>
> ![image-20230402175335517](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158937.png)
>
> 包含参数 n 时：直接使用 addNAsync(n)即可。

<br/>

### Getter

> Getter 用于对 Store 中的数据进行加工处理形成新的数据。
>
> 1. Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
> 2. Store 中数据发生变化，Getter 的数据也会跟着变化。
>
> ![image-20230402220537567](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157287.png)
>
> ![image-20230402220735754](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157930.png)

<br/>

### 分模块—modules

> 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
> 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module)。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。
>
> ![image-20230403101132556](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157697.png)
>
> **分模块后影响 state 取值方式**
>
> **state 分模块后由对象形式转为了函数形式，与其他语法不同，其他语法只需要（"模块名"，['方法名']）**
>
> ![image-20230403101508070](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157647.png)
>
> ![image-20230403101523161](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157078.png)
>
> <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157680.png" alt="image-20230403102018618" style="zoom:67%;" />

<br/>

### 分模块—命名空间

> 防止多个模块之间的 mutations / actions / getters 的名字冲突
>
> **开启命名空间**（namespaced: true)
>
> ![image-20230403105858501](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172157793.png)
>
> **分模块后 mutations 的使用方式**
>
> ![image-20230403110224878](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158906.png)
>
> **分模块后 actions 的使用方式**
>
> ![image-20230403110600343](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158715.png)
>
> **分模块后 getters 的使用方式**
>
> (注意开启后的直接使用语法跟 state 不同，需要在 this.$store.getters 后加上数组['模块名/计算属性名'])
>
> ![image-20230403111347862](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158833.png)
>
> ![image-20230403110758867](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158499.png)

<br/>

### vuex 运作方式

![image-20230403111613791](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158252.png)

![image-20230403111734051](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158309.png)

<br/>

<br/>

# Vue3

## 使用 vite 创建工程

vite： 新一代前端构建工具。

优势如下:

- 开发环境中，无需打包操作，可快速的冷启动。
- 轻量快速的热重载(HMR)。
- 真正的按需编译，不再等待整个应用编译完成。

### 初始化过程

> - npm init vite-app vue3_test
> - cd .\vue3_test\
> - npm init
> - npm run dev

**main.js**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158070.png" alt="image-20230412212517129" style="zoom:67%;" />

<br/>

## 常用 Composition API

### setup

setup 的值是一个函数

组件中所用到的：数据、方法等等，均要配置在 setup 中。

setup 函数的两种**返回值**：

1. 若返回一个对象，则对象中的属性、方法,在模板中均可以直接使用。
2. 若返回一个渲染函数：则可以自定义渲染内容。

**注意点:**

1. 尽量不要与 Vue2.x 配置混用
2. .Vue2.x 配置(data、methos、computed...）中可以访问到 setup 中的属性、方法。
3. 但在 setup 中不能访问到 Vue2.x 配置(data、methos、computed...)。
4. 如果有重名,，后者优先。
5. setup 不能是一个 async 函数，因为返回值不再是 return 的对象,而是 promise,模板看不到 return 对象中的属性。

**非响应式示例**

> setup() {
>
> let name = 'Jason'
>
> function test() {
>
> alert('Hello ' name)
>
> }
>
> return {
>
> name,
>
> }
>
> }

![image-20230413094615085](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158077.png)

<br/>

### ref 函数

**作用**：定义一个响应式的数据
**语法**：const xxx = ref(initValue)

1. 创建一个包含响应式数据的`引用对象`（reference 对象，简称 ref 对象）。
2. JS 中操作数据：xxx.value。
3. 模板中读取数据：不需要.value，直接:<div>{{xxx}}</div>

**注意**：

1. 接收的数据可以是：基本类型、也可以是对象类型。
2. 基本类型的数据：响应式依然是靠`object.defineProperty()`的`get`与`set`完成的。
3. 对象类型的数据：内部“求助”了 Vue3.0 中的一个新函数——`reactive`函数（封装了 Proxy）。

<br/>

### reactive 函数

- 作用：定义一个对象类型的响应式数据（基本类型不要用它，要用 ref 函数)
- 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组)，返回一个代理对象(Proxy 的实例对象，简称 proxy 对象)
- reactive 定义的响应式数据是“深层次的”。
- 内部基于 ES6 的`Proxy`实现，通过代理对象操作源对象内部数据进行操作。

<br/>

### 响应式原理

#### vue2

![image-20230412223958167](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158288.png)

**模拟 vue2 响应式**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158933.png" alt="image-20230413090726700" style="zoom:67%;" />

<br/>

#### vue3

**模拟 vue3 响应式**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158582.png" alt="image-20230413090624842" style="zoom:67%;" />

**利用 reflect 反射代理：**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172158421.png" alt="image-20230413091446746" style="zoom:67%;" />

**vue3 实现原理**：

> 1. 通过 Proxy(代理)：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。
> 2. 通过 Reflect(反射)：对被代理对象的属性进行操作。

<br/>

### reactive 对比 ref

**从定义数据角度对比**：

1. ref 用来定义：**基本类型数据**
2. reactive 用来定义：**对象(或数组)类型数据**。
3. 备注：ref 也可以用来定义**对象（或数组）类型数据**,它内部会自动通过`reactive`转为**代理对象**。

**从原理角度对比**：

1. ref 通过`object.defineProperty()`的`get`与`set`来实现响应式(数据劫持)。
2. reactive 通过使用`Proxy`来实现响应式(数据劫持),并通过`Reflect`操作**源对象**内部的数据。

**从使用角度对比**：

1. ref 定义的数据:操作数据需要`.value`，读取数据时模板中直接读取**不需要.value** 。
2. reactive 定义的数据:操作数据与读取数据：\*_均不需要.value_。

<br/>

### 计算属性与监视

#### computed 函数

```js
import {computed} from 'vue '

setup(){
    ...
	//计算属性—简写
	let fullName = computed(()=>{
		return person.firstName + '-' + person. lastName
    })
	//计算属性—完整
	let fullName = computed({
		get(){
			return person.firstName + '-' + person.lastName}，
		set(value){
			const nameArr = value.split('-')
            person.firstName = nameArr[0]
        	person.lastName = nameArr[1]
		}
	})
}
```

<br/>

#### watch 函数

**注意点：**

1. 监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）
2. 监视 reactive 定义的响应式数据中菜个属性时：deep 配置有效。

```js
import {ref,reactive,watch} from 'vue'

// 情况一；监视ref定义的响应式数据
watch(sum, ( newValue,oldValue)=>{
	console.log( ' sum变化了' , newValuet,oldValue)
},{immediate:true})

// 情况二:监视多个ref定义的响应式数据
watch( [sum,msg], (newValue,oldvalue)=>{
	console.log( 'sum或msg变化了' ,newValue,oldValue)
})

/* 情况三：监视reactive定义的响应式数据
	若watch监视的是reactive定义的响应式数据，则无法正确获得oldvalue! !
	若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
*/
// 常用写法（不在意oldvalue）
watch(person, (newValue,oldValue)=>{
	console.log( 'person变化了' , newValue,oldValue)
},{immediate:true,deep:false})//此处的deep配置不再奏效

// 情况四：监视reactive所定义的一个响应式数据中的某个属性
watch(()=>person.name,(newValue,oldValue)=>{
	console.log( 'person的name变化了' , newValue,oldValue)
})

// 情况五：监视reactive所定义的一个响应式数据中的某些属性
watch([()=>person.name,()=>person.age],(newValue,oldValue)=>				{console.log( 'person的name或age变化了',newValue,oldValue)
})

// 特殊情况
// 对象中的对象
watch(()=>person.job,(newValue, oldValue)=>{
 console.log( 'person的job变化了' , newValue,oldValue)
},{deep:true})//此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
// 当person是ref定义时
// 方案一：需要通过value来获取ref实例对象求助proxy代理定义的数据
watch(person.value, (newValue,oldvalue)=>{
console.log( "person的值变化了" ,newValue,oldValue))
})
// 方案二：开启深度监视（reactive会强制开启）
watch(person, (newValue,oldValue)=>{
console.log( "person的值变化了" ,newValue,oldValue)}.{deep:true})
```

<br/>

#### watchEffect 函数

- watch 的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect 的套路是：**不用指明**监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。（watchEffect 不能获取新旧值，只能起到监视变化作用）

- watchEffect 有点像 computed :
  。但 computed 注重的计算出来的值（回调函数的返回值)，所以**必须要写返回值**。
  。而 watchEffect 更注重的是过程(回调函数的函数体），所以**不用写返回值**。

- ```js
  // watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(() => {
    const x1 = sum.value;
    const x2 = person.age;
    console.log(" watchEffect配置的回调执行了");
  });
  ```

<br/>

### 生命周期

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172159102.webp" alt="img" style="zoom: 50%;" />

<br/>

### 自定义 hook 函数

- hook——本质是一个函数，把 setup 函数中使用的 Composition APl 进行了封装。
- 类似于 vue2.x 中的 mixin。
- 自定义 hook 的优势：复用代码,让 setup 中的逻辑更清楚易懂。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200148.png" alt="image-20230413154202933" style="zoom:67%;" />

<br/>

### toRef

- **作用**：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。
- **语法**：`const name = toRef(person,'name')`
- **应用**：要将响应式对象中的某个属性单独提供给外部使用时。
- **扩展**：`toRefs`与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`，在 setup 返回 return 时，可以进行对象展开`...toRefs(person)`

> <template>
>  <h4>{{person}}</h4>
>  <h2>姓名:{{name}}</h2>
>  <h2>年龄:{{age}}</h2>
>  <h2>薪资:{{salary}}K</h2>
> </template>
>
> //返回一个对象（常用）
>
> return {
> person,
> // name : toRef(person, 'name '),
>
> ​ // age:toRef(person , 'age '),
>
> ​ // salary:toRef(person.job.j1, 'salary ' ),
>
> ​ ...toRefs(person)
> }

<br/>

## 其他 Composition API

### shallowReactive 与 shallowRef

- shallowReactive：只处理对象最外层属性的响应式（浅响应式)。
- shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理。

**什么时候使用？**

- 如果有一个对象数据，结构比较深,但变化时只是外层属性变化===>shallowReactive。
- 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换===>shallowRef。

<br/>

### readonly 与 shallowReadonly

- readonly：让一个响应式数据变为只读的(深只读)。
- shallowReadonly：让一个响应式数据变为只读的(浅只读)。

应用场景：不希望数据被修改时。

<br/>

### toRaw 与 markRaw

![image-20230417160720567](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200617.png)

<br/>

### customRef

**作用：**创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

![image-20230417161128714](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200747.png)

<br/>

### provide 与 inject

![image-20230417161241290](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200842.png)

<br/>

### 响应式数据的判断

![image-20230417163353561](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200628.png)

<br/>

## Composition API 的优势

![image-20230417163505967](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200331.png)

![image-20230417163518780](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200924.png)

<br/>

## 新的组件

### Fragment

![image-20230417163548523](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200917.png)

<br/>

### Teleport

![image-20230417163605309](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200529.png)

<br/>

### Suspense

![image-20230417164011163](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200139.png)

<br/>

<br/>

## 其他

### 全局 API 的转移

![image-20230417164501136](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200710.png)

![image-20230417164720732](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200325.png)

<br/>

### 其他改变

![image-20230417164749603](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200187.png)

![image-20230417164843700](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200207.png)

![image-20230417165002039](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310172200365.png)

<br/>

<br/>

# Pinia

## Pinia 自定义持久化插件

### persistedstate.ts

```tsx
import { PiniaPluginContext } from "pinia";

export function persistedstate(context: PiniaPluginContext) {
  /* 
    初始化时，有几个store模块就执行几次，并在初始化时获取localStorage中的数据
    每次store中的state变化时，都把它保存在location里
    两个参数：当前修改store的上下文与当前修改的状态
   */
  // 初始化时：根据模块名获取对应的缓存
  const currentState = JSON.parse(
    localStorage.getItem(context.store.$id) || "{}"
  );
  context.store.$patch(currentState); // 替换到store中的状态中去
  // 当发生变化时：对状态进行缓存
  context.store.$subscribe(
    (_store, state) => {
      console.log(_store, state);
      // 存到localsStorages中
      localStorage.setItem(_store.storeId, JSON.stringify(state));
    },
    {
      // 卸载组件，保持依赖
      detached: true,
    }
  );
}
```
