# HTML、CSS

## 纯 CSS 实现轮播图效果

> - 翻页：采用两侧翻页键利用 lable 来绑定 radio 的示性式进行翻页。
> - 图片变换：通过横向排列图片，在 css 绑定 radio 的选中来 transform 来移动图片。

### 效果图

![image-20230709155242319](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211612870.png)

### 代码实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/test.css" />
    <title>纯代码实现轮播图</title>
  </head>
  <body>
    <div class="inner swiper">
      <ul class="slides">
        <input type="radio" id="control-1" name="control" checked />
        <input type="radio" id="control-2" name="control" />
        <input type="radio" id="control-3" name="control" />
        <input type="radio" id="control-4" name="control" />

        <li class="slide">
          <label for="control-4">
            <div class="prev">&lt</div>
          </label>
          <label for="control-2">
            <div class="next">&gt</div>
          </label>
        </li>

        <li class="slide">
          <label for="control-1">
            <div class="prev">&lt</div>
          </label>
          <label for="control-3">
            <div class="next">&gt</div>
          </label>
        </li>

        <li class="slide">
          <label for="control-2">
            <div class="prev">&lt</div>
          </label>
          <label for="control-4">
            <div class="next">&gt</div>
          </label>
        </li>

        <li class="slide">
          <label for="control-3">
            <div class="prev">&lt</div>
          </label>
          <label for="control-1">
            <div class="next">&gt</div>
          </label>
        </li>

        <div class="visible">
          <label for="control-1"></label>
          <label for="control-2"></label>
          <label for="control-3"></label>
          <label for="control-4"></label>
        </div>
      </ul>
    </div>
  </body>
</html>
```

```css
/* 轮播区 */
.swiper {
  position: relative;
  height: 670px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  width: 41px;
  height: 69px;
  margin-top: -34px;
  font-size: 40px;
  text-align: center;
  line-height: 67px;
  color: rgb(169, 182, 196);
  cursor: pointer;
  z-index: 2;
}

.next {
  left: unset;
  right: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.slides {
  position: relative;
  width: 70%;
  height: 460px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
}

.slides .slide {
  position: absolute;
  /* display: flex; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s;
}

.slide:nth-of-type(1) {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3729c82b1ec2bdbb641c30564c5bed1.jpg?w=2452&h=920)
    no-repeat;
  background-size: 100% 100%;
}

.slide:nth-of-type(2) {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c43505dacfc345b6a419cdf6af3f823a.jpg?thumb=1&w=1226&h=460&f=webp&q=90)
    no-repeat;
  background-size: 100% 100%;
  left: 100%;
}

.slide:nth-of-type(3) {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c162874708ca7856f972ef5eee976e3a.jpg?thumb=1&w=1226&h=460&f=webp&q=90)
    no-repeat;
  background-size: 100% 100%;
  left: 200%;
}

.slide:nth-of-type(4) {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b7df77272b132ae53d680ef2e1bd15e.jpg?thumb=1&w=1226&h=460&f=webp&q=90)
    no-repeat;
  background-size: 100% 100%;
  left: 300%;
}

input[type="radio"] {
  position: relative;
  display: none;
}

.visible {
  position: absolute;
  width: 100%;
  bottom: 20px;
  right: 30px;
  text-align: right;
}

.visible label {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: rgba(121, 122, 123, 0.7);
  border-radius: 50%;
  margin: 0 3px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid hsla(0, 0%, 100%, 0.3);
}

.slides
  input[type="radio"]:nth-of-type(1):checked
  ~ .visible
  label:nth-of-type(1) {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(84, 84, 84, 0.7);
}

.slides
  input[type="radio"]:nth-of-type(2):checked
  ~ .visible
  label:nth-of-type(2) {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(84, 84, 84, 0.7);
}

.slides
  input[type="radio"]:nth-of-type(3):checked
  ~ .visible
  label:nth-of-type(3) {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(84, 84, 84, 0.7);
}

.slides
  input[type="radio"]:nth-of-type(4):checked
  ~ .visible
  label:nth-of-type(4) {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(84, 84, 84, 0.7) 3;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .slide {
  transform: translateX(0%);
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .slide:nth-of-type(1) {
  opacity: 1;
  visibility: visible;
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .slide {
  transform: translateX(-100%);
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .slide:nth-of-type(2) {
  opacity: 1;
  visibility: visible;
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .slide {
  transform: translateX(-200%);
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .slide:nth-of-type(3) {
  opacity: 1;
  visibility: visible;
}

.slides input[type="radio"]:nth-of-type(4):checked ~ .slide {
  transform: translateX(-300%);
}

.slides input[type="radio"]:nth-of-type(4):checked ~ .slide:nth-of-type(4) {
  opacity: 1;
  visibility: visible;
}
```

<br/>

## 弹窗效果动画

> 首先，`.modal`类定义了模态框的初始状态，设置了透明度为 1，并且使用了过渡效果`transition`来使改变样式的过程平滑进行。具体来说，`transition: all 0.5s ease-in-out;`表示所有属性在 0.5 秒内以缓慢开始和结束的方式进行过渡。
>
> 接下来，`.modal-enter-active`和`.modal-leave-active`类定义了模态框进入和离开时的过渡效果。这两个类同时设置了`transform`和`opacity`属性。
>
> - `transform: scale(0);`将模态框的缩放比例设置为 0，使其在进入或离开时呈现收缩的效果。
> - `opacity: 0;`将模态框的透明度设置为 0，使其在进入或离开时呈现淡出的效果。
>
> 这样，当模态框进入时，会从无到有地显示出来，同时以缩放和淡入的动画效果展示；当模态框离开时，会以缩放和淡出的动画效果逐渐消失。
>
> 总结一下，这段代码通过设置不同的 CSS 类来控制模态框的进入和离开动画效果，使其具有平滑的过渡效果。
>
> ### **过渡的模式 mode**
>
> 如果我们**不希望同时执行进入和离开动画**，那么我们需要设置 transition 的**过渡模式**：
>
> ​ in-out: 新元素先进行过渡，完成之后当前元素过渡离开；
>
> ​ out-in: 当前元素先进行过渡，完成之后新元素过渡进入；

### 代码实现

```vue
<transition name="modal" mode="out-in">
  <!-- 弹窗内容 -->
</transition>
```

```css
.modal {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.modal-enter-active,
.modal-leave-active {
  transform: scale(0);
  opacity: 0;
}
```

<br/>

<br/>

# JS

## 自动刷弹幕脚本

> - 修改`@author`和`@match`。
> - 修改 area 和 btn 对应的输入框和发送按钮类名。
> - 添加`danmuStr`弹幕内容，一行一条。
> - 打开目标网站链接，先手动发送一条弹幕（看情况，非必要）。

### 代码实现

```js
// ==UserScript==
// @name         XX自动发弹幕脚本
// @namespace    http://tampermonkey.net/
// @version     1.0
// @description  try to take over the world!
// @author       （作者昵称）
// @match      	 （视频链接）
// @icon         data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cg id='XMLID_273_'%3E%3Cg id='XMLID_78_'%3E%3Cpath id='XMLID_83_' class='st0' d='M304.8,0H95.2C42.6,0,0,42.6,0,95.2v209.6C0,357.4,42.6,400,95.2,400h209.6 c52.6,0,95.2-42.6,95.2-95.2V95.2C400,42.6,357.4,0,304.8,0z M106.3,375C61.4,375,25,338.6,25,293.8c0-44.9,36.4-81.3,81.3-81.3 c44.9,0,81.3,36.4,81.3,81.3C187.5,338.6,151.1,375,106.3,375z M293.8,375c-44.9,0-81.3-36.4-81.3-81.3 c0-44.9,36.4-81.3,81.3-81.3c44.9,0,81.3,36.4,81.3,81.3C375,338.6,338.6,375,293.8,375z'/%3E%3C/g%3E%3Cg id='XMLID_67_' class='st2'%3E%3Cpath id='XMLID_74_' class='st3' d='M304.8,0H95.2C42.6,0,0,42.6,0,95.2v209.6C0,357.4,42.6,400,95.2,400h209.6 c52.6,0,95.2-42.6,95.2-95.2V95.2C400,42.6,357.4,0,304.8,0z M106.3,375C61.4,375,25,338.6,25,293.8c0-44.9,36.4-81.3,81.3-81.3 c44.9,0,81.3,36.4,81.3,81.3C187.5,338.6,151.1,375,106.3,375z M293.8,375c-44.9,0-81.3-36.4-81.3-81.3 c0-44.9,36.4-81.3,81.3-81.3c44.9,0,81.3,36.4,81.3,81.3C375,338.6,338.6,375,293.8,375z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  setTimeout(function () {
    const area = document.getElementsByClassName("bpx-player-dm-input")[0]; // 输入框类名
    const btn = document.getElementsByClassName("bpx-player-dm-btn-send")[0]; // 发送按钮类名
    // 弹幕数组
    const danmuStr = `
          泰裤辣
          woc，爱了爱了。
          帅帅帅
          有点怪异，但是我喜欢。
          非常惊艳！
          `;

    let danmus = danmuStr.split("\n");
    danmus.pop();
    danmus.shift();

    let interval;
    let start = function () {
      interval = setInterval(function () {
        area.value = danmus[Math.floor(Math.random() * danmus.length)];
        setTimeout(function () {
          btn.click();
        }, 5000); //等待按钮允许发送
      }, 6000); //每6秒发一次
    };
    start();

    // let stop = function () {
    // clearInterval(interval)
    // }
  }, 5000); //等待页面加载完毕
})();
```

<br/>

## 函数柯理化

> 1. 定义 `curry` 函数，接受一个函数 `fn` 作为参数。
> 2. 返回一个新的函数 `curried`，用于接收参数并执行柯里化操作。
> 3. 在 `curried` 函数内部，首先判断传入的参数个数是否与原始函数 `fn` 的参数个数相等。
> 4. 如果参数个数相等，说明已经收集到了足够的参数，直接调用原始函数 `fn` 并传入参数数组 `arr`，使用 `fn.apply(this, arr)` 执行函数，并返回结果。
> 5. 如果参数个数不相等，说明还需要继续收集参数，返回一个新的函数，该函数也被命名为 `curried`。
> 6. 在新的 `curried` 函数中，使用剩余参数语法 `...arr2` 接收下一个参数，并将其与之前收集到的参数数组 `arr` 进行拼接。
> 7. 然后，递归调用 `curried` 函数本身，传入拼接后的参数数组 `arr.concat(arr2)`，以继续收集参数。
> 8. 重复步骤 3-7，直到参数个数符合要求时，执行原始方法并返回结果

### 代码实现

```js
function curry(fn) {
  // 需要返回一个函数
  return function curried(...arr) {
    if (arr.length == fn.length) {
      // 当参数个数符合要求时，执行原始方法
      // 注意：fn.apply(this, arr) 将数组中的元素作为多个参数传递给函数。fn(arr) 将整个数组作为一个参数传递给函数。
      return fn.apply(this, arr);
    } else {
      // 当参数个数还不符合要求时，使用函数接受下一个参数，拼接参数
      return function (...arr2) {
        return curried.apply(this, arr.concat(arr2));
      };
    }
  };
}

// 原始方法
function sum(a, b, c, d) {
  return a + b + c + d;
}

// 添加需要柯理化的方法
let curriedSum = curry(sum);

console.log(curriedSum(1, 2)(3)(4));
```

<br/>

## 获取对象的类型信息

> `Object.prototype.toString.call(obj)` 和 `obj.constructor` 都可以用于获取对象的类型信息，但它们的实现方式和结果有所不同。
>
> 1. `Object.prototype.toString.call(obj)`：这种方式利用了 `Object.prototype.toString()` 方法。通过调用 `toString()` 方法，并将 `obj` 作为 `this` 上下文传递给它，可以获取到一个表示对象类型的字符串。
>
>    例如，对于一个数组对象 `var arr = [1, 2, 3]`，`Object.prototype.toString.call(arr)` 的结果是 `"[object Array]"`，表示该对象是一个数组。
>
>    这种方式可以准确地获取对象的类型信息，不受原型链的影响。
>
> 2. `obj.constructor`：这种方式利用了对象的构造函数属性。每个 JavaScript 对象都有一个 `constructor` 属性，指向创建该对象的构造函数。
>
>    例如，对于一个数组对象 `var arr = [1, 2, 3]`，`arr.constructor` 的结果是 `Array` 构造函数本身。
>
>    这种方式可以获取到对象的构造函数，但需要注意的是，如果对象自身重写了 `constructor` 属性，那么结果可能会不准确。
>
> 综上所述，`Object.prototype.toString.call(obj)` 可以更准确地获取对象的类型信息，而 `obj.constructor` 可能受到属性重写的影响。因此，在判断对象类型时，推荐使用 `Object.prototype.toString.call(obj)` 的方式。

### 通过 JS 判断⼀个数组

```js
/*
instanceof 方法
instanceof 运算符是用来测试⼀个对象是否在其原型链原型构造函数的属性
*/
var arr = [];
arr instanceof Array; // true

/*
constructor 方法
constructor 属性返回对创建此对象的数组函数的引用，就是返回对象相对应的构造
函数
*/
var arr = [];
arr.constructor == Array; //true

/*
最简单的方法
这种写法， 是 jQuery 正在使用的
*/
Object.prototype.toString.call(value) == "[object Array]";

/*
利用这个方法 ， 可以写⼀个返回数据类型的方法
*/
var isType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

/*
ES5 新增方法 isArray()
*/
var a = new Array(123);
var b = new Date();
console.log(Array.isArray(a)); //true
console.log(Array.isArray(b)); //false
```

<br/>

## 渲染万条数据

### 如何在不卡住页面的情况下渲染数据

> 这段代码是一个使用 `setTimeout` 和 `requestAnimationFrame` 进行优化的数据渲染示例。下面我会逐步解读代码的功能和实现。
>
> 1. 首先，通过 `setTimeout` 函数将代码放置在一个延迟为 0 毫秒的回调函数中执行。这样可以将代码推迟到下一个事件循环中执行，以避免阻塞主线程。
>
> 2. 在延迟回调函数中，定义了一些变量和常量：
>
>    - `total` 表示要插入的总数据条数，这里设定为 100000 条。
>    - `once` 表示每次插入的数据条数，这里设定为 20 条。
>    - `loopCount` 表示渲染数据需要进行的总次数，即 `total / once`。
>    - `countOfRender` 表示已经完成的渲染次数。
>    - `ul` 是通过 `document.querySelector("ul")` 获取到的 `<ul>` 元素。
>
> 3. 接下来定义了两个函数：
>
>    - `add()` 函数用于向 `<ul>` 元素中插入数据。在每次调用时，通过循环创建 `<li>` 元素，并设置其文本内容为随机生成的整数。然后将这些 `<li>` 元素添加到一个文档片段（`fragment`）中，最后一次性将文档片段添加到 `<ul>` 元素中。这样可以减少回流（reflow）的次数，提高性能。
>    - `loop()` 函数用于控制渲染的次数。如果 `countOfRender` 小于 `loopCount`，则通过 `window.requestAnimationFrame()` 方法调用 `add()` 函数，并在下一帧继续渲染。这样可以将渲染过程分解为多个任务，避免一次性插入大量数据导致页面卡顿。
>
> 4. 最后，在延迟回调函数中，首先调用 `loop()` 函数启动渲染过程，然后代码执行结束。
>
> 总体来说，这段代码通过将数据插入过程拆分为多个小任务，并利用 `requestAnimationFrame` 在每一帧中执行这些任务，以达到优化性能的目的。这种方式可以减少主线程的阻塞时间，提高用户体验。
>
> 进一步优化
>
> 1. 使用虚拟滚动：当列表中有大量数据时，使用虚拟滚动可以只渲染可见区域的部分数据，而不是全部渲染。这样可以显著提高性能和用户体验。
> 2. 使用 Web Worker：如果插入大量数据的操作非常耗时，可以考虑将其放在 Web Worker 中进行处理，以避免阻塞主线程。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <ul>
      控件
    </ul>
    <script>
      setTimeout(() => {
        // 插⼊十万条数据
        const total = 100000;
        // ⼀次插⼊ 20 条，如果觉得性能不好就减少
        const once = 20;
        // 渲染数据总共需要⼏次
        const loopCount = total / once;
        let countOfRender = 0;
        const ul = document.getElementsByTagName("ul")[0];

        function add() {
          // 优化性能，插入不会造成回流
          const fragment = document.createDocumentFragment();
          for (let i = 0; i < once; i++) {
            const li = document.createElement("li");
            li.innerText = Math.floor(Math.random() * total);
            fragment.appendChild(li);
          }
          ul.appendChild(fragment);
          countOfRender += 1;
          loop();
        }
        function loop() {
          if (countOfRender < loopCount) {
            window.requestAnimationFrame(add);
          }
        }
        loop();
      }, 0);
    </script>
  </body>
</html>
```

<br/>

## 实现 Storage

### 使得该对象为单例， 并对 **localStorage** 进行封装

> 使用了类的静态方法 `getInstance()` 来获取 `Storage` 的单例对象。当第一次调用 `getInstance()` 方法时，会创建一个新的 `Storage` 实例并赋值给 `instance` 变量。之后再次调用 `getInstance()` 方法时，直接返回已存在的 `instance` 对象。
>
> `Storage` 类中的 `setItem(key, value)` 方法和 `getItem(key)` 方法分别封装了 `localStorage` 的 `setItem()` 和 `getItem()` 方法，用于设置和获取存储的键值对。
>
> 通过`static getInstance()`的实现，你可以确保只有一个 `Storage` 实例存在，并且可以通过该实例来操作 `localStorage`，方便地进行数据的存储和获取。

```js
var instance = null;

class Storage {
  static getInstance() {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  }

  setItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  getItem = (key) => {
    return localStorage.getItem(key);
  };
}

// 使用示例
const storage = Storage.getInstance();
storage.setItem("name", "John");
const name = storage.getItem("name");
console.log(name); // 输出: "John"
```

<br/>

## == 和 ===区别

### [] 之间的判断

> `[] == ![]`
>
> 首先，让我们逐步解析这个表达式：
>
> 1. `![]`：`!` 是逻辑非运算符，用于取反操作。`[]` 表示一个空数组，而空数组在逻辑上被视为真值（truthy）。因此，`![]` 的结果是 `false`。
> 2. `[] == false`：根据 JavaScript 的类型转换规则，当比较一个数组和布尔值时，会将布尔值转换为数字进行比较。`false` 被转换为数字 `0`。而对于数组来说，它会被转换为空字符串 `""`。因此，这个比较变成了 `"" == 0`。
> 3. `"" == 0`：根据 JavaScript 的类型转换规则，当比较一个字符串和数字时，会尝试将字符串转换为数字。空字符串 `""` 被转换为数字 `0`。所以最终的比较结果是 `0 == 0`。
> 4. `0 == 0`：这是一个相等比较，两边的操作数都是数字类型，它们的值相等，因此返回 `true`。
>
> 所以，根据以上解析，`[] == ![]` 的结果确实是 `true`。
>
> 需要注意的是，这种类型转换和比较的方式可能会导致一些令人困惑的结果。为了避免这种混淆，建议在代码中使用严格相等比较运算符 `===`，它不会进行类型转换，只有在两个操作数类型相同且值相等时才返回 `true`。\*\*

> `[] === []`
>
> 在 JavaScript 中，对象（包括数组）的严格相等比较是基于引用的。也就是说，只有当两个操作数引用同一个对象时，才会返回 `true`。
>
> 对于 `[] === []` 这个表达式，它创建了两个不同的空数组对象，并尝试将它们进行比较。由于这两个数组对象是独立的，它们的引用地址是不同的，因此严格相等比较的结果是 `false`。
>
> 换句话说，每次使用 `[]` 语法创建一个新的空数组时，都会生成一个新的数组对象，即使它们的内容是相同的。这意味着两个独立的空数组对象是不严格相等的。
>
> 如果你想要比较两个数组是否具有相同的元素，可以使用其他方法，例如使用循环或数组方法来逐个比较数组中的元素。

<br/>

## 防抖函数

> 防抖函数可以用来限制某个函数在一段时间内被频繁调用，只有当函数停止被调用一段时间后才会执行。
>
> 这个 `debounce` 函数接受两个参数：`fn` 是需要执行的函数，`wait` 是等待的时间间隔（以毫秒为单位）。
>
> 在函数内部，定义了一个变量 `timer` 来保存定时器的引用。每次函数被调用时，会先检查 `timer` 是否存在，如果存在则清除之前的定时器。然后，创建一个新的定时器，并将其赋值给 `timer` 变量。这样做的目的是确保在等待时间内，如果函数再次被调用，就会清除之前的定时器并重新设置新的定时器。
>
> 最后，在等待时间结束后，定时器回调函数会执行传入的 `fn` 函数。
>
> 通过这种方式，我们可以使用 `debounce` 函数来包装其他函数，从而实现函数的防抖效果

### 代码实现

```js
function debounce(fn, wait) {
  let timer = null;
  return function () {
    if (timer != null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, wait);
  };
}
```

在这个 debounce 函数中，返回一个函数的目的是为了创建一个闭包（Closure）。

闭包是指函数能够访问并操作其外部作用域中的变量。在这个例子中，返回的函数可以访问和操作 `timer` 变量，即使 `debounce` 函数已经执行完毕并且退出了作用域。

通过返回一个函数，我们可以保持对 `timer` 变量的引用，并在每次返回的函数被调用时使用它。这样做的好处是，在每次函数被调用时，我们都可以检查和清除之前的定时器，并设置一个新的定时器。

如果不返回一个函数，而是直接在 `debounce` 函数内部处理定时器和函数的调用，那么每次调用 `debounce` 函数时都会创建一个新的 `timer` 变量，而无法保持之前的定时器的引用。

因此，通过返回一个函数，我们可以创建一个闭包，使得每次调用返回的函数时都能够访问和操作 `timer` 变量，从而实现 debounce 函数的功能。

**简单实现**

```js
let timer: any = null;
const antiShake = (fn, wait) => {
  // 如果定时器存在清空定时器
  if (timer) {
    clearTimeout(timer);
  }
  // 设置定时器，规定时间后time才会为null
  timer = setTimeout(() => {
    timer = null;
    fn();
  }, wait);
};
```

> 这两种方法实现的功能相同，都是防抖函数。它们的主要区别在于语法和变量作用域的处理。
>
> 第一种方法使用了函数声明的方式定义了一个 `debounce` 函数，并返回一个内部函数。这个内部函数可以访问和操作 `timer` 变量，因为它是在 `debounce` 函数内部定义的，形成了一个闭包。
>
> 而第二种方法使用了箭头函数的方式定义了一个 `antiShake` 函数，并直接在函数内部操作 `timer` 变量。由于箭头函数没有自己的作用域，它会继承外部作用域的变量。因此，在箭头函数内部可以直接访问和操作 `timer` 变量。
>
> 另外，第一种方法中的 `debounce` 函数接受两个参数 `fn` 和 `wait`，而第二种方法中的 `antiShake` 函数只接受一个参数 `fn`。如果你需要设置防抖的等待时间，可以在第二种方法中手动修改定时器的等待时间。
>
> 总体来说，这两种方法都可以实现防抖效果，选择哪种方法取决于个人偏好和代码风格。

**完整实现**

```js
// 函数防抖的实现
function debounce(fn, wait) {
  let timer = null;

  return function () {
    let context = this,
      args = arguments;

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
```

<br/>

## 节流函数

### 代码实现

```js
// 函数节流的实现;
function throttle(fn, delay) {
  let curTime = Date.now();

  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
}

// 定时器实现
function throttle(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}
```

<br/>

<br/>

# Vue

## 组件传值

### 父传子

> 父组件通过 `:message="dataFromParent"` 将 `dataFromParent` 的值传递给子组件的 `message` 属性。子组件通过 `defineProps` 定义了接收的属性，并在模板中使用 `message` 来显示父组件传递的数据。

```vue
<!-- 子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <p>父组件传递的数据：{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  message: String,
});
</script>
```

```vue
<!-- 父组件 -->
<template>
  <div>
    <h2>父组件</h2>
    <child-component :message="dataFromParent" />
  </div>
</template>

<script setup lang="ts">
import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue";

const dataFromParent = ref("Hello from Parent");
</script>
```

### 子传父 / 子传祖父

> - 孙组件通过 `emit` 方法利用`XXX`绑定数据发送给父组件。
> - 父组件通过`@XXX = "fn"`获取数据。
> - 父组件传祖父组件同理。

```vue
<!-- 子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <p>子组件的数据：{{ data }}</p>
    <button @click="sendDataToParent">传递数据给父组件</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const data = ref("Hello from Child");

const { emit } = defineEmits(["DataToParent"]);

const sendDataToParent = () => {
  emit("DataToParent", data.value);
};
</script>
```

```vue
<!-- 父组件 -->
<template>
  <div>
    <h2>父组件</h2>
    <p>父组件的数据：{{ data }}</p>
    <ChildComponent @DataToParent="getSonData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const { emit } = defineEmits(["sendDataToGrandparent"]);

const getSonData = (value: string) => {
  emit("DataToGrandparent", value);
};
</script>
```

```vue
<!-- 祖父组件 -->
<template>
  <div>
    <h2>祖父组件</h2>
    <p>祖父组件的数据：{{ data }}</p>
    <ParentComponent @DataToGrandparent="getSonData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ParentComponent from "./ParentComponent.vue";

const data = ref("");

const getSonData = (value: string) => {
  data.value = value;
};
</script>
```

### eventBus 总线的使用

EventBus（事件总线）是一种在 Vue 中实现组件间通信的机制。它允许不同组件之间进行解耦的通信，可以在任何组件中触发事件，并在其他组件中监听和处理这些事件。

以下是使用 EventBus 的基本步骤：

1. 创建 EventBus 实例：在 Vue 应用的某个地方创建一个 EventBus 实例，可以是一个单独的文件或者在 Vue 实例中创建。

```javascript
// EventBus.js
import Vue from "vue";
export const EventBus = new Vue();
```

2. 在发送事件的组件中触发事件：通过 EventBus 实例的`$emit`方法来触发事件，并传递需要传递的数据。

```javascript
// ComponentA.vue
import { EventBus } from "./EventBus";

export default {
  methods: {
    handleClick() {
      EventBus.$emit("custom-event", data);
    },
  },
};
```

3. 在接收事件的组件中监听事件：通过 EventBus 实例的`$on`方法来监听事件，并在回调函数中处理事件。

```javascript
// ComponentB.vue
import { EventBus } from "./EventBus";

export default {
  created() {
    EventBus.$on("custom-event", this.handleCustomEvent);
  },
  methods: {
    handleCustomEvent(data) {
      // 处理事件
    },
  },
};
```

需要注意的是，在组件销毁时，应该通过 EventBus 实例的`$off`方法来取消对事件的监听，以避免内存泄漏。

```javascript
// ComponentB.vue
import { EventBus } from "./EventBus";

export default {
  created() {
    EventBus.$on("custom-event", this.handleCustomEvent);
  },
  destroyed() {
    EventBus.$off("custom-event", this.handleCustomEvent);
  },
  methods: {
    handleCustomEvent(data) {
      // 处理事件
    },
  },
};
```

通过以上步骤，就可以在不同的组件中实现使用 EventBus 进行通信。当某个组件触发了事件时，其他监听该事件的组件会收到通知，并执行相应的处理逻辑。

需要注意的是，EventBus 并不是官方提供的 Vue 特性，而是一种常见的模式。在使用 EventBus 时，要确保命名事件的唯一性，以避免事件冲突。另外，滥用 EventBus 可能导致代码的可读性和维护性下降，因此在设计组件间通信时，应根据具体情况选择合适的通信方式。

> 在`main.js`中使用`Vue.prototype.$bus = new Bus()`可以实现全局的事件总线，使得在任何组件中都可以通过`this.$bus`来访问事件总线。

以下是具体的步骤：

1. 创建一个 Bus 实例，用于作为事件总线。

```javascript
// Bus.js

import Vue from "vue";

const bus = new Vue();

export default bus;
```

2. 在`main.js`中将 Bus 实例挂载到 Vue 原型上。

```javascript
// main.js

import Vue from "vue";
import App from "./App.vue";
import bus from "./Bus";

Vue.prototype.$bus = bus;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

3. 在任何组件中都可以通过`this.$bus`来访问事件总线，并使用`$on`、`$emit`等方法进行事件的监听和触发。

```javascript
// ComponentA.vue

export default {
  created() {
    this.$bus.$on("custom-event", this.handleCustomEvent);
  },
  methods: {
    handleCustomEvent(data) {
      // 处理事件
    },
  },
};
```

```javascript
// ComponentB.vue

export default {
  methods: {
    handleClick() {
      this.$bus.$emit("custom-event", data);
    },
  },
};
```

通过以上步骤，就可以在任何组件中使用`this.$bus`来访问事件总线，实现组件间的通信。需要注意的是，在组件销毁时，应该通过`$off`方法来取消对事件的监听，以避免内存泄漏。

```javascript
// ComponentA.vue

export default {
  created() {
    this.$bus.$on("custom-event", this.handleCustomEvent);
  },
  destroyed() {
    this.$bus.$off("custom-event", this.handleCustomEvent);
  },
  methods: {
    handleCustomEvent(data) {
      // 处理事件
    },
  },
};
```

使用`Vue.prototype.$bus = new Bus()`可以方便地在全局范围内使用事件总线，但也需要注意避免滥用，以免导致代码的可读性和维护性下降。在设计组件间通信时，应根据具体情况选择合适的通信方式。

> ```js
> import Vue from "vue";
> import App from "./App.vue";
> import bus from "./Bus";
>
> Vue.prototype.$bus = new Vue();
>
> new Vue({
>   render: (h) => h(App),
> }).$mount("#app");
> ```
>
> 可以直接将`Vue.prototype.$bus`设置为一个新的 Vue 实例。这样做的优点是简单直接，可以在任何组件中通过`this.$bus`访问事件总线。
>
> 然而，这种方法也存在一些缺点：
>
> 1. 内存管理：每次创建一个新的 Vue 实例作为事件总线，会占用额外的内存资源。如果应用中使用了大量的事件总线，可能会导致内存占用过高。
>
> 2. 全局污染：将事件总线挂载到 Vue 原型上，会使得该事件总线在整个应用中都可见和可访问。这可能导致命名冲突或意外的覆盖，特别是在多人开发或复杂的项目中。
>
> 3. 可维护性：使用全局事件总线可能会导致代码的可读性和维护性下降。由于事件总线可以在任何地方被访问和修改，很难追踪和理解组件之间的通信逻辑。
>
> 因此，在使用全局事件总线时，需要谨慎考虑其使用场景和潜在的问题。如果应用中只有少量的组件需要进行通信，可以考虑使用更具体的通信方式，如 props、$emit和$on 等。如果确实需要全局事件总线，可以选择使用第三方库如`vue-bus`来管理事件总线，以提供更好的可维护性和灵活性。

### slot 插槽传值

非常抱歉，我之前的回答有误。在父组件向子组件传递数据时，并不需要使用作用域插槽。实际上，通过普通插槽就可以实现父组件向子组件传递数据。

以下是一个示例，演示了如何使用普通插槽实现父组件向子组件传递数据：

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent>
      <template v-slot:default="slotProps">
        <p>{{ slotProps.parentData }}</p>
      </template>
    </ChildComponent>
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
  };
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>
    <slot :parentData="parentData"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        parentData: "Hello from parent",
      };
    },
  };
</script>
```

在上面的例子中，父组件`ParentComponent`使用了子组件`ChildComponent`，并在子组件的插槽上使用了普通插槽`v-slot:default="slotProps"`来接收父组件传递的数据。子组件通过`:parentData="parentData"`将自己的数据`parentData`传递给插槽。

在父组件中，可以在插槽内部使用`slotProps.parentData`来访问子组件传递的数据，并进行渲染和处理。

通过使用普通插槽，父组件可以向子组件传递数据，并在子组件中进行处理。对于只实现父传子的情况，不需要使用作用域插槽。

<br/>

## 创建并遍历 Proxy 封装的对象

> - 创建了一个使用 Proxy 封装的对象 `obj`，并定义了 `get` 和 `set` 的拦截器函数。
> - 在拦截器函数中，我们使用 `Reflect.get()` 和 `Reflect.set()` 来实际获取和设置对象的属性。
> - 使用 `Object.entries(obj)` 将 `obj` 转换为键值对数组，然后使用 `forEach` 方法进行遍历。

### 代码实现

```js
const obj = new Proxy(
  {
    name: "Alice",
    age: 25,
    gender: "female",
  },
  {
    get(target, key) {
      console.log(`Getting ${key}`);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      console.log(`Setting ${key} to ${value}`);
      return Reflect.set(target, key, value);
    },
  }
);

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
```

<br/>

## 动态样式/类的改变

> 1. 使用 `:style` 指令来绑定行内样式，通过调用 `getColor` 方法来根据 `item` 的值返回对应的颜色。
> 2. 使用计算属性 `color` 来根据 `item` 的值返回对应的颜色。
> 3. 使用 `:style`指令来绑定行内样式，并使用了三元表达式来根据 `item` 的值返回对应的颜色。
> 4. 定义一个计算属性 `colorClass`，根据 `item` 的值返回对应的类名。
> 5. 使用`:class` 指令来根据 `item` 的值动态绑定类名。

### 代码实现

```vue
<!-- 第一种 -->
<template>
  <div :style="{ color: getColor(item) }">Hello World</div>
</template>

<script setup>
import { ref } from "vue";

const item = ref("正常");

// 根据 item 的值返回对应的颜色

const getColor = (item) => {
  if (item === "正常") {
    return "green";
  } else if (item === "未知") {
    return "blue";
  } else if (item === "异常") {
    return "red";
  }
};
</script>
```

```vue
<!-- 第二种 -->
<template>
  <div :style="{ color: color }">Hello World</div>
</template>

<script setup>
import { ref, computed } from "vue";

const item = ref("正常");

// 使用计算属性根据 item 的值返回对应的颜色

const color = computed(() => {
  if (item.value === "正常") {
    return "green";
  } else if (item.value === "未知") {
    return "blue";
  } else if (item.value === "异常") {
    return "red";
  }
});
</script>
```

```vue
<!-- 第三种 -->
<template>
  <div
    :style="{
      color: item === '正常' ? 'green' : item === '未知' ? 'blue' : 'red',
    }"
  >
    Hello World
  </div>
</template>

<script setup>
import { ref } from "vue";

const item = ref("正常");
</script>
```

```vue
<!-- 第四种 -->
<template>
  <div :class="colorClass">Hello World</div>
</template>

<script setup>
import { ref, computed } from "vue";

const item = ref("正常");

// 使用计算属性根据 item 的值返回对应的类名

const colorClass = computed(() => {
  if (item.value === "正常") {
    return "normal";
  } else if (item.value === "未知") {
    return "dontKonw";
  } else {
    return "abnormal";
  }
});
</script>

<style>
.normal {
  color: green;
}

.dontKonw {
  color: blue;
}

.abnormal {
  color: red;
}
</style>
```

```vue
<!-- 第五种 -->
<template>
  <div
    :class="{
      normal: item === '正常',
      dontKonw: item === '未知',
      abnormal: item === '偷懒',
    }"
  >
    Hello World
  </div>
</template>

<script setup>
import { ref } from "vue";

const item = ref("正常");
</script>

<style>
.normal {
  color: green;
}

.dontKonw {
  color: blue;
}

.abnormal {
  color: red;
}
</style>
```

<br/>

## 利用 meta 实现面包屑导航

> 利用 meta 标签实现面包屑导航相对于普通导航有以下优点：
>
> 1. SEO 友好：搜索引擎可以通过解析 meta 标签中的面包屑信息，更好地理解网页结构和内容，提高网页在搜索结果中的排名。
>
> 2. 用户体验：面包屑导航可以帮助用户快速了解当前页面的位置和层级关系，方便用户进行导航和返回上一级页面。
>
> 3. 网站结构清晰：通过使用 meta 标签来定义面包屑导航，可以使网站的结构更加清晰，易于维护和扩展。
>
> 与普通导航相比，利用 meta 标签实现面包屑导航的区别在于：
>
> 1. 实现方式：普通导航通常是通过 HTML 元素（如 ul、li）和 CSS 样式来构建的，而利用 meta 标签实现面包屑导航是通过在页面头部添加 meta 标签来定义面包屑导航的层级关系。
>
> 2. 可访问性：利用 meta 标签实现的面包屑导航对于搜索引擎和屏幕阅读器等工具更加友好，能够提供更好的可访问性。
>
> 3. 动态性：利用 meta 标签实现的面包屑导航可以根据页面的层级关系动态生成，而普通导航需要手动编写和维护。
>
> 总之，利用 meta 标签实现面包屑导航可以提供更好的 SEO 效果和用户体验，并且能够使网站结构更加清晰。但需要注意的是，使用 meta 标签实现面包屑导航需要在后端进行相应的处理和生成，对于静态网页或无法修改后端代码的情况可能不适用。

```vue
<!-- BaseBreadcrumb.vue中的代码 -->
<template>
  <div class="comp-breadcrumb">
    当前位置:
    <router-link v-for="item in breadcrumb" :key="item.name" :to="item.path">{{
      item.name
    }}</router-link>
  </div>
</template>
<script>
export default {
  name: "BaseBreadcrumb",
  data() {
    return {};
  },
  computed: {
    breadcrumb() {
      return this.$route.meta.breadcrumb;
    },
  },
};
</script>
```

```vue
<!-- app.vue中的代码 -->
<BaseBreadcrumb v-if="$route.meta.breadcrumb" />
```

```js
//router属性 routes对应route 内
meta: {
  title: '用户签名',
    breadcrumb: [
      {
        name: '主页',
        path: '/'
      },
      {
        name: '用户',
        path: '/user
      }
    ]
}
```

<br/>

## vueRouter 实现返回上次页面浏览位置

要利用 Vue Router 的`scrollBehavior`来实现返回上次页面时回到上次页面浏览的位置，您可以按照以下步骤进行操作：

1. 在 Vue Router 的路由配置中，添加一个名为`scrollBehavior`的属性，并将其值设置为一个函数。该函数接收三个参数：`to`、`from`和`savedPosition`。

2. 在`scrollBehavior`函数中，判断`savedPosition`是否存在。如果存在，则表示用户点击了前进/后退按钮返回到当前页面，可以使用`window.scrollTo()`方法将滚动位置还原到之前保存的位置。

3. 如果`savedPosition`不存在，则表示用户是通过其他方式（如导航菜单）进入当前页面，此时可以根据需要自定义滚动行为，例如将滚动位置重置为页面顶部。

下面是一个示例代码：

```javascript
const router = new VueRouter({
  routes: [...], // 路由配置

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 用户点击了前进/后退按钮返回到当前页面
      return savedPosition;
    } else {
      // 其他情况，例如通过导航菜单进入当前页面
      return { x: 0, y: 0 }; // 将滚动位置重置为页面顶部
    }
  }
});

/*
* 异步调用
scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ x: 0, y: 0 })
            }, 500)
        })
    }
*/
```

在上述示例中，我们定义了一个名为`scrollBehavior`的函数，并根据`savedPosition`的存在与否来确定滚动行为。如果`savedPosition`存在，表示用户点击了前进/后退按钮返回到当前页面，则将滚动位置还原到之前保存的位置。如果`savedPosition`不存在，表示用户通过其他方式进入当前页面，则将滚动位置重置为页面顶部。

<br/>

## 实现 Echart 图表尺寸自适应

### 字体、间距等尺寸自适应

> - echarts 的字体大小只支持具体数值（像素），不能用百分比或者 vw 等尺寸，一般字体不会去做自适应，如果需要的话，这里可以对字体写一个自适应的处理函数
> - 默认情况下，这里以你的设计稿是 1920\*1080 为例，即网页宽度是 1920px (做之前一定问清楚 UI 设计稿的尺寸）
> - 我把这个函数写在一个单独的工具文件`dataUtil.js`里面，在需要的时候调用
> - 其原理是计算出当前屏幕宽度和默认设计宽度的比值，将原始的尺寸乘以该值
> - 另外，其它 echarts 的配置项，比如间距、定位、边距也可以用该函数
>
> 作者：清风夜半
> 链接：https://juejin.cn/post/7009081081760579591
> 来源：稀土掘金
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

**dataUtil.js**

```js
/* Echarts图表字体、间距自适应 */
export const fitChartSize = (size, defalteWidth = 1920) => {
  let clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return size;
  let scale = clientWidth / defalteWidth;
  return Number((size * scale).toFixed(3));
};
```

**函数挂载到原型上**

```js
import { fitChartSize } from "@src/utils/dataUtil.js";
Vue.prototype.fitChartFont = fitChartSize;
```

**具体使用样例**

```ts
Option: {
        color: ["#fe883a", "#2d90d1", "#f75981", "#90e2a9"],
            grid: {
                top: this.fitChartSize(30),
                right: this.fitChartSize(10),
                left: this.fitChartSize(20),
                bottom: this.fitChartSize(20) //间距自适应
            },
            textStyle: {
                color: "green",
                fontSize: this.fitChartSize(10) //字体自适应
            },
      },
```

<br/>

## 原生封装：下拉选择器联动 echart 动态图表

![image-20230712143711754](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211612332.png)

### stores.ts

```ts
import { defineStore } from "pinia";

export const usePageStore = defineStore({
  id: "Page",
  state: () => ({
    Chart1Data: [
      {
        //设备指标
        name: "设备完好率",
        value: 96,
        sum: 100,
      },
      {
        name: "设备运行率",
        value: 98,
        sum: 100,
      },
      {
        name: "设备故障率",
        value: 2,
        sum: 100,
      },
    ] as any,
  }),
  actions: {
    setChart1Data(Chart1Data: any) {
      this.$patch({
        Chart1Data,
      });
    },
  },
});
```

<br/>

### index.ts

```vue
<template>
  <div class="container">
    <select class="custom-select" v-model="selectedOption1">
      <option
        v-for="option in optionsyear"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <select class="custom-select" v-model="selectedOption2">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <select class="custom-select" v-model="selectedOption3">
      <option
        v-for="option in optionsMonth"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <select class="custom-select" v-model="selectedOption4">
      <option
        v-for="option in optionsDay"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <button class="search" @click="search">查询</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { usePageStore } from "@/stores.ts";
const props: any = defineProps({
  setDataFn: {
    type: Object,
    require: true,
  },
  chartName: {
    type: String,
    default: "",
  },
});
const pageStore = usePageStore();

const selectedOption1 = ref("年度");
const selectedOption2 = ref("2023");
const selectedOption3 = ref("1月");
const selectedOption4 = ref("1日");

const options = [
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
];
const optionsyear = [
  { label: "年度", value: "年度" },
  { label: "月度", value: "月度" },
];

const optionsMonth = [
  { label: "1月", value: "1月" },
  { label: "2月", value: "2月" },
  { label: "3月", value: "3月" },
  { label: "4月", value: "4月" },
  { label: "5月", value: "5月" },
  { label: "6月", value: "6月" },
  { label: "7月", value: "7月" },
  { label: "8月", value: "8月" },
  { label: "9月", value: "9月" },
  { label: "10月", value: "10月" },
  { label: "11月", value: "11月" },
  { label: "12月", value: "12月" },
];

const oldDate = ref({
  year: "2023",
  Jidu: "年度",
  month: "1月",
  day: "1日",
});

const search = () => {
  if (
    !(
      oldDate.value.Jidu === selectedOption1.value &&
      oldDate.value.year === selectedOption2.value &&
      oldDate.value.month === selectedOption3.value &&
      oldDate.value.day === selectedOption4.value
    )
  ) {
    changeChartData();
  }
  oldDate.value.Jidu = selectedOption1.value;
  oldDate.value.year = selectedOption2.value;
  oldDate.value.month = selectedOption3.value;
  oldDate.value.day = selectedOption4.value;
};

const changeChartData = () => {
  if (props.chartName === "Chart1") {
    pageStore.setSbzbData(props.setDataFn[Math.floor(Math.random() * 98)]);
  }
};

let optionsDay: any = [];
for (let i = 1; i <= 31; i++) {
  const label = `${i}日`;
  const value = `${i}日`;
  optionsDay.push({ label, value });
}

function mGetDate(year: any, month: any) {
  var d = new Date(year, month, 0);
  return d.getDate();
}

let tempMonth: any = ref("");
watch(
  () => selectedOption3.value,
  (newValue, oldValue) => {
    if (newValue === "") {
      tempMonth.value = "1月";
    } else {
      tempMonth.value = selectedOption3.value;
    }
    const month = parseInt(tempMonth.value.split("月")[0]);
    const num = mGetDate(selectedOption2.value, month);
    optionsDay = [];
    for (let i = 1; i <= num; i++) {
      const label = `${i}日`;
      const value = `${i}日`;
      optionsDay.push({ label, value });
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
option {
  background: #205188;
}

.container {
  display: flex;
  align-items: center;
}

.custom-select {
  width: 80px;
  /* 调整下拉框的宽度 */
  margin-right: 10px;
  background-color: #1464c09f;
  /* 设置下拉框背景色为蓝色 */
  color: #fff;
  /* 设置下拉框文字颜色为白色 */
  border: 1px solid #1ae6ca;
  border-radius: 5px;
}

.search {
  background-color: #205188;
  border: 1px solid #1ae6ca;
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 8px;
}
</style>
```

<br/>

### option.ts

```ts
import * as echarts from "echarts";
import { usePageStore } from "@/stores/index.ts";
import { computed } from "vue";
const pageStore = usePageStore();

export const Option = () => {
  let data = computed(() => pageStore.Chart1Data);

  let arrName = getArrayValue(data.value, "name");
  let arrValue = getArrayValue(data.value, "value");
  let sumValue = eval(arrValue.join("+"));
  let objData = array2obj(data.value, "name");
  let optionData = getData(data.value);

  function getArrayValue(array: any, key: any) {
    var key = key || "value";
    var res: any = [];
    if (array) {
      array.forEach(function (t: any) {
        res.push(t[key]);
      });
    }
    return res;
  }

  function array2obj(array: any, key: any) {
    var resObj: any = {};
    for (var i = 0; i < array.length; i++) {
      resObj[array[i][key]] = array[i];
    }
    return resObj;
  }

  function getData(data: any) {
    var res: any = {
      series: [],
      yAxis: [],
    };
    for (let i = 0; i < data.length; i++) {
      res.series.push({
        name: "",
        type: "pie",
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + "%", 68 - i * 15 + "%"],
        center: ["44%", "55%"],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 5,
        },
        data: [
          {
            value: data[i].value,
            name: data[i].name,
          },
          {
            value: sumValue - data[i].value,
            name: "",
            itemStyle: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
        ],
      });
      res.series.push({
        name: "",
        type: "pie",
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + "%", 68 - i * 15 + "%"],
        center: ["44%", "55%"],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 5,
        },
        data: [
          {
            value: 7.5,
            itemStyle: {
              color: "rgb(3, 31, 62)",
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
          {
            value: 2.5,
            name: "",
            itemStyle: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
        ],
      });
      res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + "%");
    }
    return res;
  }

  return {
    // backgroundColor: '#000',
    title: {
      text: "",
    },

    grid: {
      left: "10%",
      right: "10%",
      top: "25%",
      bottom: "20%",
      // containLabel: true,
    },
    legend: {
      show: true,
      icon: "circle",
      // top: "center",
      top: "10%",
      bottom: "63%",
      left: "44%",
      data: arrName,
      width: 40,
      padding: [0, 36],
      itemGap: 25,
      formatter: function (name: any) {
        return (
          "{title|" + name + "} {value|" + objData[name].value + "}  {title|%}"
        );
      },

      textStyle: {
        rich: {
          title: {
            fontSize: 20,
            lineHeight: 30,
            color: "rgb(0, 178, 246)",
          },
          value: {
            fontSize: 18,
            lineHeight: 20,
            color: "#fff",
          },
        },
      },
    },
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{a}<br>{b}:{c}({d}%)",
    },
    color: [
      "rgb(9,187,247)",
      "rgb(184,254,165)",
      "rgb(253,218,23)",
      "rgb(252,152,12)",
    ],
    xAxis: [
      {
        show: false,
      },
    ],
    series: optionData.series,
  };
};
```

<br/>

## 弹窗 Pinia 数据的响应式读写

![image-20230719115838670](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211611386.png)

> 1. `const Info = computed(() => dialogStore.DialogInfo)`：通过使用 `computed` 函数将 `dialogStore.DialogInfo` 包装成一个计算属性，返回的 `Info` 是一个响应式对象。当 `dialogStore.DialogInfo` 发生变化时，`Info` 也会自动更新。
>
> 2. `const Info = dialogStore.DialogInfo`：直接将 `dialogStore.DialogInfo` 赋值给 `Info` 变量。在 Vue 3 中，通过 `defineStore` 创建的 Pinia 状态库是具备响应式能力的，因此 `dialogStore.DialogInfo` 是一个响应式对象。当 `dialogStore.DialogInfo` 的属性发生变化时，`Info` 也会相应地更新。
>
> 3. `const Info = computed(() => dialogStore.$state.DialogInfo)`：通过使用 `computed` 函数，将 `dialogStore.$state.DialogInfo` 包装成一个计算属性。这种方式直接访问了状态库的 `$state` 属性，获取到的是状态对象 `DialogInfo` 的副本。当 `dialogStore.$state.DialogInfo` 发生变化时，计算属性 `Info` 会自动更新。
>
>    **获取到状态对象的副本和直接获取原始的状态对象有一些区别。**
>
>    1. 获取状态对象的副本：
>       - 优点：通过获取状态对象的副本，可以确保在计算属性中使用的状态对象是不可变的。这样可以避免直接修改状态对象导致的意外副作用。
>       - 缺点：每次访问计算属性时都会返回一个新的副本，可能会带来一定的性能开销。
>    2. 直接获取原始的状态对象：
>       - 优点：直接获取原始的状态对象可以更直接地访问和修改状态对象的属性，无需额外的副本创建和维护。
>       - 缺点：直接修改状态对象可能会导致意外的副作用，因为它是可变的。需要谨慎处理，避免直接修改状态对象引发的问题。
>
>    选择哪种方式取决于具体的需求和场景。如果你需要对状态对象进行修改，并且希望避免意外的副作用，那么获取状态对象的副本是一个较好的选择。如果你对状态对象的修改比较简单，并且希望直接访问原始的状态对象，那么直接获取原始的状态对象可能更合适。
>
>    需要注意的是，在 Vue 3 中，无论是获取状态对象的副本还是直接获取原始的状态对象，都会触发响应式更新，因此相关的计算属性或组件会在状态对象发生变化时进行更新。

<br/>

### **dialog.ts**

```ts
import { defineStore } from "pinia";

export const useDialogStore = defineStore({
  id: "Dialog",
  state: () => ({
    DialogInfo: {
      value1: "默认内容1",
      value2: "默认内容2",
      value3: "默认内容3",
      value4: "默认内容4",
      value5: "默认内容5",
    } as any,
  }),
});
```

<br/>

### **index.vue**

```ts
//第一种
import { useDialogStore } from "@/stores/dialog";
const dialogStore = useDialogStore();
const Info = dialogStore.DialogInfo;

//第二种
import { useDialogStore } from "@/stores/dialog";

const dialogStore = useDialogStore();
const Info = computed(() => dialogStore.DialogInfo);
```

<br/>

## 可拖动置顶弹窗效果实现

![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211622149.jpeg)

> 自定义指令 `drag`，用于实现元素的拖拽功能。
>
> 1. 首先，通过 `createApp(App).directive('drag', {...})` 注册了一个名为 `drag` 的自定义指令。
> 2. 在 `mounted` 钩子函数中，获取了指令的参数 `binding.value` 中的 `container` 和 `selector`。
> 3. 根据 `container` 的值，选择要移动的容器元素。如果 `container` 存在且能够在文档中找到对应的元素，则使用该元素作为移动容器；否则，默认使用 `document.body` 作为移动容器。
> 4. 根据 `selector` 的值，选择要拖拽的元素。如果 `selector` 存在且能够在当前元素的子元素中找到对应的元素，则使用该元素作为拖拽元素；否则，默认使用当前元素本身作为拖拽元素。
> 5. 监听拖拽元素的 `mousedown` 事件，当鼠标按下时触发拖拽操作。
> 6. 在拖拽操作中，首先取消元素的过渡动画效果，通过设置 `el.style.transition = 'none'` 实现。
> 7. 计算鼠标按下位置与拖拽元素左上角的偏移量。
> 8. 在鼠标移动事件中，根据鼠标的位置计算出拖拽元素的新的左边距和上边距，并限制其在移动容器内部移动。
> 9. 在鼠标松开事件中，获取最终的拖拽元素的位置，并清除鼠标移动事件的监听。然后，使-用 `useDialogStore().setXY([left, top])` 将拖拽元素的位置信息存储到弹窗状态管理中（这里使用了 `useDialogStore()`）。
> 10. 最后，恢复元素的过渡动画效果，通过设置 `el.style.transition = 'all 0.3s'` 实现。
>
> 总结：这段代码实现了一个简单的拖拽功能，通过自定义指令 `drag`，可以将指定的元素作为拖拽元素，并在指定的容器内进行拖拽操作。拖拽时会取消过渡动画，限制拖拽范围，并在拖拽结束后恢复过渡动画效果。通过优化和简化代码，使其更加简洁和易于理解。

<br/>

### util.ts

```ts
/**
 * 获取下一个z-index值
 *
 */
const nextZIndex = function () {
  return PopupManager.nextZIndex();
};

export { nextZIndex };
```

<br/>

### main.ts

```ts
import { createApp } from "vue";
import App from "@/App.vue";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

// 全局组件
import Icon from "@/components/Icon/index.vue";
import LeaseTitle from "@/components/Lease_title/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import Box from "@/components/Box/index.vue";

import "echarts-liquidfill";
import { nextZIndex } from "@/utils/index";
import { useDialogStore } from "@/stores/dialog";

createApp(App)
  .use(ElementPlus)
  .directive("drag", {
    mounted(el, binding) {
      // 获取指令的参数binding中的container和selector
      const { container, selector } = binding.value || {};
      /**
       * 选择要移动的容器元素moveContainer。
       * 如果 container 存在且能够在文档中找到对应的元素，则使用该元素作为移动容器；否则，默认使用 document.body 作为移动容器。
       * 选择要拖拽的元素dragElement。
       * 如果 selector 存在且能够在当前元素的子元素中找到对应的元素，则使用该元素作为拖拽元素；否则，默认使用当前元素本身作为拖拽元素。
       */
      const moveContainer = container
        ? document.querySelector(container)
        : document.body;
      const dragElement = selector ? el.querySelector(selector) : el;

      let disX: any, disY: any;

      // 开始拖动
      dragElement.addEventListener("mousedown", handleMouseDown);

      // 按下鼠标
      function handleMouseDown(e: any) {
        el.style.transition = "none"; //清除过渡动画

        // 鼠标点击点在容器内部位置 = 鼠标点击点（相对页面）- 容器左上角顶点位置（相对页面）
        disX = e.clientX - el.offsetLeft;
        disY = e.clientY - el.offsetTop;

        el.style.zIndex = nextZIndex(); //获取下一个z-index值实现置顶效果

        // 添加鼠标监听事件
        moveContainer.addEventListener("mousemove", handleMouseMove);
        moveContainer.addEventListener("mouseup", handleMouseUp);
      }

      // 拖动鼠标
      function handleMouseMove(e: any) {
        // 容器相对屏幕的位置 = 鼠标点击点（相对页面） - 鼠标点击点在容器内部位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        const mw = moveContainer.offsetWidth;
        const mh = moveContainer.offsetHeight;
        const ew = el.offsetWidth;
        const eh = el.offsetHeight;

        left = Math.max(0, Math.min(left, mw - ew));
        top = Math.max(0, Math.min(top, mh - eh));

        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
      }

      // 松开鼠标
      function handleMouseUp(e: any) {
        // 还原拖拽容器相对屏幕的位置 = 鼠标点击点（相对页面） - 鼠标点击点在容器内部位置
        const left = e.clientX - disX;
        const top = e.clientY - disY;

        // 移除鼠标监听事件
        moveContainer.removeEventListener("mousemove", handleMouseMove);
        moveContainer.removeEventListener("mouseup", handleMouseUp);

        // 记录拖拽容器当前位置
        useDialogStore().setXY([left, top]);
        el.style.transition = "all 0.3s"; //恢复过渡动画
      }
    },
  })
  .mount("#app");
```

<br/>

### index.vue

```vue
<template>
  <transition name="el-zoom-in-center">
    <div v-drag class="preViewBox"></div>
  </transition>
</template>
```

<br/>

## 可交互式滚动列表组件

![image-20230726183744540](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211611710.png)

### infoList.vue

```vue
<template>
  <div class="list">
    <div class="box">
      <div class="table-box">
        <div class="table-head">
          <div class="head-item" v-for="(item, index) in keys" :key="index">
            {{ item }}
          </div>
        </div>
        <div class="table-body">
          <div class="table-body-warp">
            <div
              class="row"
              style="color: #ffffffdd"
              v-for="(item, index) in content"
              :key="index"
              @mouseenter="antiShake(() => fn(index))"
              @click="handleClick(index)"
            >
              <div class="col" v-for="(v, i) in keys" :key="i">
                <span
                  :style="{
                  'color': (i === (keys.length - 1) && (item[v as keyof typeof item]) as any === '生病') ? 'red' : 'white'
                }"
                  >{{ item[v as keyof typeof item] }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, watchEffect } from "vue";
import { startMarquee, antiShake } from "@/utils";

const { content } = defineProps({
  content: {
    type: Array as () => Object[],
    require: true,
  },
});

let keys: Array<String> = [];
watchEffect(() => {
  if (content && content.length > 0) {
    keys = Object.keys(content[0]);
  }
});

function fn(i: Number) {
  console.log("移入", i);
}

onMounted(() => {
  nextTick(() => {
    startMarquee("table-body-warp", "row");
  });
});

const handleClick = (i: any) => {
  console.log("点击", i);
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 7%;
  left: 54%;
  background-color: transparent;
  z-index: 99;
  cursor: pointer;

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background: url("../../assets/images/基础/bg.png") no-repeat;
    background-size: 100% 100%;

    .table-box {
      width: 100%;
      @include wHeight(220);
      display: flex;
      flex-direction: column;
      @include FontSize(14);
      // color: v-bind(color);
      box-sizing: border-box;
      @include Padding(0, 11, 0, 0);
      @include MarginBottom(10);
      @include MarginTop(10);
      @include MarginLeft(10);

      .table-head {
        @include wHeight(32);
        display: flex;
        background: linear-gradient(
          rgba(178, 160, 82, 0.8),
          rgba(178, 148, 82, 0.3),
          rgba(178, 160, 82, 0.8)
        );
        @include LineHeight(32);

        .head-item {
          //flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          @include FontSize(12);

          &:first-child {
            @include Width(100);
          }

          &:nth-child(2) {
            @include Width(120);
          }

          &:nth-child(3) {
            @include Width(60);
          }

          &:nth-child(4) {
            @include Width(120);
          }

          &:nth-child(5) {
            @include Width(100);
          }
        }
      }

      .table-body {
        flex: 1;
        overflow-y: auto;
        @include FontSize(12);

        .row {
          display: flex;
          width: 100%;
          @include Padding(6.5, 0, 6.5, 0);
          box-sizing: border-box;

          .col {
            //flex: 1;
            text-align: center;
            @include FontSize(10);

            &:first-child {
              @include Width(100);
            }

            &:nth-child(2) {
              @include Width(120);
            }

            &:nth-child(3) {
              @include Width(60);
            }

            &:nth-child(4) {
              @include Width(120);
            }

            &:nth-child(5) {
              @include Width(100);
            }
          }

          &:nth-child(even) {
            background: rgba(89, 84, 37, 0.6);
          }
        }

        .row:hover {
          background-color: rgba(178, 160, 82, 0.8);
        }
      }
    }

    img {
      width: 80px;
      height: 50px;
    }

    .context {
      flex: 1;
      padding: 0 20px;
      color: #fff;
      font-family: "Tencent";

      .name {
        font-size: 18px;
      }

      .date {
        border-top: 1px solid #cfcd46;
        padding-top: 2px;
        margin-top: 6px;
        font-size: 14px;
        color: #ccc;
      }
    }
  }
}
</style>
```

<br/>

### utils.ts

```ts
const startMarquee = (
  marqueeObj: string | HTMLElement,
  lh: number | string,
  speed = 20,
  delay = 1000
) => {
  //lh---每行列表的高度，speed---滚动的速度，delay---间隔多久滚动一次,marqueeObj---需要实现这个效果的id
  let p = false;
  let t: any;
  let o: HTMLElement;
  if (typeof marqueeObj === "string") {
    o = document.getElementsByClassName(marqueeObj)[0] as HTMLElement;
  } else {
    return new Error("所给参数不正确");
  }

  if (o) {
    // o.innerHTML += o.innerHTML
    o.style.marginTop = (0).toString();
    o.onmouseover = function () {
      p = true;
    }; //鼠标移入，停止滚动
    o.onmouseout = function () {
      p = false;
    }; //鼠标移出，继续滚动
    if (typeof lh === "string") {
      const child = o.querySelector(lh);
      lh = child?.clientHeight || 40;
    }
  }

  function start() {
    if (typeof t === "number") clearInterval(t);

    t = setInterval(scrolling, speed); //定时器，自动滚动
    if (!p) o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
  }

  function scrolling() {
    if (parseInt(o.style.marginTop) % Number(lh) != 0) {
      o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
      if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2)
        o.style.marginTop = 0 + "";
    } else {
      clearInterval(t);
      t = undefined;
      setTimeout(start, delay);
    }
  }
  setTimeout(start, delay);
  onBeforeUnmount(() => {
    clearInterval(t);
  });
};

/**
 * @explain: 防抖
 * @param {*} key
 */
let timer: any = null;
const antiShake = (fn: Function) => {
  // 如果定时器存在清空定时器
  if (timer) {
    clearTimeout(timer);
  }
  // 设置定时器，此时firstClick会变为false，规定时间后time才会为null
  timer = setTimeout(() => {
    timer = null;
    fn();
  }, 100);
};

export { startMarquee, antiShake };
```

<br/>

### index.vue

```vue
<template>
  <infoList :content="content"></infoList>
</template>

<script lang="ts" setup>
import infoList from "@/components/infoList/infoList.vue";

let content: any = [];
for (let i = 0; i < 20; i++) {
  const person: any = {};
  const statusN = Math.floor(Math.random() * 5) + 1;
  let status = "";
  if (statusN <= 2.5) {
    status = "正常";
  } else if (statusN > 2.5 && statusN <= 4) {
    status = "偷懒";
  } else if (statusN > 4) {
    status = "生病";
  }
  const type = Math.floor(Math.random() * 5) + 1;
  let tyepName = "";
  if (type === 1) {
    tyepName = "操作员工";
  } else if (type === 2) {
    tyepName = "维修员";
  } else if (type === 3) {
    tyepName = "实验员";
  } else if (type === 4) {
    tyepName = "电气工程师";
  } else if (type === 5) {
    tyepName = "值班电工";
  }
  const year = Math.floor(Math.random() * 20) + 18;
  const IdNumF: any = Math.floor(Math.random() * 899) + 100;
  const IdNumS = Math.floor(Math.random() * 899) + 100;
  const name = `工人${i}号`;
  person.Id = `${IdNumF}${IdNumS}`;
  person.name = name;
  person.year = year;
  person.tyepName = tyepName;
  person.status = status;
  content.push(person);
}
</script>

<style lang="scss" scoped></style>
```

<br/>

## 手写延时函数

> **书写一个延迟函数 `delay`**
>
> - 接受一个时间参数 `time`，并返回一个 Promise 对象。
> - 在函数内部，创建了一个 Promise 对象，并将其 resolve 函数作为参数传递给 setTimeout 函数。setTimeout 函数会在指定的时间后执行回调函数，这个回调函数会清除定时器并调用 resolve 函数，从而将 Promise 对象状态改变为 resolved。
> - 最后，通过返回这个 Promise 对象，使得外部可以通过 then 方法来处理延迟结束后的逻辑。

### 代码实现

```ts
/**
 *延迟函数
 *@param time 时间
 */
const delay = (time: number) => {
  return new Promise<void>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, time);
  });
};
// 或
const delay = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
};

// 第二种
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```

<br/>

## TS 类型说明

### TypeScript 来定义组件的 props 类型

> 在组件通信中，使用`defineProps`来接收数组对象信息时，需要指定`type: Array as () => Object[]`而不能为`type: Object`，以`<div class="row"  v-for="(item, index) in content" :key="index">`在标签中渲染的效果。

```ts
import { defineProps } from "vue";

const { content } = defineProps({
  content: {
    type: Array as () => Object[],
    required: true,
  },
});
```

`type: Array as () => Object[]` 和 `type: Object` 的区别在于类型的精确性和可读性。

1. 类型精确性：
   - `type: Array as () => Object[]` 表示 content 的类型是一个数组，其中每个元素都是对象。这样的定义更加具体和准确，可以帮助 TypeScript 在编译时进行更严格的类型检查。
   - `type: Object` 表示 content 的类型是一个普通的对象，但它并没有指定对象的具体结构。
2. 可读性：
   - `type: Array as () => Object[]` 的写法更加清晰地表达了 content 是一个数组，并且数组中的元素是对象。
   - `type: Object` 的写法相对较为简洁，但不够明确，无法直观地传达 content 的数据结构。

为什么要这样写？

- 使用 `Array as () => Object[]` 的写法可以提高代码的可维护性和可读性，让其他开发者更容易理解组件的 props 类型。
- 同时，这种写法也能帮助 TypeScript 进行更准确的类型推断和类型检查，避免潜在的类型错误。

<br/>

### 标签中根据键名动态访问 item 对象的属性值

> 在 TypeScript 中，字符串类型不能直接作为索引类型使用。
>
> 如果你想根据键名动态地访问 `item` 对象的属性值，可以使用 `item[key as keyof typeof item]` 的方式来实现。
>
> 使用 `keyof typeof item` 来获取 `item` 对象的所有键名的联合类型，并将其作为索引类型来访问 `item` 对象的属性值。通过 `v as keyof typeof item` 将字符串类型的键名转换为正确的索引类型。

**示例代码如下：**

```vue
<template>
  <div class="list">
      <div class="row" v-for="(item, index) in   content  " :key="index">
         <div class="col" v-for="(v, i) in   keys  " :key="i">
            <span>{{ item[v as keyof typeof item] }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const content = [
    {
        id : 1,
        value : 'a',
        statu : 'x',
    },
    {
        id : 2,
        value : 'b',
        statu : 'y',
    }
]

let keys = ["id","value","statu"]

</script>

<style lang="scss" scoped></style>

```
