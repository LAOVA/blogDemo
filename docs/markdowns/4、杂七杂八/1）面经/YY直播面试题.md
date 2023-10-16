# YY 直播前端实习

<br/>

## 项目中路由用的是 hash 还是 history

> **采用 hash 模式**
>
> 在`createRouter`中修改`history`属性为`createWebHashHistory(process.env.BASE_URL)`

- hash 指的是地址中#号以及后面的字符，也称为散列值。hash 也称作锚点，本身是用来做页面跳转定位的。如 http://localhost/index.html#abc，这里的#abc 就是 hash；
- 散列值是不会随请求发送到服务器端的，所以改变 hash，不会重新加载页面
- 监听 window 的 hashchange 事件，当散列值改变时，可以通过 location.hash 来获取和设置 hash 值
- location.hash 值的变化会直接反应到浏览器地址栏

由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件，浏览器的进后退也能对其进行控制。

> **History 模式**

- URL 中不包含#符号，例如：`http://example.com/home`
- 利用 HTML5 的 History API，在 URL 中记录真实的路径，而不是片段。
- 需要与后端进行配合，确保在服务端配置了正确的路由规则，以避免在刷新页面时出现 404 错误。
- 兼容性较差，不支持 IE9 及以下版本。
- 可以通过监听`popstate`事件来响应 URL 的变化。
- 适用于需要与后端进行实时交互的应用，可以实现更友好的 URL 展示效果。

总结一下，hash 模式和 history 模式是两种常见的前端路由模式。Hash 模式在 URL 中使用片段部分来实现路由切换，兼容性好；而 History 模式利用 HTML5 的 History API 来记录真实路径，需要与后端配合，适用于需要与后端进行实时交互的应用。选择哪种模式取决于项目需求和浏览器兼容性要求。

<br/>

## less 和 scss 的区别

1. 语法：

   - Less 使用`@`符号来定义变量和混合（Mixin）。
   - SCSS 使用`$`符号来定义变量和`@`定义混合。

2. 文件扩展名：
   - Less 文件通常使用`.less`作为文件扩展名。
   - SCSS 文件通常使用`.scss`作为文件扩展名。

除此之外，它们在其他方面的用法是相似的，例如都支持嵌套规则、混合、导入等功能，而且，都使用大括号来表示嵌套规则。

> 项目中使用
>
> 1. `map-get()` 函数：
>
>    根据给定的映射和键名，返回映射中对应键的值
>
>    - 定义了一个变量 `$border-color`，它的值是从一个名为 `$colors` 的映射中获取 `deepRed` 键对应的值。
>    - 这意味着在其他地方使用 `$border-color` 变量时，会得到 `deepRed` 对应的颜色值。
>
> 2. `@each`循环语句：
>
>    - 使用了`@each`循环语句来遍历一个名为`$colors`的映射，其中包含颜色名称和对应的颜色值。
>    - 在每次循环中，将当前颜色名称赋值给变量`$colorKey`，将当前颜色值赋值给变量`$color`。然后，生成一个类选择器`.text-#{$colorKey}`，其中`#{$colorKey}`是使用插值语法将颜色名称插入到选择器中。
>    - 在该类选择器内部，设置了`color`属性为变量`$color`，即将当前循环中的颜色值应用于文本颜色。
>    - 这样做的效果是，根据`$colors`映射中定义的颜色名称和颜色值，生成一系列具有不同文本颜色的类选择器，以便在其他地方使用。
>
> 3. `@mixin`用于定义一个混合器，它类似于一个函数，可以包含一组 CSS 样式规则。
>
>    在样式中通过`@include`关键字使用混合器，并提供混合器的名称和参数（如果有）。

<br/>

## http 缓存 / 浏览器缓存策略 / 强缓存和协商缓存

浏览器缓存策略是指浏览器在请求资源时如何使用和更新缓存的规则。以下是常见的浏览器缓存策略：

1. 强缓存：
   - 浏览器首先检查是否存在强缓存，即缓存副本是否仍然有效。
   - 如果缓存有效，浏览器直接从缓存中获取资源，不发送请求到服务器。
   - 响应头中的`Cache-Control`和`Expires`字段用于控制强缓存的过期时间。
2. 协商缓存：
   - 如果缓存失效，浏览器将发送一个带有条件的请求到服务器，以验证缓存是否仍然有效。
   - 响应头中的`Last-Modified`和`ETag`字段用于控制协商缓存的验证。
   - 服务器会检查请求头中的字段，并与资源的最新信息进行比较。
   - 如果资源未发生变化，服务器返回状态码 304，告诉浏览器可以使用缓存副本。
3. 缓存控制头：
   - `Cache-Control`字段用于控制缓存行为，例如设置缓存时间、是否允许缓存等。
   - `Expires`字段用于设置资源的过期时间，但它是基于客户端时间，可能存在不准确的问题。
   - `Last-Modified`字段表示资源的最后修改时间，用于协商缓存验证。
   - `ETag`字段是资源的唯一标识符，也用于协商缓存验证。
4. 缓存位置：
   - 浏览器可以将缓存分为多个位置，如内存缓存、磁盘缓存等。
   - 内存缓存速度快但容量小，适合存储频繁访问的资源。
   - 磁盘缓存容量大但速度较慢，适合存储较少访问的资源。

<br/>

## rem 和 vw 的使用以及区别

> 项目中使用：
>
> 移动攻略平台的前台页面中，使用 rem 作为单位，来适应不同尺寸的移动端。
>
> 在数据可视化框架中，使用 vw、vh 来实现基于设计稿尺寸的响应式设计。

rem 和 vw 都是用于响应式设计的单位，但它们有一些区别。

1. rem（根据根元素字体大小进行计算）：

   - rem 是相对于根元素（html 元素）字体大小的单位。
   - 可以通过设置根元素的字体大小来影响整个页面中 rem 单位的值。
   - 例如，如果根元素的字体大小默认为 16px，那么 1rem 就等于 16px。
   - 使用 rem 单位可以实现相对于页面布局的缩放效果。

2. vw（视窗宽度的百分比）：
   - vw 是相对于视窗宽度的百分比单位。
   - 1vw 表示视窗宽度的 1%。
   - 例如，如果视窗宽度为 1000px，那么 1vw 就等于 10px。
   - 使用 vw 单位可以实现相对于视窗宽度的自适应效果。

区别：

- rem 单位相对于根元素字体大小，而 vw 单位相对于视窗宽度。
- rem 单位的值在不同元素中可能会有差异，因为它们依赖于根元素的字体大小。而 vw 单位的值始终是相对于视窗宽度的。
- rem 单位更适合用于实现整体布局的缩放效果，而 vw 单位更适合用于实现响应式设计中的自适应效果。

<br/>

## keep-alive

> 项目中使用
>
> 英雄角色的图片列表组件，在实际使用中会对该组件进行多次使用，点击使用会进行跳转到详情页，所以我就将该组件使用 keep-alive 进行缓存，那样就可以防止在查看不同英雄攻略的时候反复渲染该组件。

keep-alive 标签是 Vue 的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染 DOM。
包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

**属性：**

- `include:`字符串或正则表达式。只有匹配的组件会被缓存。
- `exclude：`字符串或正则表达式。任何匹配的组件都不会被缓存。优先级比 include 高

**keep-alive 生命周期钩子函数：activated、deactivated**
activated：在组件被激活时调用，在组件第一次渲染时也会被调用，之后每次 keep-alive 激活时被调用。
deactivated：在组件被停用时调用。

<br/>

## 节流防抖

> 项目中使用：
>
> 在可滚动的列表或者长列表中，对鼠标移入某一列表项会有一个函数触发，如果鼠标滑过了多个列表项，就会触发多次该函数，所以就需要限制鼠标最终停留的位置作为目标列表项，只执行一次函数，此时就需要用到防抖。

首先，定义了一个名为`timer`的定时器变量，并将其初始化为`null`。

然后，定义了一个名为`preventShake`的函数，接受一个参数`fn`，即需要执行的函数。

在函数体内部，首先判断`timer`是否存在。如果存在，说明上一次的定时器还未执行，需要清除之前的定时器，以避免重复执行。

接着，通过`setTimeout`函数设置一个新的定时器，延迟 100 毫秒后执行回调函数。在回调函数中，调用传入的函数`fn()`，并将`timer`重新赋值为`null`，表示定时器已经执行完毕。

这样，当连续多次调用`preventShake`函数时，只有最后一次调用会真正执行传入的函数，前面的调用都会被防抖函数取消掉。

<br/>

## 项目里跨域怎么处理

> 在`vue.config.js`文件中的`proxy`配置项中，用于配置代理服务器。
>
> 首先，通过`/api`作为匹配规则，当请求的 URL 以`/api`开头时，将会触发代理转发。
>
> 然后，`target`指定了代理的目标地址，即将请求转发到的真实服务器地址。在这个例子中，请求会被转发到`http://127.0.0.1:8088/`。
>
> 接下来，`changeOrigin`设置为`true`表示启用跨域，允许在本地开发环境中访问不同域名下的接口。
>
> 最后，`pathRewrite`用于重写请求路径。在这个例子中，`^/api`表示匹配到的路径中的`/api`会被替换为空字符串，即去掉`/api`前缀。
>
> 综合起来，这段代码的作用是将以`/api`开头的请求转发到`http://127.0.0.1:8088/`，并且去掉`/api`前缀。这样可以在开发环境中使用相对路径来请求接口，而无需担心跨域问题。

**什么是跨域**

指的是浏览器执行其他网站的脚本，它是由浏览器的同源策略（协议、域名、端口号）造成的，是浏览器对 javascript 施加的安全限制，防止他人恶意攻击网站。

**解决方式**

1. jsonp

   原理：动态创建一个 script 标签。利用 script 标签的 src 属性不受同源策略限制，来请求第三方服务器数据内容。

2. CORS：跨域资源共享

   原理：服务器设置 Access-Control-Allow-Origin HTTP 响应头之后，浏览器将会允许跨域请求。

3. Vue 的 proxy 代理，设置代理服务器，进行请求转发。

4. Nginx 反向代理

<br/>

## **localStorage、sessionStorage、cookie 的区别**

**共同点**：都是保存数据在浏览器端、且同源的数据

**区别：**

1. **cookie 数据始终在同源的 http 请求中携带（即使不需要）**，即 cookie 在浏览器和服务器间来回传递，而 sessionStorage 和 localStorage 不会自动把数据发送给服务器，仅在本地保存。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下。
2. **存储大小限制也不同**，cookie 数据不能超过 4K，同时因为每次 http 请求都会携带 cookie、所以 cookie 只适合保存很小的数据，如会话标识。sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。
3. **数据有效期不同**，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的 cookie 过期时间之前有效，即使窗口关闭或浏览器关闭。
4. **作用域不同**，sessionStorage 不能在不同的浏览器窗口中共享，即使是同一个页面；localstorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的。

<br/>

## Promise 和 async await

> Promise 和 async/await 都是 JavaScript 中处理异步操作的方式

**Promise:**

- Promise 是一种表示异步操作的对象，它可以有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。
- Promise 通过链式调用的方式来处理异步操作的结果，可以使用 `.then()` 方法注册成功回调函数，使用 `.catch()` 方法注册错误回调函数。
- Promise 可以通过 `.resolve()` 方法返回一个已经成功的 Promise 对象，通过 `.reject()` 方法返回一个已经失败的 Promise 对象。
- Promise 还提供了 `.all()` 和 `.race()` 方法，分别用于处理多个 Promise 对象的并行执行和竞争执行。

**async/await:**

- async/await 是基于 Promise 的语法糖，它提供了一种更简洁、直观的方式来处理异步操作。
- async 函数是一个返回 Promise 对象的函数，其中可以使用 await 关键字来等待一个 Promise 对象的解决。
- await 关键字只能在 async 函数内部使用，它会暂停 async 函数的执行，直到等待的 Promise 对象解决为止，并返回解决值。
- 使用 try/catch 结构可以捕获 async 函数中的异常，并在 catch 块中处理错误。

<br/>

## 组件通信

在项目中，组件间通信可以通过以下几种方式来实现：

1. Props/Attributes（属性传递）：
   - 父组件可以通过 Attributes 属性传递数据给子组件。
   - 子组件通过 props 接收父组件传递的数据，并进行相应的处理。
2. Events（事件传递）：
   - 可以通过 `$emit` 方法触发自定义事件，并将需要传递的数据作为参数传入。
   - 父组件可以在子组件上`v-on`监听自定义事件，并在事件处理函数中获取传递的数据。
3. ref / $refs
   - ref 被用来给元素或子组件注册引用信息。
   - 引用信息将会注册在父组件的 $refs 对象上。
4. Provide/Inject（依赖注入）：
   - 父组件可以通过 `provide` 提供数据或方法。
   - 子组件可以通过 `inject` 注入提供的数据或方法，并在组件内部使用。
5. EventBus（事件总线）：
   - 可以创建一个独立的事件总线对象，用于在组件之间传递消息。
   - 组件可以通过事件总线对象的方法来触发和监听事件。
6. Vuex/Pinia（状态管理）：
   - 使用 Vuex 或 Pinia 这样的状态管理库可以实现全局状态的共享和组件间的通信。
   - 组件可以通过提交 mutations 或调用 actions 来修改全局状态。
   - 其他组件可以通过读取全局状态来获取最新的数据。
7. LocalStorage/SessionStorage/Cookies：
   - 可以使用浏览器提供的本地存储方式，如 LocalStorage、SessionStorage 或 Cookies 来在组件之间共享数据。
8. $attrs 和 $listeners

<br/>

## 列表数据渲染时为什么要加 key

在列表数据渲染时，给每个列表项添加一个唯一的 key 是为了高效地管理和更新列表。

当没有为列表项指定 key 时，Vue 在进行列表渲染时会使用默认的索引作为 key。当列表中的数据发生变化，例如插入、删除或重新排序，Vue 将不再能够准确地识别每个列表项，并可能导致 Vue 可能会错误地更新列表中的其他项。而且果没有指定 key，Vue 需要遍历整个列表来查找匹配的项。这样会增加性能开销，尤其是在大型列表中。

通过为列表项添加唯一的 key，可以解决以上问题：

1. Vue 可以根据 key 来准确地追踪和更新列表项。
2. Vue 可以使用 key-value 的方式来快速查找和比较列表项，从而高效地更新虚拟 DOM。

<br/>

## 说一说项目中封装的组件

> 滚动列表组件、可拖拽弹窗组件

**滚动列表**

`startRoll` 函数用于实现滚动列表效果。

函数接受四个参数：`rollObj`、`lh`、`speed` 和 `delay`。其中，`rollObj` 是需要实现滚动效果的元素的 ID 或类名；`lh` 是每行列表的高度；`speed` 是滚动的速度；`delay` 是滚动间隔时间。

通过判断 `rollObj` 的类型来获取对应的 DOM 元素。然后设置滚动对象的初始样式和鼠标事件监听器。用 `setInterval` 创建一个新的定时器，每隔 `speed` 毫秒执行一次`scrolling` 函数。`scrolling` 函数通过条件判断，将滚动对象的 `marginTop` 属性减去 1px，实现向上滚动的效果。

**可拖拽弹窗组件**

自定义指令 `drag`，用于实现元素的拖拽功能。

1. 首先，通过 `directive`注册了一个名为 `drag` 的自定义指令。
2. 在 `mounted` 钩子函数中，获取了指令的参数 中的 `container`容器元素 和 `selector`拖拽元素。
3. 监听拖拽元素的 `mousedown` 事件，当鼠标按下时触发拖拽操作。
4. 在拖拽操作中，首先通过设置 `el.style.transition = 'none'`取消元素的过渡动画效果。
5. 计算鼠标在按下与移动事件中，通过计算旧 clientX、clientY 与新的 clientX、clientY 的差值，来算出拖拽元素新的 offsetLeft、offsetTop。
6. 在鼠标松开事件中，根据新的 offsetLeft、offsetTop 设置拖拽元素的位置，并清除鼠标移动事件的监听。
7. 最后，恢复元素的 `el.style.transition ` 过渡动画效果。

<br/>

## vue 中 reactive、ref 的原理

在 Vue 中，`reactive` 和 `ref` 是用于创建响应式数据的两种方式。

`reactive` 函数是 Vue 3 中引入的，它接受一个普通对象作为参数，并返回一个响应式代理对象。这个代理对象会拦截对其属性的访问和修改操作，从而实现了响应式。当我们通过 `reactive` 创建的对象发生变化时，相关的组件会自动更新。

`ref` 函数是 Vue 2 中引入的，它接受一个初始值作为参数，并返回一个包含响应式数据的对象。这个对象有一个名为 `value` 的属性，我们可以通过访问和修改 `value` 属性来操作数据。与 `reactive` 不同的是，`ref` 创建的数据需要通过 `.value` 进行访问和修改，而不是直接访问。

1. ref 用于定义基本类型和引用类型，reactive 仅用于定义引用类型
2. reactive 只能用于定义引用数据类型的原因在于内部是通过 ES6 的 Proxy 实现响应式的，而 Proxy 不适用于基本数据类型
3. ref 定义对象时，底层会通过 reactive 转换成具有深层次的响应式对象，所以 ref 本质上是 reactive 的再封装
4. 在脚本里使用 ref 定义的数据时，记得加.value 后缀
5. 在定义数组时，建议使用 ref，从而可避免 reactive 定义时值修改导致的响应式丢失问题

<br/>

## vue 中 watch、computed 的原理

在 Vue 中，`watch` 和 `computed` 是用于监听数据变化和计算衍生数据的两种方式。

`watch` 用于监听指定的数据变化。当被监听的数据发生变化时，`watch` 会执行相应的回调函数。Vue 在内部使用了 `deep` 参数来深度监听对象的变化。当我们将 `deep` 设置为 `true` 时，Vue 会递归遍历对象的所有属性，并对每个属性进行监听。

`computed` 用于计算衍生数据。对于 `computed`，Vue 在内部使用了一个缓存机制来避免重复计算。只有当依赖的数据发生变化时，才会重新计算计算函数的结果。否则，直接返回之前缓存的结果。

这两种方式的原理都是基于 Vue 的响应式系统。Vue 使用了 `Object.defineProperty` 或 `Proxy` 对象来劫持数据的访问和修改操作。当我们访问一个响应式数据时，Vue 会收集该数据的依赖关系，并建立起一个依赖图。当数据发生变化时，Vue 会遍历依赖图，找到所有依赖该数据的组件，并触发它们的更新机制。

<br/>

## 数据摘要算法

[哈希算法](https://so.csdn.net/so/search?q=哈希算法&spm=1001.2101.3001.7020)（Hash）又称摘要算法（Digest），它的作用是：对任意一组输入数据进行计算，得到一个固定长度的输出摘要。

[哈希函数](https://so.csdn.net/so/search?q=哈希函数&spm=1001.2101.3001.7020)的主要作用不是完成数据加密与解密工作，它是用来检验数据完整性的重要技术，运算结果具有不可逆性。

常用的摘要算法有：

1. MD5：消息摘要算法
2. SHA：安全散列算法
3. HMAC：散列消息认证码

<br/>

## vue3 的 patch 函数

在 Vue 3 中，`patch` 函数是用于将虚拟 DOM 节点转化为真实 DOM 并进行更新的核心函数。它是 Vue 的渲染引擎的一部分，负责处理组件的渲染和更新过程。

`patch` 函数大致做了以下几个主要的事情：

1. 创建或更新真实 DOM：根据虚拟 DOM 节点的类型，`patch` 函数会创建或更新相应的真实 DOM 元素。如果虚拟 DOM 节点对应的真实 DOM 已经存在，则会进行更新操作。如果虚拟 DOM 节点对应的真实 DOM 不存在，则会创建新的真实 DOM 元素。

2. 处理子节点：`patch` 函数会递归处理虚拟 DOM 节点的子节点。它会比较新旧子节点的差异，并根据差异进行相应的操作，比如添加、移动、删除子节点。

3. 更新组件：如果虚拟 DOM 节点对应的是一个组件，`patch` 函数会调用组件的更新逻辑，执行组件的更新操作。

4. 处理事件监听器：`patch` 函数会更新虚拟 DOM 节点上的事件监听器。它会比较新旧事件监听器，进行相应的添加、移除或更新。

5. 处理指令和插槽：它会根据指令的不同类型，执行相应的操作，比如执行指令的钩子函数、渲染插槽内容等。

<br/>

## vue3 的 diff 算法中的 双端对比 和 最长递增子序列

传统的 diff 算法是单向的，从上到下逐层对比节点，当遇到不同的节点时，会将整个子树进行替换。这样做的问题是，即使只有一个节点发生了变化，也会导致整个子树的重新渲染，造成性能浪费。

而双端对比则是从两端同时进行对比，即同时从新旧虚拟 DOM 的头部和尾部开始对比。这样可以更精确地找到差异，并且只更新需要更新的部分，减少了不必要的操作。例如，如果只有列表的第一个节点发生了变化，那么双端对比可以只更新该节点，而不需要重新渲染整个列表。

为了确定复用节点的顺序，Vue 3 使用了最长递增子序列（LIS）的概念。LIS 是指在一个序列中找到最长的递增子序列，即找到一个非连续的子序列，使得子序列中的元素按照从小到大的顺序排列，并且长度最长。在虚拟 DOM 的对比过程中，通过计算新旧虚拟 DOM 中相同节点的 LIS，可以确定节点的复用顺序，从而减少不必要的移动操作。

<br/>

## vue3 的模板编译大概做了什么

- 首先，通过`compile`编译器把`template`编译成`AST`语法树，然后，`AST`会经过`generate`（将 AST 语法树转化成 render funtion 字符串的过程）得到`render`函数，返回值是`VNode`，VNode 是 Vue 的虚拟 DOM 节点，最终得到虚拟 DOM 树。

<br/>

## render 函数大概做了什么

具体来说，渲染函数做了以下几个主要的工作：

1. **创建虚拟 DOM**：渲染函数会根据模板中的指令、组件等信息，创建对应的虚拟 DOM 节点。

2. **处理指令和表达式**：生成相应的 DOM 操作和数据绑定代码。

3. **处理事件监听器**：将模板中的事件监听器转换为对应的事件处理函数，并绑定到生成的 DOM 节点上。

4. **处理子组件**：如果模板中包含子组件，渲染函数会递归地调用子组件的渲染函数，生成子组件的虚拟 DOM。

5. **返回虚拟 DOM**：最后，渲染函数会返回生成的虚拟 DOM 树。

<br/>

## vue 编译层面优化

1. 减少页面重绘和回流；

2. 图片压缩，采用精灵图；

3. 图片懒加载；

4. v-if 和 v-show 区分使用场景；

5. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if

6. keep-alive 缓存页面

7. 事件的销毁，避免内存泄漏；

8. 防抖、节流

9. 第三方组件按需加载；

10. 使⽤路由懒加载、异步组件

<br/>

## SSR 的原理

`SSR（Server-Side Rendering，服务器端渲染）`的原理:

将页面的渲染工作从客户端转移到服务器端进行。具体来说就是在 SSR 中，服务器会在接收到客户端请求时，获取到对应的数据，然后将这些数据和页面模板结合起来，生成一个已经包含了数据的完整 HTML 页面，并将其返回给客户端。

**SSR 的优势**：

- 更好的 SEO
- 首屏加载速度更快

**SSR 的缺点**：

- 开发条件会受到限制，服务器端渲染只支持 beforeCreate 和 created 两个钩子；
- 增加的服务端负载。

<br/>

## vue 项目怎么做缓存优化

在 Vue 项目中进行缓存优化可以提高页面加载速度和用户体验。下面是一些常见的缓存优化技巧：

1. keep-alive 组件缓存
2. 数据本地缓存
3. 图片懒加载
4. HTTP 缓存机制缓存
5. 代码分割、按需加载
6. CDN 加速

<br/>

## 简单说说 webpack 和 babel

`Webpack` 是一个模块打包工具，它可以将多个模块（如 JavaScript、CSS、图片等）打包成一个或多个静态资源文件。它可以处理模块之间的依赖关系，并通过各种加载器（Loader）和插件（Plugin）来处理不同类型的文件。

`Babel `是一个 JavaScript 编译器，它主要用于将新版本的 JavaScript 代码转换为向后兼容的旧版本代码。 Babel 使用插件来对代码进行转换，每个插件都负责处理特定的语法或特性。

<br/>

## babel 转换代码的原理

Babel 是一个广泛使用的 JavaScript 编译器，：

1. **解析（parse）**：Babel 首先会将输入的源代码解析成**抽象语法树（AST）**。

2. **转换（transform）**：Babel 使用**插件**来对 AST 进行转换。每个插件都会对特定的语法进行处理。

3. **生成（generate）**：转换完成后，Babel 将修改后的 AST 转换回可执行的代码。

总结起来，Babel 的转换代码的原理是通过解析源代码生成 AST，然后使用插件对 AST 进行转换，最后将修改后的 AST 重新生成可执行的代码。

<br/>

## plugin 和 loader 区别

1. 不同的作用

   - Loader 为“加载器”。Webpack 将一切文件视为模块，但是 Webpack 原生是只

   能解析 js 文件。Loader 的作用是让 Webpack 拥有了加载和解析非 JavaScript 文件的能力。

   - Plugin 为“插件”，Plugin 可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

2. 不同的用法

   - Loader 在 module.rules 中配置，也就是说他作为模块的解析规则而存在。 类型为

   数组，每一项都是一个 Object，里面的属性包括类型、加载器和参数。

   - Plugin 在 plugins 中单独配置。 类型为数组，每一项是一个 plugin 的实例，参数

   都通过构造函数传入。

<br/>

## Git 团队协作

Git 是一种分布式版本控制系统

1. 创建远程仓库
2. 克隆仓库： `git clone`
3. 创建+切换分支： `git branch` + `git checkout` = `git checkout -b`
4. 开发和提交： `git add` 、`git commit`
5. 拉取和合并： `git pull`
6. 推送和合并：`git push`
7. 更新本地仓库： `git pull`

`git merge`和`git rebase`有以下区别：

- `git merge` 会保留每个分支的提交历史。分支结构清晰具体。
- `git rebase` 形成一条线性的提交历史。分支结构相对简洁。
- `git merge`需要手动解决冲突，而`git rebase`需要逐个应用提交并解决冲突。
- `git merge`便于历史追溯，而`git rebase`历史追溯难。

<br/>

## TCP 的有哪些重要的机制

- 重传机制
- 拥塞控制机制
- 流量控制机制
- 可靠传输机制

<br/>

## TCP 跟 UDP 有什么区别

![3a819be58c17309e0cd5ac309290d7f.png](C:\Users\17232\Desktop\Markdown笔记\前端学习\面经\1605056951790214.png)

<br/>

## TCP 三次握手、四次挥手

- `三次握手（Three-way Handshake）`：

  1. **客户端**发送一个带有 SYN（同步）标志的数据包给服务器，并选择一个初始序列号（ISN）。
  2. **服务器**收到请求后，回复一个带有 SYN/ACK（同步/确认）标志的数据包给客户端，同时也选择一个初始序列号。
  3. **客户端**收到服务器的响应后，再发送一个带有 ACK（确认）标志的数据包给服务器，表示连接已建立。

- `四次挥手（Four-way Handshake）`：
  1. **客户端**想要关闭连接时，发送一个带有 FIN（结束）标志的数据包给服务器。
  2. **服务器**收到请求后，回复一个带有 ACK 标志的数据包给客户端，表示已收到关闭请求。
  3. **服务器**完成自己的数据发送后，发送一个带有 FIN 标志的数据包给客户端，表示可以关闭连接。
  4. **客户端**收到服务器的关闭请求后，回复一个带有 ACK 标志的数据包给服务器，表示已收到关闭请求。

**之所以要三次握手和四次握手**，都是为了保证双方都能确认收到自己的请求信息，确保双方知道彼此同意连接或者断开，防止一方关闭了另一方还开着这种情况。

<br/>

## CSS 盒模型

> 盒模型都是由四个部分组成的，分别是 margin 、border . padding 和 content

标准盒模型和 lE 盒模型的区别在于设置 width 和 height 时，所对应的范围不同

- 标准盒模型的 width 和 height 属性的范围只包含了 content,
- IE 盒模型的 width 和 height 属性的范围包含了 border 、padding 和 content

可以通过修改元素的 box-sizing 属性来改变元素的盒模型

- box-sizing：content-box 表示标准盒模型（默认值)
- box-sizing：border-box 表示 lE 盒模型（怪异盒模型)

<br/>

## flex 的理解

> Flex 是一种 CSS 布局模型，它可以使元素在容器中自动调整大小和位置。通过使用 flex 属性，我们可以控制元素在主轴和交叉轴上的布局方式。

Flex 布局有两个重要的概念：容器（flex container）和项目（flex item）。容器是指应用了 flex 布局的父元素，而项目则是容器内的子元素。

在容器上设置`display: flex`，即可将其设置为 flex 容器。然后，我们可以使用`flex-direction`属性来指定主轴的方向，使用`justify-content`属性来定义项目在主轴上的对齐方式，`align-items、align-content`属性可以定义项目在交叉轴上的对齐方式，还可以使用 flex 属性来指定是否换行（`flex-warp`）、子项的放大比例（`flex-grow`）、缩小比例（`flex-shrink`）和初始大小（`flex-basis`）。

<br/>

## 谈一下 position 的理解

> position 是 CSS 中用来控制元素定位的属性。它有几个常见的取值：static、relative、absolute 和 fixed。后两个脱离标准文档流。

- `static`：默认值，元素按照正常文档流进行布局，不受 top、right、bottom 和 left 属性的影响。
- `relative`：相对定位，元素会相对于其正常位置进行偏移。可以使用 top、right、bottom 和 left 属性来指定偏移量。
- `absolute`：绝对定位，元素会相对于最近的已定位祖先元素进行定位。如果没有已定位的祖先元素，则相对于文档进行定位。同样可以使用 top、right、bottom 和 left 属性来指定偏移量。（脱标）
- `fixed`：固定定位，元素会相对于视口进行定位，即无论页面滚动与否，元素都会保持在固定的位置。同样可以使用 top、right、bottom 和 left 属性来指定偏移量。（脱标）

<br/>

## 谈谈闭包和闭包的副作用

> 一个作用域可以访问另外一个函数内部的局部变量，或者说一个函数（子函数）访问另一个函数（父函数）中的变量。 此时就会有闭包产生，那么这个变量所在的函数我们就称之为闭包函数。

**闭包会造成内存泄漏**

> 内存泄漏：

内存泄露是指：程序使用的内存不再被需要，却没有被正确释放的情况。(其实就是该内存空间使用完毕之后未回收)。

`导致内存泄漏`：

1. **意外的全局变量**

   函数中意外的定义了全局变量，每次执行该函数都会生成该变量，且不会随着函数执行结束而释放。

2. **未清除的定时器**

   未清除的定时器或者 setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。

3. **闭包、控制台日志、引用循环**（在两个对象彼此引用且彼此保留时，就会产生一个循环）

`解决方案`：

1. **在 js 文件开头添加 ‘use strict'，开启严格模式**
2. **清除不需要的定时器**
3. **避免循环引用**
4. **合理使用闭包，避免滥用**
5. **没用的 console.log 要去掉**

<br/>

## 事件循环

JavaScript 的事件分两种，宏任务(macro-task)和微任务(micro-task)

**宏任务**：包括整体代码 script，setTimeout，setInterval

**微任务**：Promise.then(非 new Promise)，process.nextTick(node 中)

> **事件的执行顺序**：先执行宏任务，然后执行微任务，任务有同步的任务和异步的任务，同步的进入主线程，异步的进入 Event Table 并注册函数，异步事件完成后，会将回调函数放在任务队列中等待执行，如果还有异步的宏任务，那么就会进行循环执行上述的操作。

<br/>

## Promise 的理解

Promise 是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，避免了地狱回调。

（1）Promise 的实例有**三个状态**:

- pending（进行中）
- fulfilled（已完成）
- rejected（已拒绝）

（2）Promise 的实例有**两个过程**：

- pending -> fulfilled : Resolved（已完成）
- pending -> rejected：Rejected（已拒绝）

> Promise 有五个常用的方法：then()、catch()、all()、race()、finally()

1. **then()**

`then`方法可以接受两个回调函数作为参数。第一个回调函数是 Promise 对象的状态变为`resolved`时调用，第二个回调函数是 Promise 对象的状态变为`rejected`时调用。其中第二个参数可以省略。

`then`方法返回的是一个新的 Promise 实例（不是原来那个 Promise 实例）。因此可以采用链式写法，即`then`方法后面再调用另一个 then 方法。

**2. catch()**

catch 方法指向`reject`的回调函数。而且在执行`resolve`回调函数时，如果出现错误，抛出异常，不会停止运行，而是进入`catch`方法中。

**3. all()**

`all`方法可以实现并行任务， 它接收一个数组，数组的每一项都是一个`promise`对象。当数组中所有的`promise`的状态都达到`resolved`的时候，`all`方法的状态就会变成`resolved`，如果有一个状态变成了`rejected`，那么`all`方法的状态就会变成`rejected`。

**（4）race()**

`race`方法和`all`一样，接受的参数是一个每项都是`promise`的数组，但是与`all`不同的是，如果第一个`promise`对象状态变成`resolved`，那自身的状态变成了`resolved`；反之第一个`promise`变成`rejected`，那自身状态就会变成`rejected`。

**5. finally()**

`finally`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

<br/>

## echarts 的使用

① 获取 echarts ：在官网下载 echarts 版本 或 npm 下载

② 引入 echarts ：script 引入 或者 vue 在入口文件里引入

③ 创建一个 dom 元素：作为容器，用来放置图表

④ 配置 echarts 属性

> echarts 的配置核心就是配置的 options 对象。一般使用最多的是柱状图、折线图，雷达图，饼状图、地图。通常需要设置 title 标题，配置 X 轴 xAsix 和 Y 轴 yAxis，然后就是 series 系列的设置，它是一个数组，数组的每一项都代表着一个单独的系列，可以配置各种图形等等功能，接着设置数据源 data 。最后调用 `setOption` 方法来将配置应用到图表实例，并渲染出图表。

<br/>

## await / async

**async / await** 其实是基于 Promise 的的语法糖，它能实现的效果都能用 **then 链**来实现，它是为优化 **then 链**而开发出来的。**async** 用于申明一个 **function** 是异步的，而 **await** 用于等待一个异步方法执行完成。

**async/await 对比 Promise 的优势**

- 写法简单，通俗易懂，代码读起来更加同步。
- 对错误处理更友好，async/await 可以⽤成熟的 try/catch，Promise 的错误捕获⾮常冗余 。
- 便于调试，Promise 在⼀个 then 代码块中使⽤的调试器不会进⼊后续的 then 代码块。

<br/>

## vue3 新 API（特性）

1. Composition API（组合式 API）：
   更加灵活、模块化，可以更好地处理复杂的业务逻辑。

2. Teleport（传送门）：
   是一个新的组件，可以将子组件渲染到 DOM 结构中的其他位置。

3. Fragments（片段）：
   允许在组件中返回多个根元素，而不需要使用额外的包裹元素。

4. Suspense（异步加载）：
   是一个用于处理异步加载的新组件，可以在异步组件加载完成之前显示一个占位符。

5. 新的响应式设计：
   使用 Proxy 来实现数据的响应式，性能优于 Object.defineProperty

6. 更好的 TypeScript 支持：
   Vue 3 对 TypeScript 的支持更加完善，有更准确的类型推断和更好的类型定义。

<br/>

## 谈一下 Vuex 的理解与使用

> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。
>
> - Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
> - 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

核心属性分别是 **State、 Getter、Mutation 、Action、 Module**

1. **state**

   state 为单一状态树，在 state 中需要定义我们所需要管理的数组、对象、字符串等。

2. **getter**

   getter 类似计算属性，当需要从 store 的 state 中派生出一些状态，就需要使用 getter，而且 getter 的返回值会被缓存起来，只有 getter 中的依赖值发生改变的时候才会被重新计算。

3. **mutation**

   更改 store 中 state 状态的唯一方法就是 mutation。要执行 mutation 中的回调函数，则需要执行 commit 调用方法。

4. **action**

   action 可以提交 mutation，在 action 中可以执行 commit 操作，且可以进行异步操作。在页面需要调用 dispatch 方法来执行 action。

5. **module**

   module 可以将 store 分割成模块，每个模块中拥有自己的 state、getter、mutation 和 action 。

<br/>

## Vue 子组件和父组件执行顺序

**加载渲染过程：**

1. 父组件 beforeCreate
2. 父组件 created
3. 父组件 beforeMount
4. 子组件 beforeCreate
5. 子组件 created
6. 子组件 beforeMount
7. 子组件 mounted
8. 父组件 mounted

**更新过程：**

1. 父组件 beforeUpdate
2. 子组件 beforeUpdate
3. 子组件 updated
4. 父组件 updated

**销毁过程：**

1. 父组件 beforeDestroy
2. 子组件 beforeDestroy
3. 子组件 destroyed
4. 父组件 destoryed

<br/>

## http1.0、http1.1 和 http2.0

`http1.0`

- 每次请求都需要建立一个 TCP 连接

- 无法复用连接

- 存在队头阻塞的问题

- 不能请求资源的一部分，只能完整请求

`http1.1`（是 http1.0 的改进版）

- 长连接

- 支持请求管道化

- 支持断点传输

- 支持协商缓存和强缓存

- 新增了 `PUT | HEAD | OPTIONS`等请求方法

- 支持资源的部分请求和范围请求

- 新增 Host 字段

- 引入了客户端 Cookie 机制和安全机制

- 仍然存在队头阻塞问题

`http2.0`（进一步优化了传输效率）

- 二进制分帧
- 多路复用
- 头部压缩
- 服务器推送
- 引入了数据流

<br/>

## 实现九宫格效果

**使用 Grid 布局**

```html
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
  }

  .grid-item {
    background-color: #ccc;
    padding: 20px;
  }
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```

**使用 Float**

```html
<style>
  .float-container {
    overflow: hidden;
  }

  .float-item {
    float: left;
    width: calc(33.33% - 10px);
    background-color: #ccc;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 20px;
  }
</style>

<div class="float-container">
  <div class="float-item">1</div>
  <div class="float-item">2</div>
  <div class="float-item">3</div>
  <div class="float-item">4</div>
  <div class="float-item">5</div>
  <div class="float-item">6</div>
  <div class="float-item">7</div>
  <div class="float-item">8</div>
  <div class="float-item">9</div>
</div>
```

**使用 Flex 布局**

```html
<style>
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-item {
    width: calc(33.33% - 10px);
    background-color: #ccc;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 20px;
  }
</style>

<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
  <div class="flex-item">6</div>
  <div class="flex-item">7</div>
  <div class="flex-item">8</div>
  <div class="flex-item">9</div>
</div>
```

**使用 Table 布局**

```html
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    width: 33.33%;
    height: 100px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ccc;
  }
</style>

<table>
  <tr>
    <td>格子1</td>
    <td>格子2</td>
    <td>格子3</td>
  </tr>
  <tr>
    <td>格子4</td>
    <td>格子5</td>
    <td>格子6</td>
  </tr>
  <tr>
    <td>格子7</td>
    <td>格子8</td>
    <td>格子9</td>
  </tr>
</table>
```

<br/>

## 实现放大缩小的动画效果

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: red;
    transition: transform 0.3s ease;
  }

  .box:hover {
    transform: scale(0.5);
  }

  .box:active {
    transform: scale(2);
  }
</style>

<div class="box"></div>
```

<br/>

## Js 原型和原型链

JavaScript 中所有都是对象，在 JavaScript 中，原型也是一个对象，通过原型可以实现对象的属性继承，JavaScript 的函数对象中都包含了一个 `prototype`内部属性，这个属性所对应的就是该函数对象的原型，`prototype`作为函数对象的内部属性，是不能被直接访问的。所以为了方便查看一个对象的原型，Firefox 和 Chrome 内核的 JavaScript 引擎中提供了`__proto__`这个非标准的访问器原型的主要作用就是为了实现继承与扩展对象。

JavaScript 原型： 每个对象都会在其内部初始化一个属性，就是 `prototype`(原型)

**原型链：**

当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去

它的`__proto__`隐式原型上查找，即它的构造函数的 `prototype`，如果还没有找到就会再在构造函数的 `prototype` 的`__proto__`中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。

<br/>

## vue 的响应式原理

通过使用 Object.defineProperty 方法来劫持对象的属性访问，从而实现对数据的监听和响应。

- Observe 实现数据劫持，递归给对象属性，绑定 setter 和 getter 函数，属性改变时，通知订阅者
- Compile 解析模板，把模板中变量换成数据，绑定更新函数，添加订阅者，收到通知就执行更新函数
- Watcher 作为 Observe 和 Compile 中间的桥梁，订阅 Observe 属性变化的消息，触发 Compile 更新函数。

<br/>

## 处理 es6 的插件是什么

在 Webpack 中处理 ES6 的插件是 babel-loader。Babel 是 JavaScript 编译器，可以将 ES6+的代码转换为向后兼容的 JavaScript 版本，以便在不支持最新语法和特性的浏览器中运行。

<br/>

## vue nextick 原理

Vue 的`nextTick`原理是利用 JavaScript 的事件循环机制，在下一个事件循环中执行回调函数，以确保在 DOM 更新完成后再执行相应的操作。这个机制使得 Vue 能够在数据变化后进行异步更新 DOM，并提供了一种方便的方式来处理 DOM 更新完成后的操作。

<br/>

## Get 和 Post 请求的区别

GET 和 POST 请求的区别可以简单总结如下：

1. 数据传输方式：GET 请求通过 URL 的**查询参数**传递数据，而 POST 请求将数据放在**请求体**中传输。
2. 请求长度限制：**GET 请求有 URL 长度限制**，通常在 2048 个字符左右，而 POST 请求没有长度限制。
3. 安全性：GET 请求的参数**暴露在 URL 中**，不适合传输敏感信息；POST 请求的参数在请求体中，相对更安全。
4. 缓存：**GET 请求可以被浏览器缓存**；POST 请求不会被缓存。
5. 使用场景：**GET 适合获取数据，POST 适合提交数据。**

<br/>

## 说一下 ajax

`AJAX`是一种用于在 Web 应用程序中进行异步数据交互的技术。它允许在不刷新整个页面的情况下，通过后台服务器与前端进行数据交换和更新。

使用 AJAX ，可以通过 JavaScript 发送 HTTP 请求到服务器，并在后台处理数据，然后将响应返回给前端。这使得网页能够实时地获取和展示数据，而无需刷新整个页面。

AJAX 的核心是`XMLHttpRequest`对象，它是浏览器提供的用于发送 HTTP 请求和接收响应的**API**。通过创建一个 `XMLHttpRequest` 对象，可以指定**请求的 URL、请求方法（如 GET 或 POST）、发送的数据**等。然后，可以**监听 XMLHttpRequest 对象的状态变化事件**，并在请求完成后处理服务器返回的数据。

**AJAX 的优点包括：**

- 提升用户体验：可以在不刷新整个页面的情况下更新部分内容。
- 使用异步方式与服务器通信，具有更加迅速的响应能力。
- 提高性能：可以减少服务器负载和客户端资源消耗。

**1.创建 AJAX[对象](http://www.php.cn/wiki/60.html)**

```js
var xmlHttp = new XMLHttpRequest();
```

**2.建立连接 （‘提交方式'，‘Url 地址'）**

```js
xmlHttp.open("get", "./AJAX_XML.xml");
```

**3.判断 ajax 准备状态及[状态码](http://www.php.cn/code/8546.html)**

```js
xmlHttp.onreadystatechange = function () {};
```

**4.发送请求**

```js
xmlHttp.send(null); //get方式参数为null,post方式，参数为提交的参数
```

<br/>

## 前端优化

**页面渲染优化**

1. 减少页面重绘和回流；

2. 图片压缩，采用精灵图；

3. 图片懒加载；

4. v-if 和 v-show 区分使用场景；

5. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if

6. keep-alive 缓存页面

7. 防抖、节流

8. 无用事件的销毁；

**打包优化**

1. webpack 缩小打包域
2. sourceMap 优化
3. 配置 image-webpack-loader 对图片进行压缩
4. 模板预编译
5. happypack、thread-loader 多线程打包
6. 利用 plugin 对 HTML、JS、CSS 进行压缩
7. 减少 ES6 转为 ES5 的冗余代码
8. tree shaking
9. 开启文件缓存

**总体优化**

1. SSR 服务端渲染。

2. 开启 gzip 压缩

3. 组件按需引入、动态加载

4. 组件异步加载

5. 路由懒加载

6. CDN 内容分发

7. 骨架屏

<br/>

## 前端工程化: vite 与 webpack

Vite 和 Webpack 都是常用的前端工程化工具，它们有以下区别：

1. **构建速度**：Vite 在开发环境下使用了基于 ES 模块的原生 ESM 导入方式，利用浏览器的原生模块解析能力，实现了快速的冷启动和热更新，因此具有更快的构建速度。而 Webpack 采用传统的打包方式，需要将所有资源打包成一个或多个 bundle 文件，构建速度相对较慢。

2. **开发体验**：Vite 支持按需编译，只编译当前正在开发的文件，提供了更快的热重载和快速刷新功能。Webpack 相对于 Vite 来说稍慢一些。

3. **配置复杂度**：Vite 使用了现代化的配置方式，无需繁琐的配置即可进行开发和构建。而 Webpack 则需要更详细的配置文件。

4. **生态系统**：Webpack 拥有庞大的生态系统和丰富的插件，可以满足各种复杂的构建需求。而 Vite 相对较新，生态系统相对较小。

<br/>

## Vue3 中 setup 里面使用哪两个变量实现数据监听

在 Vue 3 中，可以使用`ref`和`reactive`这两个函数来实现数据的监听和响应。

1. `ref`：用于创建一个可变的响应式数据。它接受一个初始值作为参数，并返回一个包装后的对象。通过`.value`访问和修改这个响应式数据。
2. `reactive`：用于创建一个对象类型的响应式数据。它接受一个普通对象作为参数，并返回一个包装后的响应式对象。通过直接访问属性来访问和修改响应式对象的数据。

<br/>

## 设计模式

以下是几种常见的设计模式及其实现原理：

1. **单例模式（Singleton Pattern）**：确保一个类只有一个实例。实现原理是通过将类的构造函数私有化，使得外部无法直接创建对象，然后在类内部维护一个静态变量来保存唯一的实例，并提供一个静态方法来获取该实例。
2. **工厂模式（Factory Pattern）**：定义一个用于创建对象的接口，但具体创建哪个对象由子类决定。实现原理是通过定义一个工厂类，该类包含一个创建对象的方法，根据不同的参数或条件返回不同的具体对象。
3. **观察者模式（Observer Pattern）**：定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会收到通知并自动更新。实现原理是通过定义一个主题（Subject）和多个观察者（Observer），主题维护一个观察者列表，当主题的状态发生改变时，遍历观察者列表并调用观察者的更新方法。
4. **策略模式（Strategy Pattern）**：定义了一系列算法，并将每个算法封装起来，使它们可以互相替换。实现原理是通过创建一个接口或类，然后针对不同的算法实现需要选择合适的类。

<br/>

## diff 算法

**原理**：
在新老虚拟 DOM 对比时：

- 首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换
- 如果为相同节点，进行 patchVnode，，先判断一方有子节点而另一方没有子节点的情况
- 如果新的 children 节点没有子节点，则将旧的 children 节点移除
- 如果旧的 children 节点没有子节点，则将添加新的子节点
- 如果都有子节点，则进行 updateChildren，这是一个双端指针比对方式，会从子节点的两端往中间靠拢对比。

<br/>

## JS 作用域

> JavaScript 的作用域规定了变量和函数在代码中的可访问范围。作用域可以分为**全局作用域**和**局部作用域**（函数作用域）。

1. 全局作用域：全局作用域是指在整个代码中都可以访问的变量和函数。在浏览器环境中，全局作用域通常是指`window`对象。

2. **局部作用域（函数作用域）**：局部作用域是指在**函数内部定义的变量和函数**，只能在函数内部访问。每当函数被调用时，会创建一个新的局部作用域。

在查找变量或函数时，JavaScript 遵循一种称为"词法作用域"的规则，即根据代码中变量或函数的声明位置来确定其所属的作用域。

**当需要访问一个变量或函数时，JavaScript 引擎会按照以下顺序进行作用域查找：**

1. 首先，在**当前作用域**中查找变量或函数。如果找到了，则直接使用。

2. 如果在当前作用域中没有找到，就会向**上一级作用域（父级作用域）**继续查找，直到找到该变量或函数，或者达到**全局作用域**。

3. 如果在全局作用域中仍然没有找到，那么该变量或函数就被认为是**未定义的**。

当存在多个嵌套的函数时，作用域查找会按照上述规则进行**层层向上查找**。即先在当前函数的作用域中查找，如果没有找到，则继续向上一级函数的作用域查找，直到找到或者达到**全局作用域**。

需要注意的是，在 ES6 之前，JavaScript 只有全局作用域和函数作用域，没有块级作用域。而在 ES6 中引入了`let`和`const`关键字，使得我们可以直接在块级作用域中声明变量。

> **块级作用域:**
>
> 块级作用域是指在代码中由一对花括号 {} 包围的区域，其中声明的变量和函数只在该区域内部有效，并且在区域外部无法访问。
