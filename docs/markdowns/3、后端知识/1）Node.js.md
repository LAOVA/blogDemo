# Node.js

## Node.js 简介

Node.js 是一个基于 Chrome v8 引擎的 JavaScript 运行环境。是一个基于 ChromeV 8 引擎的 JavaScript 运行环境。

### Node.js 中的 JavaScript 运行环境

![image-20230303092141792](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727670.png)

## fs 文件系统模块

fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

![image-20230303094321264](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727699.png)

### 读取指定文件中的内容

**fs.redFile()**

![image-20230303094826614](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727323.png)

![image-20230303095732339](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727378.png)

### 向指定的文件中写入内容

**fs.writeFile()**

- fs.writeFile()方法只能用来创建文件，不能用来创建路径
- 重复调用 fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容

![image-20230303095901753](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727178.png)

![image-20230303100051728](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151738999.png)

### fs 模块-路径动态拼接问题

在使用 fs 模块操作文件时，如果提供的操作路径是以**./或../开头的相对路径**时，很容易出现路径动态拼接错误的问是原因:代码在运行的时候，会**以执行 node 命令时所处的目录**，动态拼接出被操作文件的完整路径。

**解决方案：**在使用 fs 模块操作文件时，直接提供**完整的路径**，不要提供，或../开头的相对路径，从而防止路径动态拼接的问题。

![image-20230303100814783](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727307.png)

## path 路径模块

path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

![image-20230303101157285](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727510.png)

### 路径拼接

**path.join()**

![image-20230303101314832](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727167.png)

### 获取路径中的文件名

**path.basename()**

![image-20230303101624704](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727247.png)

![image-20230303101703461](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727101.png)

### 获取路径中的文件拓展名

**path.extname()**

![image-20230303101934313](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151727865.png)

## http 模块

http 模块是 Nodejs 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer()方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

```js
const http = require("http");
```

### 服务器相关的概念

> **IP 地址**

![image-20230303111000250](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728244.png)

> **域名和域名服务器**

![image-20230303111040472](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728064.png)

> **端口号**

![image-20230303111931466](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728068.png)

### 创建最基本的 web 服务器

> **创建 web 服务器的基本步骤**

1. 导入 http 模块
2. 创建 web 服务器实例
3. 为服务器实例绑定 request 事件，监听客户端的请求
4. 启动服务器

![image-20230303112044563](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728513.png)

![image-20230303112058647](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728719.png)

![image-20230303112134990](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728862.png)

![image-20230303112223219](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728645.png)

> **req 请求对象**

![image-20230303113350840](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728671.png)

> **res 响应对象**

![image-20230303113528504](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728472.png)

> **解决中文乱码问题**

![image-20230303114142300](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728392.png)

## 模块化

**模块化**是指解决一个复杂问题时，自顶向下逐层把**系统划分成若干模块的过程**。对于整个系统来说，**模块是可组合、分解和更换的单元**。

> **编程领域中的模块化**

编程领域中的模块化，就是**遵守固定的规则**，把一个大文件拆成**独立并互相依赖**的多个小模块。
**把代码进行模块化拆分的好处:**

1. 提高了代码的复用性
2. 提高了代码的可维护性
3. 可以实现按需加载

> **模块化规范**

模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。

**模块化规范的好处**：大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利艺。

### 模块的分类

Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是:

- **内置模块**（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）
- **自定义模块**（用户创建的每个.js 文件，都是自定义模块）
- **第三方模块**（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）

### 模块的加载

![image-20230303150324492](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728345.png)

**注意：**

- 使用 require 方法加载其它模块时，会执行被加载模块中的代码。
- 注意:在使用 require 加载用户自定义模块期间，可以省略.js 的后缀名

### 模块作用域

和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前**模块内**被访问，这种**模块级别的访问限制**，叫做**模块作用域**。

**模块作用域的好处：防止了全局变量污染的问题**

> **向外共享作用域中的成员**

1. **module 对象**![image-20230303151119464](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728310.png)

2. **module.exports 对象**

   在自定义模块中，可以使用`module.exports` 对象，将模块内的成员共享出去，供外界使用。
   外界用`require()`方法导入自定义模块时，得到的就是`module.exports` 所指向的对象。

   ![image-20230303151521845](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728976.png)

   **共享成员时的注意点**![image-20230303152248102](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728836.png)

3. **exports 对象**![image-20230303152446607](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728244.png)

   **exports 和 module.exports 的使用误区**![image-20230303153036552](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728501.png)

### 模块化规范

Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖。
**CommonJS 规定：**

1. 每个模块内部,module 变量代表当前模块。
2. module 变量是一个对象，它的 exports 属性(即 module.exports）是对外的接口。
3. 加载某个模块，其实是加载该模块的 module.exports 属性。require()方法用于加载模块。

### 模块的加载机制

**优先从缓存中加载**

**模块在第一次加载后会被缓存**。这也意味着多次调用**require()**不会导致模块的代码被执行多次。
注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而**提高模块的加载效率**。

**内置模块的加载机制**

内置模块是由 Node.js 官方提供的模块，**内置模块的加载优先级最高**。
例如，require('fs')始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs。

**自定义模块的加载机制**

使用 require()加载**自定义模块**时，必须指定**以./或../开头的路径标识符**。在加载自定义模块时，如果**没有指定./或../这样的路径标识符**，则 node 会把它当作**内置模块或第三方模块**进行加载。

同时，在使用 require()导入自定义模块时，如果**省略了文件的扩展名**，则 Node.js 会按顺序分别尝试加载以下的文件:

1. 按照确切的**文件名**进行加载
2. 补全**.js**扩展名进行加载
3. 补全 **.json**扩展名
4. 进行加载补全**.node**扩展名进行加载
5. 加载失败，终端**报错**

**第三方模块的加载机制**

如果传递给 require()的模块标识符不是一个内置模块，也没有以‘/”或‘../”开头，则 Nodejs 会从当前模块的父目录开始，尝试从/node_modules 文件夹中加载第三方模块。
**如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。**
例如，假设在'C:A\Users\itheimalprojectIfoojs'文件里调用了**require('tools')**，则 Node.js 会按以下顺序查找:

1. C:\Users\itheima\project\node_modules\tools
2. C\Users\itheimanode_modules\tools
3. CA\Users\node_modules\tools
4. C:\node_modules\tools

**目录作为模块**

当把**目录作为模块标识符**，传递给 require()进行加载的时候，有三种加载方式:

1. 在被加载的目录下查找一个叫做**package.json**的文件，并寻找**main 属性**，作为 require()加载的入口
2. 如果目录里没有 package.,json 文件，或者 main 入口不存在或无法解析，则 Node,js 将会试图加载目录下的**indexjs**文件。
3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxo'

## npm 与包

### 包的概念

Node.js 中的第三方模块又叫做包。
就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同。

### 安装包

![image-20230303202940453](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728225.png)

![image-20230303203301730](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728439.png)

### 包的语义化版本规范

![image-20230303203421716](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728234.png)

### 规范的包结构

一个规范的包，它的组成结构，必须符合以下 3 点要求：

1. 包必须以**单独的目录**而存在
2. 包的顶级目录下要必须包含**package.json**这个包管理配置文件
3. package.json 中必须包含**name，version，main**这三个属性，分别代表**包的名字、版本号、包的入口**。

### 包配置文件

> - **node_modules** 文件夹用来存放所有**已安装到项目中的包**。require()导入第三方包时，就是从这个目录中查找并加载包。
> - **package-lock.json** 配置文件用来**记录 node modules 目录下的每一个包的下载信息**，例如包的名字、版本号、下载地址等。

### 包管理配置文件

![image-20230303203635523](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728360.png)

![image-20230303203908845](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728888.png)

### 项目初始化

```powershell
npm init -y

npm i ....
```

**devDependencies 节点**

如果某些包只在**项目开发阶段**会用到，在**项目上线之后**不会用到，则建议把这些包记录到 devDependencies 节点中。与之对应的，如果某些包在**开发**和**项目上线之后**都需要用到，则建议把这些包记录到**dependencies 节点**中。

![image-20230303204755174](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728096.png)

> **快速创建 package.json**

![image-20230303204057727](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728668.png)

> **一次性安装所有的包**

![image-20230303204342055](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728428.png)

> **卸载包**

![image-20230303204424827](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151728041.png)

### 淘宝 NPM 镜像服务器

![image-20230303205004268](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729751.png)

> **切换 npm 的下包镜像源**

![image-20230303205117558](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729240.png)

> **nrm**

![image-20230303205202105](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729915.png)

### 包的分类

> **项目包**
>
> 那些被安装到项目的 node_modules 目录中的包，都是项目包。

![image-20230303205420114](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729368.png)

> **全局包**
>
> 在执行 npm install 命令时，如果提供了-g 参数，则会把包安装为全局包。
>
> 全局包会被安装到 C\Users\用户目录\AppData\Roaming\npm\node_modules 目录下。

![image-20230303205601318](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729141.png)

> **i5ting_toc**
>
> i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具,

![image-20230303205715328](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729361.png)

### 格式化时间包 moment

![image-20230303202908815](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729480.png)

### 开发包

> **初始化包的基本结构**

1. 新建 itheima-tools 文件夹，作为**包的根目录**

2. 在 itheima-tools 文件夹中，新建如下三个文件：

   - ​ package.json（包管理配置文件）

   - ​ index.js（包的入口文件）

   - ​ README.md（包的说明文档）

> **初始化 package.json**

```json
{
  "name": "user-tools",
  "version": "1.0.0",
  "main": "index.js",
  "description": "提供了格式化时间、HTMLEscape相关的功能",
  "keywords": ["dateFormat", "escape"],
  "license": "ISC"
}
```

> **在 index.js 中定义方法**

```js
// 包的入口文件
// 定义格式化时间的函数
function dateFormat(date) {
  const dt = new Date(date);
  const y = dt.getFullYear();
  console.log(y);
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());
  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}-${mm}-${ss}`;
}

// 补零函数
function padZero(n) {
  return n > 9 ? n : "0" + n;
}

// 定义转义HTML字符的函数
function htmlEscape(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
// 定义还原HTML字符串的函数
function htmlUnescape(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

// 向外抛出成员
module.exports = {
  dateFormat,
  htmlEscape,
  htmlUnescape,
};
```

> 在 js 项目中引用包

```js
const user = require("./user-tools");

// 格式化时间的功能
const dtStr = user.dateFormat(new Date());
console.log(dtStr);
// 转义字符
const htmlStr = '<h1 title="abc>这是h1标签<span>123&nbsp;</span></h1>';
const str = user.htmlEscape(htmlStr);
console.log(str);
console.log(user.htmlUnescape(str));
```

> **编写包的说明文档**

包根目录中的**README.md**文件，是**包的使用说明文档**。通过它，我们可以事先把包的使用说明，以 markdown 的格式写出来，方便用户参考。
README 文件中具体写什么内容，没有强制性的要求;只要能够清晰地把包的作用、用法、注意事项等描述清楚即可。我们所创建的这个包的 README.md 文档中，会包含以下 6 项内容:
**安装方式、导入方式、格式化时间、转义 HTML 中的特殊字符、还原 HTML 中的特殊字符、开源协议**。

> **发布包**

**登录 npm 账号**

![image-20230303215750062](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729706.png)

**把包发布到 npm 上**

![image-20230303215925666](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729336.png)

**删除已发布的包**

![image-20230303220008357](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729467.png)

> **模块化拆分**

1. 将格式化时间的功能，拆分到 src -> dateFormat.js 中
2. 将处理 HTML 字符串的功能，拆分到 src -> htmlEscape.js 中
3. 在 index.js 中，导入两个模块，得到需要向外共享的方法（使用"..."来展开对象）![image-20230303215251403](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729140.png)
4. 在 index.js 中，使用 module.exports 把对应的方法共享出去

## Express

官方给出的概念：Express 是基于 Node.js 平台，快速、开放、极简的**Web 开发框架**。

通俗的理解：Express 的作用和 Node.,js 内置的 http 模块类似，是专门用来创建 Web 服务器的。

Express 的本质：就是一个**npm 上的第三方包**，提供了**快速创建 Web 服务器**的便捷方法。

![image-20230304100054255](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729040.png)

### Express 的基本使用

> **安装**

```powershell
npm i express
```

> **创建基本的 Web 服务器**

```js
// 导入 express
const express = require("express");
// 创建web服务器
const app = express();
// 启动服务器
app.listen(80, () => {
  console.log("runing at http://127.0.0.1 ....");
});
```

> **监听 GET/POST 请求，把内容响应给客户端**

```js
// 监听客户端的GET 和 POST 请求，并向客户端响应具体的内容
app.get("/user", (req, res) => {
  //调用express 提供的res.send()方法，向客户端响应一个JSON 对象
  res.send({ name: "zs", age: 20, gender: "男" });
});
app.post("/user", (req, res) => {
  // 调用express 提供的res.send()方法，向客户端响应一个文本字符串
  res.send("请求成功");
});
```

> **获取 URL 中携带的查询参数**

![image-20230304103833954](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729096.png)

> **获取 URL 中的动态参数**

![image-20230304104003256](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729596.png)

### 托管静态姿态资源

**express.static()**

![image-20230304104300525](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729204.png)

**托管多个静态资源目录**

![image-20230304104813766](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729095.png)

**挂载路径前缀**

![image-20230304105004528](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729733.png)

### nodemon

在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐,现在，我们可以使用 nodemon (https://www.npmjs.com/package/nodemon)这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

> **安装 nodemon**

![image-20230304105700476](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729500.png)

> **使用 nodemon**

![image-20230304105733567](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729437.png)

### Express 路由

广义：路由就是**映射关系**

**Express 中的路由**

在 Express 中，路由指的是**客户端的请求**与**服务器处理函数**之间的**映射关系**。

![image-20230304110045741](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729600.png)

**路由的匹配过程**

![image-20230304110358493](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729271.png)

**路由的使用**

1. **最简单的用法**![image-20230304110659081](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729181.png)
2. **模块化路由**![image-20230304110838838](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151739886.png)![image-20230304110927883](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729110.png)![image-20230304111447791](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729233.png)

**app.user()**

app.use 函数的作用，就是来**注册全局中间件**

```js
// 访问静态资源
app.use("/static", express.static("./public"));

// 导入路由模块
const router = require("./router.js");
// 注册路由模块
app.use(router);
```

**为路由模块添加前缀**

![image-20230304112210952](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729611.png)

### Express 中间件

中间件(Middleware )，特指**业务流程**的**中间处理环节**。

**中间件调用流程**

![image-20230304144014116](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151729687.png)

**中间件格式**

![image-20230304144225342](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730991.png)

**中间件的作用**

多个中间件之间，**共享同一份 req 和 res**。基于这样的特性，我们可以在**上游**的中间件中，统一**为 req 或 res 对象添加自定义的属性或方法**，供**下游的中间件或路由**进行使用。

![image-20230304145547978](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730742.png)

**next 函数**

作用：next 函数是实现**多个中间件连续调用**的关键，它表示把流转关系**转交**给下一个**中间件或路由**。

![image-20230304144339413](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730915.png)

> **定义中间件函数**

```js
// 定义简单中间件函数
const mw = function (req, res, next) {
  console.log("mw");
  // 把流转关系转交给下一个中间件或路由
  next();
};
```

> **全局生效的中间件**

客户端发起的任何**请求**，到达服务器之后，**都会触发的中间件**，叫做全局生效的中间件。
通过调用**app.use(中间件函数)**，即可定义一个**全局生效**的中间件

```js
// 定义简单中间件函数
const mw = function (req, res, next) {
  console.log("mw");
  // 把流转关系转交给下一个中间件或路由
  next();
};

// 将mw注册为全局生效的中间件
app.use(mw);
```

> **定义全局中间件的简化形式**

```js
// 简化形式
app.use((req, res, next) => {
  console.log("this is mw");
  next();
});
```

> **定义多个全局中间件**

可以使用**app.use()连续定义**多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的**先后顺序**依次进行

```js
// 第一个中间件
app.use((req, res, next) => {
  console.log("this is the first mw");
  next();
});

// 第二个中间件
app.use((req, res, next) => {
  console.log("this is the second mw");
  next();
});
```

> **局部生效的中间件**

不使用 app.use()定义的中间件，叫做**局部生效**的中间件，

```js
// 定义局部中间件
const mw1 = function (req, res, next) {
  console.log("this is mw1");
  next();
};

app.get("/user", mw1, (req, res) => {
  res.send("user page");
});
```

> **定义多个局部中间件**

按顺序执行中间件

```js
// 定义局部中间件
const mw1 = function (req, res, next) {
  console.log("this is mw1");
  next();
};
const mw2 = function (req, res, next) {
  console.log("this is mw2");
  next();
};

app.get("/user", [mw1, mw2], (req, res) => {
  res.send("user page");
});
```

**中间件使用注意事项**

1. 一定要在**路由之前**注册中间件
2. 客户端发送过来的请求，**可以连续调用多个**中间件进行处理
3. 执行完中间件的业务代码之后，**不要忘记调用 next()函数**
4. 为了**防止代码逻辑混乱**，调用 next()函数后不要再写额外的代码
5. 连续调用多个中间件时，多个中间件之间，**共享**req 和 res 对象

**中间件的分类**

- \***\*应用级别**的中间件**：通过 app.use()或 app.get()或 app.post()，**绑定到 app 实例上的中间件\*\*，叫做应用级别的中间件。 ![image-20230304151842593](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730102.png)
- \***\*路由级别**的中间件**：绑定到**express.Router()**实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，**应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上\*\*。![image-20230304152121083](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730891.png)
- \***\*错误级别**的中间件**：需要**放在所有路由之后\*\*![image-20230304152326173](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730191.png)
- \***\*Express 内置**的中间件\*\*![image-20230304152551190](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730109.png)
- \***\*第三方**中间件\*\*![image-20230304155223516](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730153.png)

**自定义中间件**![image-20230304155330331](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730861.png)

> **定义中间件**

```js
// 自定义解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件业务逻辑
});
```

> **监听 req 的 data 事件**

在中间件中，需要监听 req 对象的 data 事件，来获取客户端发送到服务器的数据。
如果数据量比较大，无法一次性发送完毕，则客户端会把**数据切割后，分批发送到服务器**。所以 data 事件可能会**触发多次**，每一次触发 data 事件时，获取到数据只是**完整数据的一部分**，需要手动对接收到的数据进行拼接。

```js
let str = "";
// 定义字符串接受请求体数据
req.on("data", (chunk) => {
  str += chunk;
});
```

> **监听 req 的 end 事件**

当请求体数据**接收完毕**之后，会自动触发 req 的 end 事件。
因此，我们可以在 req 的 end 事件中，**拿到并处理完整的请求体数据**。

```js
req.on("end", () => {
  console.log(str);
});
```

> **使用 querystring 模块解析请求体数据**

Node.js 内置了一个**querystring**模块，专门用来处理查询字符串。通过这个模块提供的**parse()**函数，可以轻松**把查询字符串，解析成对象的格式**。

```js
req.on("end", () => {
  console.log(str);
  // 将字符串格式的请求体数据，解析成对象格式
  const body = qs.parse(str);
  console.log(body);
});
```

> **将解析出来的数据对象挂载为 req.body**

上游的中间件和下游的中间件及路由之间，**共享同一份 req 和 res**。因此，我们可以将解析出来的数据，**挂载为 req 的自定义属性**，命名为 req.body，供下游使用。

```js
req.on("end", () => {
  console.log(str);
  // 将字符串格式的请求体数据，解析成对象格式
  const body = qs.parse(str);
  // console.log(body);
  req.body = body;
  next();
});
```

> **将自定义中间件封装为模块**

为了优化代码的结构，我们可以把自定义的中间件函数，**封装为独立的模块**。

```js
// 导入querystring 模块
const qs = require("querystring");

// 自定义解析表单数据的中间件
const bodyParser = (req, res, next) => {
  // 定义中间件业务逻辑
  let str = "";
  // 定义字符串接受请求体数据
  req.on("data", (chunk) => {
    str += chunk;
  });
  req.on("end", () => {
    // console.log(str);
    // 将字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str);
    // console.log(body);
    req.body = body;
    next();
  });
};
module.exports = bodyParser;

// 导入封装的中间件模块
const myBodyParser = require("./my-body-parser");
app.use(myBodyParser);
```

### 使用 Express 写接口

> **创建基本的服务器**

```js
// 导入express模块;
const express = require("express");
// 创建express的服务器实例;
const app = express();

// 启动web服务器;
app.listen(80, () => {
  console.log("Express server running at http://127.0.0.1");
});
```

> **创建 API 路由模块**

```js
const express = require("express");
const apiRouter = express.Router();
// 挂载对应的路由
module.exports = apiRouter;

// 导入路由模块
const apiRouter = require("./apiRouter.js");
// 把路由模块，注册到app上
app.use("/api", apiRouter);
```

> **编写 GET 接口**

```js
apiRouter.get("/get", (req, res) => {
  // 获取客户端查询字符串
  const query = req.query;
  // 向客户端响应处理结果
  res.send({
    status: 0, // 0 表示处理成功，1表示处理失败
    msg: "GET请求成功",
    data: query, // 需要响应给客户端的数据
  });
});
```

> **编写 POST 接口**

注意:如果要获取 URL-encoded 格式的请求体数据，必须配置中间件 **app.use(express.urlencoded({extended:false})**

```js
apiRouter.post("/post", (req, res) => {
  // 获取客户端请求体
  const body = req.body;
  // 向客户端响应处理结果
  res.send({
    status: 0, // 0 表示处理成功，1表示处理失败
    msg: "POST请求成功",
    data: body, // 需要响应给客户端的数据
  });
});

// 配置解析表单数据的中间件
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
```

### cors 跨域资源共享

> **CORS**
>
> CORS (Cross-Origin Resource Sharing，跨域资源共享）由一系列**HTTP 响应头**组成，这些**HTTP 响应头决定浏览器是否阻止前端 JS 代码跨域获取资源**。
>
> 浏览器的**同源安全策略**默认会阻止网页“跨域”获取资源。但如果接口服务器**配置了 CORS 相关的 HTTP 响应头**，就可以**解除浏览器端的跨域访问限制**。

![image-20230304202223931](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730104.png)

\***\*接口的跨域问题\*\***

解决接口跨域问题的方案主要有两种：

1. **CORS**(主流的解决方案，推荐使用)
2. **JSONP**(有缺陷的解决方案:只支持 GET 请求)

**使用 cors 中间件解决跨域问题**

cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。使用步骤分为如下 3 步：

1. 运行**npm install cors**安装中间件
2. 使用**const cors = require('cors')** 导入中间件
3. 在**路由之前调用 app.use(cors())** 配置中间件

```ts
// 在路由前，配置cors中间件，解决接口跨域问题
const cors = require("cors");
app.use(cors());
```

**CORS 的注意事项**

1. CORS 主要在**服务器端**进行配置。客户端浏览器**无须做任何额外的配置**，即可请求开启 CORS 的接口。
2. CORS 在浏览器中**有兼容性**。只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了 CORS 的服务端接口(例如:IE10+、Chrome4+、FireFox3.5+)。

**CORS 响应头部**

**（- Access-Control-Allow-Origin）**

![image-20230304203415925](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730551.png)

**（– Access-Control-Allow-Headers）**

默认情况下，CORS 仅支持**客户端向服务器**发送如下的 9 个请求头：
Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width ,Content-Type(值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一)

如果客户端向服务器**发送了额外的请求头信息**，则需要在服务器端，通过**Access-Control-Allow-Headers**对额外的请求头进行声明，否则这次请求会失败！
![image-20230304203958477](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730219.png)

**（- Access-Control-Allow-Methods）**

默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。

如果客户端希望通过**PUT、DELETE**等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods 来**指明实际请求所允许使用的 HTTP 方法**。

![image-20230304205323084](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730445.png)

**简单请求**

1. **请求方式**：GET、POST、HEAD 三者之一
2. **HTTP 头部信息**不超过以下几种字段：**无自定义头部字段**、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type (只有三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain)

**预检请求**

只要符合以下任何一个条件的请求，都需要进行预检请求：

1. 请求方式为**GET、POST、HEAD 之外的请求 Method 类型**
2. 请求头中包含**自定义头部字段**
3. 向服务器发送了**application/json**格式的数据

在浏览器与服务器正式通信之前，浏览器会**先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求**，所以这一次的 OPTION 请求称为“预检请求”。**服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据**。

**简单请求和预检请求的区别**

**简单请求的特点**：客户端与服务器之间**只会发生一次请求**。

**预检请求的特点**：客户端与服务器之间会发生两次请求，**OPTION 预检请求成功之后，才会发起真正的请求**。

### JSONP 接口

**概念 ∶**浏览器端通过`<script>`标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。

**特点:**

1. JSONP 不属于真正的 Ajax 请求，因为它没有使用 XMLHttpRequest 这个对象。
2. JSONP 仅支持 GET 请求，不支持 POST、PUT、DELETE 等请求。

**创建 JSONP 接口的注意事项**

如果项目中**已经配置了 CORS** 跨域资源共享，为了**防止冲突**，**必须在配置 CORS 中间件之前声明 JSONP 的接口**。否则 JSONP 接口会被处理成开启了 CORS 的接口。

**实现 JSONP 接口的步骤**

1. **获取**客户端发送过来的**回调函数的名字**
2. **得到**要通过 JSONP 形式**发送给客户端的数据**
3. 根据前两步得到的数据，**拼接出一个函数调用的字符串**
4. 把上一步拼接得到的字符串，响应给客户端的`<script>`标签进行解析执行

```js
// 必须在配置cors中间件之前，配置JSONP的接口
app.get("/api/jsonp", (req, res) => {
  // 得到函数名称
  const funcName = req.query.callback;
  // 定义发送到客户端的数据对象
  const data = { name: "ww", age: 21 };
  // 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  // 把拼接的字符串，响应给客户端
  res.send(scriptStr);
});

// 在路由前，配置cors中间件，解决接口跨域问题
const cors = require("cors");
app.use(cors());
```

**在网页中使用 jQuery 发起 JSONP 请求**

```js
// 测试JSONP接口
$("#btnJSONP").click(function () {
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1/api/jsonp",
    dataType: "jsonp",
    success: (res) => {
      console.log(res);
    },
  });
});
```

## 数据库

数据库（database）是用来**组织、存储和管理**数据的仓库。

**常见数据库及分类**

市面上的数据库有很多种，最常见的数据库有如下几个：

- MySQL 数据库（目前使用最广泛、流行度最高的开源免费数据库;Community + Enterprise)
- Oracle 数据库（收费)
- sQL Server 数据库（收费)
- Mongodb 数据库(Community + Enterprise)

其中，**MySQL、Oracle、SQL Server**属于**传统型数据库**（又叫做：**关系型数据库**或**SQL 数据库**），这三者的设计理念相同，用法比较类似。

而**Mongodb**属于**新型数据库**（又叫做：**非关系型数据库**或**NoSQL 数据库**），它在一定程度上弥补了传统型数据库的缺陷。

**传统型数据库的数据组织结构**

在传统型数据库中，数据的组织结构分为**数据库(database)、数据表(table)、数据行(row)、字段(field)**这 4 大部分组成。

实际开发中库、表、行、字段的关系：

1. 在实际项目开发中，一般情况下，每个项目都对应独立的数据库。
2. 不同的数据，要存储到数据库的不同表中，例如:用户数据存储到 users 表中，图书数据存储到 books 表中。
3. 每个表中具体存储哪些信息，由字段来决定，例如:我们可以为 users 表设计 id、username、password 这 3 个字段。
4. 表中的行，代表每一条具体的数据。

### MySQL 的基本使用

![image-20230304213946987](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730219.png)

> **使用 SQL 管理数据库**

![image-20230304214118250](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730851.png)

**语法**

![image-20230304214213319](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730290.png)

![image-20230304214315543](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730497.png)

![image-20230304214331172](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730841.png)

![image-20230304214450195](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730035.png)

**SQL 的 WHERE 子句**

![image-20230304214553054](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730535.png)

![image-20230304214634133](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730035.png)

**SQL 的 AND 和 OR 运算符**

![image-20230304214726538](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730745.png)

**SQL 的 ORDER BY 子句**

![image-20230304214831399](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730427.png)

![image-20230304214953125](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730688.png)

**SQL 的 COUNT(\*)函数**

![image-20230304215102623](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730529.png)

![image-20230304215150219](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730285.png)

### 在项目中操作 MYSQL

![image-20230304220435994](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151730554.png)

> **安装 mysql 模块**

```powershell
npm i mysql
```

> **配置 mysql 模块**

```js
// 导入mysql模块
const mysql = require("mysql");
// 建立数据库连接
const db = mysql.createPool({
  host: "127.0.0.1", //数据库IP地址
  port: "3306", //数据库端口号
  user: "root", //数据库用户名
  password: "1234", //数据库密码
  databace: "nodeMysql", //数据库名称
});
```

> **检测 mysql 模块能否正常工作**

```js
// 检测mysql模块能否正常工作
db.query("select 1", (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
});
```

> **查询数据**

```js
// 查询数据
const sqlStr = "select * from user";
db.query(sqlStr, (err, res) => {
  if (err) {
    return console.log(err);
  }
  // 查询语句输出结果为数组形式
  console.log(res);
});
```

> **插入数据**

```js
// 插入语句
const user = { username: "qq", age: "17" };
const sqlStr = "insert into user(username,age) values(?,?)";
db.query(sqlStr, [user.username, user.age], (err, res) => {
  if (err) {
    return console.log(err.message);
  }
  if (res.affectedRows === 1) {
    console.log("插入成功");
  }
});

// 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据
const user = { username: "qq", age: "17" };
const sqlStr = "insert into user set ?";
db.query(sqlStr, user, (err, res) => {
  if (err) {
    return console.log(err.message);
  }
  if (res.affectedRows === 1) {
    console.log("插入成功");
  }
});
```

> **更新数据**

```js
// 更新语句
const user = { username: "qq", age: "10" };
const sqlStr = "update user set age=? where username=?";
db.query(sqlStr, [user.age, user.username], (err, res) => {
  if (err) {
    return console.log(err.message);
  }
  if (res.affectedRows === 1) {
    console.log("更新成功");
  }
});

// 更新表数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速更新表数据:
const user = { username: "qq", age: "100" };
const sqlStr = "update user set ? where username=?";
db.query(sqlStr, [user, user.username], (err, res) => {
  if (err) {
    return console.log(err.message);
  }
  if (res.affectedRows === 1) {
    console.log("更新成功");
  }
});
```

> **删除数据**

```js
// 删除语句
const sqlStr = "delete from user where id = ?";
db.query(sqlStr, 7, (err, res) => {
  if (err) {
    return console.log(err.message);
  }
  if (res.affectedRows === 1) {
    console.log("删除成功");
  }
});
```

![image-20230305101534185](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731508.png)

## 前后端身份验证

### Web 开发模式

> **服务端渲染的 Web 开发模式**

![image-20230305101717530](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731630.png)

**服务端渲染的优缺点**
优点：

1. **前端耗时少**。因为服务器端负责动态生成 HTML 内容，浏览器只需要直接渲染页面即可。尤其是移动端，更省电。
2. **有利于 SEO**。因为服务器端响应的是完整的 HTML 页面内容，所以爬虫更容易爬取获得信息，更有利于 SEO。

缺点：

1. **占用服务器端资源**。即服务器端完成 HTML 页面内容的拼接，如果请求较多，会对服务器造成一定的访问压力。
2. **不利于前后端分离**，开发效率低。使用服务器端渲染，则无法进行分工合作，尤其对于前端复杂度高的项目，不利于项目高效开发。

> **前后端分离的 Web 开发模式**

前后端分离的概念：前后端分离的开发模式，**依赖于 Ajax 技术**的广泛应用。简而言之，前后端分离的 Web 开发模式，就是后端**只负责提供 API 接口**，前端**使用 Ajax 调用接口**的开发模式。

优点：

1. **开发体验好**。前端专注于 U 页面的开发，后端专注于 api 的开发，且前端有更多的选择性。
2. **用户体验好**。Ajax 技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新。
3. **减轻了服务器端的渲染压力**。因为页面最终是在每个用户的浏览器中生成的。

缺点：

1. **不利于 SEO**。因为完整的 HTML 页面需要在客户端动态拼接完成，所以爬虫对无法爬取页面的有效信息。(解决方案：利用 Vue、React 等前端框架的 SSR（server side render)技术能够很好的解决 SEO 问题！）

**如何选择 Web 开发方式**

![image-20230305102308377](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731951.png)

### 身份验证

**身份认证**（Authentication）又称“身份验证”、“鉴权”，是指**通过一定的手段，完成对用户身份的确认**。

不同开发模式下的身份验证：

- **服务端渲染**推荐使用**Session 认证机制**
- **前后端分离**推荐使用**JWT 认证机制**

### Session 认证机制

1. HTTP 协议的**无状态性**

   Http 协议的无状态特性，主要如下特点**Http 协议是无状态，单向的**。

   ​ 无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。

   ​ 从另一方面讲，打开一个服务器上的网页和你之前打开这个服务器上的网页之间没有任何联系。

   ​ 单向性是指 HTTP 协议只允许永远都是客户端发起请求，服务器回送响应，不允许客户端没有发起请求的时候，服务器将消息推送给客户端。

2. **如何突破**HTTP 无状态的限制![image-20230305102840526](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731697.png)

**Cookie**

![image-20230305103052585](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731825.png)

> Cookie 在身份验证中的作用

![image-20230305103202455](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731423.png)

> Cookie 不具有安全性

![image-20230305103525275](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731474.png)

**Seesion 的工作原理**

![image-20220107113924331](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151745813.png)

**在 Express 中使用 Session 认证**

> **安装 express-session 中间件**

```powershell
npm install express-session
```

> **配置 express-session 中间件**

```js
// 配置 Session 中间件
const session = require("express-session");
app.use(
  session({
    secret: "itheima",
    resave: false,
    saveUninitialized: true,
  })
);
```

> **向 seesion 中存数据**

```js
// 登录的 API 接口
app.post("/api/login", (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !** "admin" || req.body.password !** "123456") {
    return res.send({ status: 1, msg: "登录失败" });
  }

  // 将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
  req.session.user = req.body; // 用户的信息
  req.session.islogin = true; // 用户的登录状态

  res.send({ status: 0, msg: "登录成功" });
});
```

> **从 session 中取数据**

```js
// 获取用户姓名的接口
app.get("/api/username", (req, res) => {
  // 从 Session 中获取用户的名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: "fail" });
  }
  res.send({
    status: 0,
    msg: "success",
    username: req.session.user.username,
  });
});
```

> **清空 session**

```js
// 退出登录的接口
app.post("/api/logout", (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy();
  res.send({
    status: 0,
    msg: "退出登录成功",
  });
});
```

### JWT 认证机制

**JWT（英文全称:JSON Web Token）**是目前最流行的**跨域认证解决方案**。

![image-20230305105719487](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731638.png)

**JWT 工作原理**

![image-20230305105931478](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731938.png)

**JWT 的组成部分**

![image-20230305110215014](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731896.png)

![image-20230305110244336](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731894.png)

**JWT 的使用方法**

![image-20230305110347707](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731476.png)

**在 Express 中使用 JWT**

> 安装 JWT 相关的包

![image-20230305110716858](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151731278.png)

> 定义 secret 密钥

为了**保证 JWT 字符串的安全性**，防止 WT 字符串在网络传输过程中被别人破解，我们需要专门定义一个用于**加密和解密的 secret 密钥**：

1. 当生成 JWT 字符串的时候，需要使用 secret 密钥对用户的信息**进行加密**，最终得到加密好的 JWT 字符串
2. 当把 JWT 字符串解析还原成 JSON 对象的时候，需要使用 secret 密钥**进行解密**

```js
// 定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = "itheima No1 ^_^";
```

> 在登录成功后生成 JWT 字符串

```js
// 登录接口
app.post("/api/login", function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body;
  // 登录失败
  if (userinfo.username !** "admin" || userinfo.password !** "123456") {
    return res.send({
      status: 400,
      message: "登录失败！",
    });
  }
  // 登录成功
  // TODO：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  // 参数1：用户的信息对象
  // 参数2：加密的秘钥
  // 参数3：配置对象，可以配置当前 token 的有效期
  // 记住：千万不要把密码加密到 token 字符中
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, {
    expiresIn: "30s",
  });
  res.send({
    status: 200,
    message: "登录成功！",
    token: tokenStr, // 要发送给客户端的 token 字符串
  });
});
```

> 将 JWT 字符串还原为 JSON 对象

客户端每次在访问那些有权限接口的时候，都需要主动通过**请求头中的 Authorization 字段**，将**Token 字符串**发送到服务器进行身份认证。
此时，服务器可以通过**express-jwt**这个中间件，自动将客户端发送过来的 Token**解析还原成 JSON 对象**：

```js
// 注册express-jwt中间件，将 JWT 字符串解析还原成 JSON 对象的中间件，
// 注意：只要配置 express-jwt 中间件，就在相关页面进行解析认证，把解析出来的用户信息，挂载到 req.user 属性上，可通过unless来指定哪些接口不需要解析认证。
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));
```

> 使用 req.user 获取用户信息

```js
// 这是一个有权限的 API 接口
app.get("/admin/getinfo", function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: "获取用户信息成功！",
    data: req.user, // 要发送给客户端的用户信息
  });
});
```

> 捕获解析 JWT 失败后产生的错误

当使用 express-jwt 解析 Token 字符串时，如果客户端发送过来的 Token 字符串**过期或不合法**，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过 **Express 的错误中间件**，捕获这个错误并进行相关的处理。

```js
// 配置全局错误处理中间件，捕获解析 JWT 失败后产生的错误（放到所有接口最后注册）
app.use((err, req, res, next) => {
  // ‘UnauthorizedError’表示这次错误是由 token 解析失败导致的
  if (err.name === "UnauthorizedError") {
    return res.send({
      status: 401,
      message: "无效的token",
    });
  }
  res.send({
    status: 500,
    message: "未知的错误",
  });
});
```
