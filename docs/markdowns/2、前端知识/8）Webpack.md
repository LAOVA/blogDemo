## 前端工程化

前端工程化指的是：在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858676.png" alt="截图" style="zoom:50%;" />

**package.json**

1. dependencies：开发以及上线后所需要的包（-S == --save）
2. devDependencies：仅在开发阶段所需要的包（-D == --save-dev）

<br/>

<br/>

### webpack 的基本使用

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858129.png" alt="截图" style="zoom:50%;" />

#### webpack 安装与配置

**安装**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858043.png" alt="截图" style="zoom:80%;" />

**配置**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858938.png" alt="截图" style="zoom: 80%;" />

mode，用来指定构建模式。可选值有 development（开发模式）和 production（上线阶段）

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858125.png" alt="截图" style="zoom: 80%;" />

**默认约定**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858674.png" alt="截图" style="zoom:50%;" />

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858315.png" alt="截图" style="zoom: 80%;" />

<br/>

#### webpack 中的插件

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858971.png" alt="截图" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858945.png" alt="截图" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858568.png" alt="截图" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858052.png" alt="截图" style="zoom: 80%;" />

#### webpack 中的 loader

loader 加载器的作用：协助 webpack 打包处理特定的文件模块。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858200.png" alt="截图" style="zoom: 67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858988.png" alt="截图" style="zoom: 67%;" />

**loader 的安装与配置**

style-loader、css-loader、less-loader

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858545.png" alt="截图" style="zoom: 67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858905.png" alt="截图" style="zoom:67%;" />

**打包处理图片**

url-loader、file-loader

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858558.png" alt="截图" style="zoom: 80%;" />

<br/>

**loader 的另一种配置方式**

![image-20230412105447276](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858317.png)

**打包处理 js 文件中的高级语法**

babel-loader、babel/core、babel/plugin-proposal-decorators

![image-20230412110042258](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858199.png)

![image-20230412110013122](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151858291.png)

**总结**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859409.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

### 发布

#### 配置 build 命令

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859680.png" alt="截图" style="zoom: 80%;" />

#### 目录划分

![image-20230412110947361](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859136.png)

![image-20230412111007684](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859015.png)

#### 自动清除 dist 目录下的旧文件

在 webpack.config.js 下：

![image-20230412111150710](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859568.png)

### Source Map

![截图](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859723.png)

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859814.png" alt="截图" style="zoom: 80%;" />

<br/>

#### 配置 Source Map

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859051.png" alt="截图" style="zoom: 80%;" />

<br/>

#### 发布时关闭 Source Map

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859254.png" alt="截图" style="zoom: 80%;" />

<br/>

#### 只定位行数不暴露源码

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859692.png" alt="截图" style="zoom: 80%;" />

<br/>

#### 最佳策略

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859194.png" alt="截图" style="zoom: 80%;" />

<br/>

<br/>

### webpack 中‘@’的配置

在 webpack.config.js 的 module.exports = {} 中加入：

```javascript
resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
```

<br/>

<br/>

## 手写 Webpack

### npx

#### **npx 是什么**

npx 是一个由 Node.js 官方提供的用于快速执行 npm 包中的可执行文件的工具。它可以帮助我们在不全局安装某些包的情况下，直接运行该包提供的命令行工具。npx 会在执行时，检查本地项目中是否安装了对应的依赖，如果没有安装则会自动下载安装，并执行命令。如果本地已经存在该依赖，则直接执行命令。

#### **npx 会把远端的包下载到本地吗?**

npx 不会像 npm 或 yarn 一样将包下载到本地的 node_modules 目录中。相反，它会在执行命令时，在本地缓存中寻找并下载包，然后执行该包中的命令。这样可以避免在开发过程中在全局安装大量的包，同时也可以确保使用的是最新版本的包。

#### **npx 执行完成之后， 下载的包是否会被删除？**

npx 会在执行完命令后删除下载的包。这是因为 npx 会在执行命令之前，将需要执行的包下载到一个临时目录中，并在执行完毕后删除该目录。这样可以避免在本地留下不必要的依赖包。如果需要保留依赖包，可以使用--no-cleanup 选项来禁止删除下载的包。

<br/>

### `原理` webpack 如何工作

> - npm init -y 自动生成一个 package.json 依赖包管理文件
> - 如何执行打包命令，如 npx webpack
> - 打包完输出到 dist 目录，通过 html 文件引入并在浏览器上运行
> - npx 可以执行 node_modules 目录下的包
> - 分析打包生成的文件 bundle.js，明白它的结构，以便自己生成一个这样的文件。
> - 实现:执行 xx 命令，从 webpack.config.js 打包项目并生成 bundle.js 结构的文件。

![image-20230723153915040](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859236.png)

<br/>

### 配置 webpack.config.js

```js
let path = require("path");

module.exports = {
  mode: "development", //开发模式
  entry: "./src/index.js", //打包入口
  output: {
    filename: "bundle.js", //打包输出的文件名
    path: path.resolve(__dirname, "dist"), //打包输出的目录
  },
  // module:{
  //   rules:[
  //     {
  //       test:/\.less$/,
  //       use:[
  //         // 从上到下
  //        "style-loader",  //把style写入html
  //        "css-loader",   //css ---> commonJS
  //        "less-loader"  //把less转css
  //       ]
  //     }
  //   ]
  // }
};
```

<br/>

### 生成的 bundl.js

> **分析 bundle.js 文件**
> (fun(modules){处理模块加载})(indexfile:fun，jdfile:fun)
>
> 将引用的文件路径补全，如"./jd"转换后是"./jd.js"
>
> 将 require 替换成 webpack 自定义加载函数\__webpack_require_（递归执行）

```js
(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./src/index.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(
        'let jd = __webpack_require__(/*! ./jd */ "./src/jd.js")\r\n\r\nconsole.log("jd打包工具："+jd)\n\n//# sourceURL=webpack://01/./src/index.js?'
      );
    },

    "./src/jd.js": (module) => {
      eval(
        'let name = "自定义打包工具"\r\n\r\nmodule.exports = name\n\n//# sourceURL=webpack://01/./src/jd.js?'
      );
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
```

<br/>

<br/>

### `01` 创建打包命令 jd-pack

> - 创建命令的目录
> - 生成 package.json
> - 生成命令，npm link(把本地目录创建全局快捷方式)
> - npx jd-pack ---> 全局 ---> 本地

![image-20230723160237894](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859484.png)

#### 命令行执行文件 jd-pack.js

```js
#! /usr/bin/env node

// console.log("jd打包工具");

let path = require("path");
let config = require(path.resolve("webpack.config.js"));

// 导入编译器
let Compiler = require("../lib/Compiler");
let compiler = new Compiler(config);

// 编译
compiler.run();
```

<br/>

#### 编译器配置文件 Compiler.js

```js
let path = require("path");

// 编译器
class Compiler {
  // 接收webpack.config-js配置内容，进行本地化
  constructor(config) {
    this.config = config;
    // 入口目录
    this.entry = config.entry;
    // 当前工作目录
    this.root = process.cwd();
  }

  // 从root节点找到所有的依赖模块
  // modulePath---模块文件路径,isEntry---是否是入口文件
  buildModule(modulePath, isEntry) {
    console.log(modulePath);
  }

  // 执行方法
  run() {
    this.buildModule(path.resolve(this.root, this.entry), true);
  }
}

module.exports = Compiler;
```

<br/>

<br/>

### `02` 查找所有的依赖模块

> - 读取代码内容
> - 读取模块文件相对路径要与 bundle.js 相对应
> - 读取模块文件中子依赖包，首先需要解析当前模块
> - 解析结果：解析的源码 sourceCode，以及是否存在子依赖包 dependencies
> - 代码解析：vue ---> html css js es6 ---> es5

#### 编译器配置文件 Compiler.js

```js
let fs = require("fs");
let path = require("path");

// 编译器
class Compiler {
  // 接收webpack.config-js配置内容，进行本地化
  constructor(config) {
    this.config = config;
    // 入口目录
    this.entry = config.entry;
    this.entryId;
    // 当前工作目录
    this.root = process.cwd();
    // 用来保存所有模块
    this.modules = {};
  }

  // 读取模块文件内容
  getSource(modulePath) {
    // readFileSync() 同步读取文件
    return fs.readFileSync(modulePath, "utf-8");
  }

  // 模块文件解析 source---文件内容， parentPath---文件目录
  parse(source, parentPath) {}

  // 从root节点找到所有的依赖模块
  // modulePath---模块文件路径,isEntry---是否是入口文件
  buildModule(modulePath, isEntry) {
    // console.log(modulePath);

    // 模块文件内容
    let source = this.getSource(modulePath);

    // 使用path.relative将绝对路径分解成相对路径（返回从第一个路径到第二个路径的相对路径），获取模块名
    let moduleName = "./" + path.relative(this.root, modulePath);

    if (isEntry) {
      this.entryId = moduleName;
    }

    // 使用path.dirname来获取模块所在相对目录
    // 解析结果：解析的源码sourceCode，以及是否存在子依赖包dependencies
    let { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moduleName)
    );
    // 保存解析的代码
    this.modules[moduleName] = sourceCode;
    // 递归
    dependencies.forEach((dep) => {
      // 使用path.join来拼接成相对路径
      this.buildModule(path.join(this.root, dep), false);
    });
  }

  // 执行方法
  run() {
    // 使用path.resolve将相对路径拼接成绝对路径
    this.buildModule(path.resolve(this.root, this.entry), true);
  }
}

module.exports = Compiler;
```

<br/>

<br/>

### `03` 模块解析

> - 使用 AST 语法树解析https://astexplorer.net/
> - 如 const n = 1;--->const x = 1;
> - 安装包：`npm i babylon @babel/traverse @babel/types @babel/generator`
> - 将代码中的 require ---> `__webpack_require__`
> - 将 require( "./jd") 补全---> require("./jd.js")
> - 收集 dependencies

#### 编译器配置文件 Compiler.js

```js
let fs = require("fs");
let path = require("path");
//  babylon @babel/traverse @babel/types @babel/generator
let babylon = require("babylon");
let types = require("@babel/types");
// require("xxx").default,相当于import xxx from './xxx'
let traverse = require("@babel/traverse").default;
let generator = require("@babel/generator").default;

// 编译器
class Compiler {
  // 接收webpack.config-js配置内容，进行本地化
  constructor(config) {
    this.config = config;
    // 入口目录
    this.entry = config.entry;
    this.entryId;
    // 当前工作目录
    this.root = process.cwd();
    // 用来保存所有模块
    this.modules = {};
  }

  // 读取模块文件内容
  getSource(modulePath) {
    // readFileSync() 同步读取文件
    return fs.readFileSync(modulePath, "utf-8");
  }

  // 模块文件解析 source---文件内容， parentPath---文件目录
  // 解析结果：解析的源码sourceCode，以及是否存在子依赖包dependencies
  parse(source, parentPath) {
    let dependencies = []; //存储子模块依赖
    // const code = "const n =1"

    // 利用babylon来将源码解析成ast
    const ast = babylon.parse(source);

    // 利用traverse来遍历AST节点，当访问者进入一个节点时就会调用enter(进入)方法
    traverse(ast, {
      CallExpression(p) {
        let node = p.node;
        if (node.callee.name === "require") {
          node.callee.name = "__webpack_require__";
          // 补全拓展名
          let moduleName = node.arguments[0].value;
          // 利用path.extname判断模块名是否包含拓展名
          moduleName = moduleName + (path.extname(moduleName) ? "" : ".js");
          // 使用path.join拼接成相对路径
          moduleName = "./" + path.join(parentPath, moduleName);
          dependencies.push(moduleName);

          // 更新node，将子模块名重写
          node.arguments = [types.stringLiteral(moduleName)];
        }
      },
      // 如const n = 1;--->const x = 1;
      // enter(path){
      //   if(path.isIdentifier({name:'n'})){
      //     console.log(path.node);
      //     path.node.name = 'x'
      //   }
      // }
    });

    // 利用generator来将ast解析成源码
    let sourceCode = generator(ast).code;
    console.log(sourceCode);
    return { sourceCode, dependencies };
  }

  // 从root节点找到所有的依赖模块
  // modulePath---模块文件路径,isEntry---是否是入口文件
  buildModule(modulePath, isEntry) {
    // console.log(modulePath);

    // 模块文件内容
    let source = this.getSource(modulePath);

    // 使用path.relative将绝对路径分解成相对路径（返回从第一个路径到第二个路径的相对路径），获取模块名
    let moduleName = "./" + path.relative(this.root, modulePath);

    if (isEntry) {
      this.entryId = moduleName;
    }

    // 使用path.dirname来获取模块所在相对目录
    let { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moduleName)
    );
    // // 保存解析的代码
    // this.modules[moduleName] = sourceCode;
    // // 递归
    // dependencies.forEach(dep => {
    //   // 使用path.join来拼接成相对路径
    //   this.buildModule(path.join(this.root,dep),false)
    // });
  }

  // 执行方法
  run() {
    // 使用path.resolve将相对路径拼接成绝对路径
    this.buildModule(path.resolve(this.root, this.entry), true);
  }
}

module.exports = Compiler;
```

<br/>

<br/>

### `04` 打包输出

> - 使用模板生成 bundle.js，传入的参数必须是动态
> - 模板 express ejs <%=xxx%> https://ejs.bootcss.com/#install
> - 使用 fs 将生成的文件写入 bundle.js，使用 index.html 引入打开测试与之前 webpack 打包输出一致

#### 待打包 index.js

```js
let jd = require("./jd");

console.log("jd打包工具：" + jd);
```

<br/>

#### 模版命令文件 bundle.ejs

```ejs
 (() => { // webpackBootstrap
  var __webpack_modules__ = ({
    <%for(let key in modules){%>
      "<%-key%>":
      ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        eval(`<%-modules[key]%>`);
        }),
    <%}%>
  });

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }


  var __webpack_exports__ = __webpack_require__("<%=entryId%>");

})()
;
```

#### 编译器配置文件 Compiler.js

```js
let fs = require("fs");
let path = require("path");
//  babylon @babel/traverse @babel/types @babel/generator
let babylon = require("babylon");
let types = require("@babel/types");
// require("xxx").default,相当于import xxx from './xxx'
let traverse = require("@babel/traverse").default;
let generator = require("@babel/generator").default;
// 模版引擎
let ejs = require("ejs");

// 编译器
class Compiler {
  // 接收webpack.config-js配置内容，进行本地化
  constructor(config) {
    this.config = config;
    // 入口目录
    this.entry = config.entry;
    this.entryId;
    // 当前工作目录
    this.root = process.cwd();
    // 用来保存所有模块
    this.modules = {};
  }

  // 读取模块文件内容
  getSource(modulePath) {
    // readFileSync() 同步读取文件
    return fs.readFileSync(modulePath, "utf-8");
  }

  // 模块文件解析 source---文件内容， parentPath---文件目录
  // 解析结果：解析的源码sourceCode，以及是否存在子依赖包dependencies
  parse(source, parentPath) {
    let dependencies = []; //存储子模块依赖
    // const code = "const n =1"

    // 利用babylon来将源码解析成ast
    const ast = babylon.parse(source);

    // 利用traverse来遍历AST节点，当访问者进入一个节点时就会调用enter(进入)方法
    traverse(ast, {
      CallExpression(p) {
        let node = p.node;
        if (node.callee.name === "require") {
          node.callee.name = "__webpack_require__";
          // 补全拓展名
          let moduleName = node.arguments[0].value;
          // 利用path.extname判断模块名是否包含拓展名
          moduleName = moduleName + (path.extname(moduleName) ? "" : ".js");
          // 使用path.join拼接成相对路径
          moduleName = "./" + path.join(parentPath, moduleName);
          dependencies.push(moduleName);

          // 更新node，将子模块名重写
          node.arguments = [types.stringLiteral(moduleName)];
        }
      },
      // 如const n = 1;--->const x = 1;
      // enter(path){
      //   if(path.isIdentifier({name:'n'})){
      //     console.log(path.node);
      //     path.node.name = 'x'
      //   }
      // }
    });

    // 利用generator来将ast解析成源码
    let sourceCode = generator(ast).code;
    // console.log(sourceCode);
    return { sourceCode, dependencies };
  }

  // 从root节点找到所有的依赖模块
  // modulePath---模块文件路径,isEntry---是否是入口文件
  buildModule(modulePath, isEntry) {
    // console.log(modulePath);

    // 模块文件内容
    let source = this.getSource(modulePath);

    // 使用path.relative将绝对路径分解成相对路径（返回从第一个路径到第二个路径的相对路径），获取模块名
    let moduleName = "./" + path.relative(this.root, modulePath);

    if (isEntry) {
      this.entryId = moduleName;
    }

    // 使用path.dirname来获取模块所在相对目录
    let { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moduleName)
    );
    // 保存解析的代码
    this.modules[moduleName] = sourceCode;
    // 递归
    dependencies.forEach((dep) => {
      // 使用path.join来拼接成相对路径
      this.buildModule(path.join(this.root, dep), false);
    });
  }

  // 生成打包文件
  emitFile() {
    // 打包路径
    let main = path.join(this.config.output.path, this.config.output.filename);
    // 获取模版内容
    let templateStr = this.getSource(path.join(__dirname, "bundle.ejs"));
    // 调用模版生成
    let result = ejs.render(templateStr, {
      entryId: this.entryId,
      modules: this.modules,
    });
    // 定义打包文件内容
    this.assets = {};
    this.assets[main] = result; //文件全名---文件内容
    // 输出打包文件
    // console.log(main);
    // console.log( this.assets);
    fs.writeFileSync(main, this.assets[main]);
  }

  // 执行方法
  run() {
    // 使用path.resolve将相对路径拼接成绝对路径
    this.buildModule(path.resolve(this.root, this.entry), true);
    this.emitFile();
  }
}

module.exports = Compiler;
```

#### 生成的 bundle.js

```js
(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./srcindex.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(`let jd = __webpack_require__("./src\\jd.js");
console.log("jd打包工具：" + jd);`);
    },

    "./srcjd.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(`let name = "自定义打包工具";
module.exports = name;`);
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = __webpack_require__("./srcindex.js");
})();
```

<br/>

#### HTML 引入 bundle.js 运行结果

![image-20230724002540146](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151859952.png)

<br/>

<br/>

### `05` 手写 loader（加载器）

> - 作用:转化，less ---> css、vue-->js html css
> - 使用 npx webpack 打包 less
> - 使用自定义的 loader，如 less-loader style-loader
> - 打包时必须使用自定义 loader

#### 待打包 index.js

```js
let jd = require("./jd");

require("./style.less");

console.log("jd打包工具：" + jd);
```

<br/>

#### 编译器配置文件 Compiler.js

```js
let fs = require("fs");
let path = require("path");
//  babylon @babel/traverse @babel/types @babel/generator
let babylon = require("babylon");
let types = require("@babel/types");
// require("xxx").default,相当于import xxx from './xxx'
let traverse = require("@babel/traverse").default;
let generator = require("@babel/generator").default;
// 模版引擎
let ejs = require("ejs");

// 编译器
class Compiler {
  // 接收webpack.config-js配置内容，进行本地化
  constructor(config) {
    this.config = config;
    // 入口目录
    this.entry = config.entry;
    this.entryId;
    // 当前工作目录
    this.root = process.cwd();
    // 用来保存所有模块
    this.modules = {};
  }

  // 读取模块文件内容
  getSource(modulePath) {
    let rules = this.config.module.rules;
    // readFileSync() 同步读取文件
    let content = fs.readFileSync(modulePath, "utf-8");
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      let { test, use } = rule;
      let len = use.length - 1; //loader的总长度-1
      // 判断是否为less文件
      if (test.test(modulePath)) {
        function normalLoader() {
          let loader = require(use[len--]); //从右到左，从下到上
          // 进行转换
          content = loader(content);
          // 递归遍历所有的loader
          if (len >= 0) {
            normalLoader();
          }
        }
        normalLoader();
      }
    }
    return content;
  }

  // 模块文件解析 source---文件内容， parentPath---文件目录
  // 解析结果：解析的源码sourceCode，以及是否存在子依赖包dependencies
  parse(source, parentPath) {
    let dependencies = []; //存储子模块依赖
    // const code = "const n =1"

    // 利用babylon来将源码解析成ast
    const ast = babylon.parse(source);

    // 利用traverse来遍历AST节点，当访问者进入一个节点时就会调用​enter(进入)​​​方法
    traverse(ast, {
      CallExpression(p) {
        let node = p.node;
        if (node.callee.name === "require") {
          node.callee.name = "__webpack_require__";
          // 补全拓展名
          let moduleName = node.arguments[0].value;
          // 利用path.extname判断模块名是否包含拓展名
          moduleName = moduleName + (path.extname(moduleName) ? "" : ".js");
          // 使用path.join拼接成相对路径
          moduleName = "./" + path.join(parentPath, moduleName);
          dependencies.push(moduleName);

          // 更新node，将子模块名重写
          node.arguments = [types.stringLiteral(moduleName)];
        }
      },
    });

    // 利用generator来将ast解析成源码
    let sourceCode = generator(ast).code;
    return { sourceCode, dependencies };
  }

  // 从root节点找到所有的依赖模块
  // modulePath---模块文件路径,isEntry---是否是入口文件
  buildModule(modulePath, isEntry) {
    // console.log(modulePath);

    // 模块文件内容
    let source = this.getSource(modulePath);

    // 使用path.relative将绝对路径分解成相对路径（返回从第一个路径到第二个路径的相对路径），获取模块名
    let moduleName = "./" + path.relative(this.root, modulePath);

    if (isEntry) {
      this.entryId = moduleName;
    }

    // 使用path.dirname来获取模块所在相对目录
    let { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moduleName)
    );
    // 保存解析的代码
    this.modules[moduleName] = sourceCode;
    // 递归
    dependencies.forEach((dep) => {
      // 使用path.join来拼接成相对路径
      this.buildModule(path.join(this.root, dep), false);
    });
  }

  // 生成打包文件
  emitFile() {
    // 打包路径
    let main = path.join(this.config.output.path, this.config.output.filename);
    // 获取模版内容
    let templateStr = this.getSource(path.join(__dirname, "bundle.ejs"));
    // 调用模版生成
    let result = ejs.render(templateStr, {
      entryId: this.entryId,
      modules: this.modules,
    });
    // 定义打包文件内容
    this.assets = {};
    this.assets[main] = result; //文件全名---文件内容
    // 输出打包文件
    fs.writeFileSync(main, this.assets[main]);
  }

  // 执行方法
  run() {
    // 使用path.resolve将相对路径拼接成绝对路径
    this.buildModule(path.resolve(this.root, this.entry), true);
    this.emitFile();
  }
}

module.exports = Compiler;
```

<br/>

#### 自定义 less-loader.js

```js
let less = require("less");

function loader(sourceLess) {
  let css = "";
  less.render(sourceLess, function (err, res) {
    css = res.css;
  });
  // 将\n改为\\n
  css = css.replace(/\n/g, "\\n");

  return css;
}

module.exports = loader;
```

<br/>

#### 自定义 style-loader.js

```js
function loader(sourceCss) {
  let style = `
    let  style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(sourceCss)}
    document.head.appendChild(style)
  `;
  return style;
}

module.exports = loader;
```

<br/>

#### 生成的 bundle.js

```js
(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./srcindex.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(`let jd = __webpack_require__("./src\\jd.js");
__webpack_require__("./src\\style.less");
console.log("jd打包工具：" + jd);`);
    },

    "./srcjd.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(`let name = "自定义打包工具";
module.exports = name;`);
    },

    "./srcstyle.less": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(`let style = document.createElement('style');
style.innerHTML = "body {\\n  background: red;\\n}\\n";
document.head.appendChild(style);`);
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = __webpack_require__("./srcindex.js");
})();
```

<br/>

#### HTML 引入 bundle.js 运行结果

![image-20230725005816186](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900174.png)

<br/>

<br/>

### `06` 手写 plugin（插件）

> - 代码加工:压缩，合并，混淆
> - tapable 插件 ---> 发布订阅处理 plugin 的事件流程
> - 需要一个固定的 apply 方法，会在编译器中调用

#### 自定义 myPlugin.js

```js
class MyPlugin {
  // 处理源码

  // 调用
  apply(compiler) {
    console.log("strat");
    // 注册订阅
    compiler.hooks.emit.tap("emit", function () {
      console.log("emit");
    });
    compiler.hooks.emit.tap("done", function () {
      console.log("done");
    });
  }
}

module.exports = MyPlugin;
```

<br/>

#### 配置文件 webpack.config.js

```js
let path = require("path");
let MyPlugin = require("./plugin/myPlugin");

module.exports = {
  mode: "development", //开发模式
  entry: "./src/index.js", //打包入口
  output: {
    filename: "bundle.js", //打包输出的文件名
    path: path.resolve(__dirname, "dist"), //打包输出的目录
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // 从上到下
          path.resolve(__dirname, "loader", "style-loader"),
          path.resolve(__dirname, "loader", "less-loader"),
        ],
      },
    ],
    plugins: [new MyPlugin()],
  },
};
```

<br/>

#### 编译器配置文件 Compiler.js

```js
let fs = require("fs");
let path = require("path");
//  babylon @babel/traverse @babel/types @babel/generator
let babylon = require("babylon");
let types = require("@babel/types");
// require("xxx").default,相当于import xxx from './xxx'
let traverse = require("@babel/traverse").default;
let generator = require("@babel/generator").default;
// 模版引擎
let ejs = require("ejs");
// 发布者订阅模式钩子，观察者
let { SyncHook } = require("tapable");
const { emit } = require("process");

// 编译器
class Compiler {
  // 接收webpack.config-js配置内容，进行本地化
  constructor(config) {
    this.config = config;
    // 入口目录
    this.entry = config.entry;
    this.entryId;
    // 当前工作目录
    this.root = process.cwd();
    // 用来保存所有模块
    this.modules = {};
    // 钩子
    this.hooks = {
      entryOption: new SyncHook(), //开始
      compile: new SyncHook(), //编译
      afterCompile: new SyncHook(), //编译后
      run: new SyncHook(), //编译后
      emit: new SyncHook(), //发送
      done: new SyncHook(), //完成
    };
    let plugin = this.config.module.plugins;
    if (Array.isArray(plugin)) {
      plugin.forEach((p) => {
        p.apply(this);
      });
    }
  }

  // 读取模块文件内容
  getSource(modulePath) {
    let rules = this.config.module.rules;
    // readFileSync() 同步读取文件
    let content = fs.readFileSync(modulePath, "utf-8");
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      let { test, use } = rule;
      let len = use.length - 1; //loader的总长度-1
      // 判断是否为less文件
      if (test.test(modulePath)) {
        function normalLoader() {
          let loader = require(use[len--]); //从右到左，从下到上
          // 进行转换
          content = loader(content);
          // 递归遍历所有的loader
          if (len >= 0) {
            normalLoader();
          }
        }
        normalLoader();
      }
    }
    return content;
  }

  // 模块文件解析 source---文件内容， parentPath---文件目录
  // 解析结果：解析的源码sourceCode，以及是否存在子依赖包dependencies
  parse(source, parentPath) {
    let dependencies = []; //存储子模块依赖
    // const code = "const n =1"

    // 利用babylon来将源码解析成ast
    const ast = babylon.parse(source);

    // 利用traverse来遍历AST节点，当访问者进入一个节点时就会调用​enter(进入)​​​方法
    traverse(ast, {
      CallExpression(p) {
        let node = p.node;
        if (node.callee.name === "require") {
          node.callee.name = "__webpack_require__";
          // 补全拓展名
          let moduleName = node.arguments[0].value;
          // 利用path.extname判断模块名是否包含拓展名
          moduleName = moduleName + (path.extname(moduleName) ? "" : ".js");
          // 使用path.join拼接成相对路径
          moduleName = "./" + path.join(parentPath, moduleName);
          dependencies.push(moduleName);

          // 更新node，将子模块名重写
          node.arguments = [types.stringLiteral(moduleName)];
        }
      },
    });

    // 利用generator来将ast解析成源码
    let sourceCode = generator(ast).code;
    // console.log(sourceCode);
    return { sourceCode, dependencies };
  }

  // 从root节点找到所有的依赖模块
  // modulePath---模块文件路径,isEntry---是否是入口文件
  buildModule(modulePath, isEntry) {
    // console.log(modulePath);

    // 模块文件内容
    let source = this.getSource(modulePath);

    // 使用path.relative将绝对路径分解成相对路径（返回从第一个路径到第二个路径的相对路径），获取模块名
    let moduleName = "./" + path.relative(this.root, modulePath);

    if (isEntry) {
      this.entryId = moduleName;
    }

    // 使用path.dirname来获取模块所在相对目录
    let { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moduleName)
    );
    // 保存解析的代码
    this.modules[moduleName] = sourceCode;
    // 递归
    dependencies.forEach((dep) => {
      // 使用path.join来拼接成相对路径
      this.buildModule(path.join(this.root, dep), false);
    });
  }

  // 生成打包文件
  emitFile() {
    // 打包路径
    let main = path.join(this.config.output.path, this.config.output.filename);
    // 获取模版内容
    let templateStr = this.getSource(path.join(__dirname, "bundle.ejs"));
    // 调用模版生成
    let result = ejs.render(templateStr, {
      entryId: this.entryId,
      modules: this.modules,
    });
    // 定义打包文件内容
    this.assets = {};
    this.assets[main] = result; //文件全名---文件内容
    // 输出打包文件
    // console.log(main);
    // console.log( this.assets);
    fs.writeFileSync(main, this.assets[main]);
  }

  // 执行方法
  run() {
    this.hooks.run.call(); //消费
    this.hooks.compile.call(); //编译
    // 使用path.resolve将相对路径拼接成绝对路径
    this.buildModule(path.resolve(this.root, this.entry), true);
    this.hooks.emit.call();
    this.emitFile();
    this.hooks.done.call();
  }
}

module.exports = Compiler;
```

<br/>

#### 执行结果

![image-20230726012715888](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900925.png)

<br/>

<br/>

## 最终目录结构

![image-20230726012759264](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900008.png)

<br/>

<br/>

## webpack 打包优化

### 优化前

> ### 启动

![image-20230801214104154](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900116.png)

> ### 打包

**首次打包速度**

![image-20230801214239842](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900787.png)

**二次打包速度**

![image-20230801214506769](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900688.png)

**打包大小**

![image-20230801214747258](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900840.png)

![image-20230801215039665](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900455.png)

<br/>

### **分析打包时间与大小结果**

speed-measure-webpack-plugin、webpack-bundle-analyzer

> 第一步：安装 speed-measure-webpack-plugin、webpack-bundle-analyzer（vue-Cli 自带）

`npm install speed-measure-webpack-plugin --save-dev `

``npm install webpack-bundle-analyzer --save-dev ` `

> 第二步：在 vue.config.js 文件中引入

```js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
```

> 第三步：在 webpack 配置中使用该插件

```js
module.exports = {
    ......
    configureWebpack: {
        },
        plugins: [
            // 这个要放在所有 plugins 最后
            new BundleAnalyzerPlugin(),
            new SpeedMeasurePlugin()
        ]
    }
}
```

<br/>

### 生产模式去掉 console

> 修改 vue.config.js 文件

```js
 module.exports = {
    ......
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = title
            return args
        })
        if (process.env.NODE_ENV === 'production') {
            // //生产包取消console debugger打印
            config.optimization.minimizer('terser').tap((args) => {
                // 注释console.*
                args[0].terserOptions.compress.drop_console = true
                // remove debugger
                args[0].terserOptions.compress.drop_debugger = true
                // 移除 console.log
                args[0].terserOptions.compress.pure_funcs = ['console.log']
                // 去掉注释
                args[0].terserOptions.output = {
                    comments: false
                };
               return args
            })
        }
    },
 }
```

<br/>

<br/>

### 提供中间缓存

#### HardSourceWebpackPlugin

> `HardSourceWebpackPlugin` 为模块提供中间缓存，缓存默认的存放路径是: `node_modules/.cache/hard-source`。

```js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
    ......
    configureWebpack: {
        plugins: [
            new HardSourceWebpackPlugin(),  // 模块提供中间缓存
        ],
    },
}
```

<br/>

<br/>

### 确保转译尽可能少的文件

#### exclude/include

```js
module.exports = {
    ......
    configureWebpack: {
         module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    use: ['babel-loader'],
                    include: [path.resolve(__dirname, 'src')]
                }
            ]
        }
    },
}
```

<br/>

<br/>

### 使用 CDN 方法引入包

#### CDN

> 在 public/index.html 中加入 echart 的 cdn 资源

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.1/echarts.min.js"></script>
```

> 在 vue.config.js 中配置 CDN 的使用

```js
module.exports = {
    ......
    configureWebpack: {
         externals: {
            echarts: "echarts", // 配置使用CDN
		},
    },
}
```

<br/>

<br/>

### 多线程编译

#### thread-loader

> 开启多线程编译

```js
const os = require('os');
// cpu核数
const threads = os.cpus().length;

module.exports = {
    ......
    chainWebpack: config => {
        // 多核编译
        config.module
            .rule('vue')
            .use('thread-loader')
            .loader('thread-loader')
            .options({ workers: threads})
            .end();
        config.module
            .rule('js')
            .use('thread-loader')
            .loader('thread-loader')
            .options({workers: threads})
            .end();

        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer('terser').tap((args) => {
                args[0].parallel = threads;
               return args
            })
        }
    },
}
```

<br/>

<br/>

### 编译缓存

#### 使用文件缓存，加速二次构建

```js
module.exports = {
    ......
    configureWebpack: {
        cache: {
          // 使用文件缓存，加速二次构建
          type: 'filesystem'
        }
  	}
}
```

<br/>

<br/>

### 优化后

#### 启动

![image-20230801215832483](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900322.png)

#### 打包

**首次打包**

![image-20230801221421232](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900107.png)

**二次打包**

![image-20230801210607743](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900948.png)

![image-20230801210627049](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151900486.png)

<br/>

### 优化结果

> ### 启动

**启动时间速度提高`130%`**

> ### 打包

首次打包速度提高 25%、二次打包速度提高 72%

**综合打包速度提高`48.5%`**

**打包体积缩小`43%`**
