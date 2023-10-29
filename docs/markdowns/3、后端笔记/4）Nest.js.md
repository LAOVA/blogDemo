# NestJS

## 概念

![image-20231022144939154](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310221449298.png)

**面向切面编程（AOP）**

![image-20231022161020560](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310221610682.png)

**特点：**

- 大而全
- 单例模式、依赖注入统一的异常处理
- 面向切面编程(AOP)支持 TypeScript
- 引入很多高级语法

<br/>

## module

**总体架构**

![image-20231022160027813](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310221600958.png)

**子模块架构**

![image-20231022160238100](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310221602204.png)

<br/>

<br/>

# 入门教程

## 01. NestJS 简介和优势介绍

> NestJS 提供了一个**开箱即用的应用程序架构**，允许开发人员和团队创建**高度可测试，可扩展，松散耦合且易于维护**的应用程序。

这段话虽然简单，但也阐述了 NestJS 的主要特点，它解决的是 Node.js 生态开发中的架构问题，也就是说使用它，就会获得不错的后端架构。而且它还表明了这个架构的特点，高度可测试、可扩展、松散耦合易于维护。 NestJS 还有一些特点，它使用渐进式 JavaScript，内置并完全支持 TypeScript（但也可以使用纯 JS 来进行开发）并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP(函数式响应编程)的元素。这些特点保证了 NestJS 是一个高度可扩展和松散耦合度的框架。也就我们开发时常说的**高内聚低耦合**。

## 02. NestJS 环境搭建和项目创建

### 全局安装 NestJS CLI

```javascript
cnpm i -g @nestjs/cli
```

<br/>

### 创建 NestJS 项目

等待`nestjs/cli` 安装完成后，就可以创建一个新的项目。

```javascript
nest new nestjs-demo
```

使用`npm run start`启动项目。

```javascript
> nest start

[Nest] 14312  - 2022/11/24 09:28:10     LOG [NestFactory] Starting Nest application...
[Nest] 14312  - 2022/11/24 09:28:10     LOG [InstanceLoader] AppModule dependencies initialized +30ms
[Nest] 14312  - 2022/11/24 09:28:10     LOG [RoutesResolver] AppController {/}: +6ms[Nest] 14312  - 2022/11/24 09:28:10     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 14312  - 2022/11/24 09:28:10     LOG [NestApplication] Nest application successfully started +2ms
```

<br/>

## 03. 初始化目录介绍和 HelloWorld

### 初始化目录文件说明

```javascript
+-- dist[目录]                      // 编译后的目录，用于预览项目
+-- node_modules[目录]              // 项目使用的包目录，开发使用和上线使用的都在里边
+-- src[目录]                       // 源文件/代码，程序员主要编写的目录
|  +-- app.controller.spec.ts      // 对于基本控制器的单元测试样例
|  +-- app.controller.ts           // 控制器文件，可以简单理解为路由文件
|  +-- app.module.ts               // 模块文件，在NestJS世界里主要操作的就是模块
|  +-- app.service.ts              // 服务文件，提供的服务文件，业务逻辑编写在这里
|  +-- app.main.ts                 // 项目的入口文件，里边包括项目的主模块和监听端口号
+-- test[目录]                      // 测试文件目录，对项目测试时使用的目录，比如单元测试...
|  +-- app.e2e-spec.ts             // e2e测试，端对端测试文件，测试流程和功能使用
|  +-- jest-e2e.json               // jest测试文件，jset是一款简介的JavaScript测试框架
+-- .eslintrc.js                   // ESlint的配置文件
+-- .gitignore                     // git的配置文件，用于控制哪些文件不受Git管理
+-- .prettierrc                    // prettier配置文件，用于美化/格式化代码的
+-- nest-cli.json                  // 整个项目的配置文件，这个需要根据项目进行不同的配置
+-- package-lock.json              // 防止由于包不同，导致项目无法启动的配置文件，固定包版本
+-- package.json                   // 项目依赖包管理文件和Script文件，比如如何启动项目的命令
+-- README.md                      // 对项目的描述文件，markdown语法
+-- tsconfig.build.json            // TypeScript语法构建时的配置文件
+-- tsconfig.json                  // TypeScript的配置文件，控制TypeScript编译器的一些行为
```

**src 目录下的文件说明** src 目录是日常工作编写代码的主要目录，从基本的目录结构也可以对 NestJS 编写模式有很好的了解。

```javascript
+--src[目录] | // 源文件/代码，程序员主要编写的目录
  +--app.controller.spec.ts | // 对于基本控制器的单元测试样例
  +--app.controller.ts | // 控制器文件，可以简单理解为路由文件
  +--app.module.ts | // 模块文件，在NestJS世界里主要操作的就是模块
  +--app.service.ts | // 服务文件，提供的服务文件，业务逻辑编写在这里
  +--app.main.ts; // 项目的入口文件，里边包括项目的主模块和监听端口号
```

<br/>

### 三种项目启动脚本说明

打开`package.json` 文件，可以看到下面的代码。

```javascript
"start": "nest start",                              // 最常用的开始模式
"start:dev": "nest start --watch",                  // 开发模式的启动 有监视功能
"start:debug": "nest start --debug --watch",        // 调试Bug时的启动 调试程序时使用
```

对启动脚本了解后，我们启动一下项目。打开终端, 输入`npm run start:dev`启动项目。

<br/>

### HelloWorld 程序的编写

当项目启动后，我们如何访问到这个项目那？打开`/src/main.ts` 文件，可以看到监听的是`3000`端口，这时候在浏览器地址栏中输入`http://localhost:3000` 就可以访问 HelloWorld 的程序了。

```javascript
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello JSPang!";
  }
}
```

<br/>

## 04.Controller 控制器-路由的创建

`controller` 是控制器，其实也就是编写路由。

### 新建一个路由/Controller

比如要新建一个`http://localhost:3000/jspang`的页面，访问时直接返回`Hello NestJS`,这时候就可以在`app.controller.ts`文件里编写下面的代码。

```javascript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 //---------添加部分-----------
  @Get('JSpang')
  getJSpang():string{
    return 'Hello NestJS.'
  }
 //---------------------------
}
```

编写完成后，就可以来到浏览器访问 http://localhost:3000/jspang

<br/>

### 增加一个顶层路径

比如现在要在所有的路由前面加一个`api`的顶层路径，例如所有的路径形式变成`http://localhost:3000/api/xxxxx` 这个时候要如何编写那？其实方法也很简单，就是在最上层的`@Controller( )`加入一个`api`的字符串就可以了。

```javascript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

这时候再次访问路径就变成了`http://localhost:3000/api` 。

<br/>

### 创建一个模块和路由

上面这个路由是用 NestJS CLI 自动给我们生成的，只是作一个参考，让我们可以看到一个页面。我们真实项目一般不是这样的，都是一个页面或者一个大的模块建立一个文件夹。在这个文件夹里有不同的 controller、service 和 module。下面我就模拟真实中的开发，给大家创建一个`Girl`的模块，来讲述`Controller`的设置。 首先删除自动生成的测试文件`app.controller.spec.ts`、控制文件`app.controller.ts` 和`app.service.ts`都删除掉。 然后进入到`app.modlue.ts`文件中，把刚才删除内容的引用，再次删除掉，删除后的文件如下。 删除前的 app.module.ts 文件

```javascript
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

删除后的 app.module.ts 文件

```javascript
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

当删除都完成后，我们就可以新建模块了。NestJS 鼓励使用终端的形式新建模块,打开终端[Ctrl+Shift+`]。输入下面的命令，新建一个模块。

```javascript
nest g module girl
```

稍等一会，在`/src`目录下，就自动建立了一个`girl`的文件夹，在文件夹里还自动生成了`girl.module.ts`的。 再返回`/src`目录，可以看到在`app.module.ts`文件里，给我们自动引入了刚刚创建的模块。

```javascript
import { Module } from "@nestjs/common";
import { GirlModule } from "./girl/girl.module";

@Module({
  imports: [GirlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

也就是说，我们用这种命令行创建的文件，NestJS CLI 会自动为我们进行导入，比如现在我们再创建一个`controller`.

```javascript
nest g controller girl --no-spec
```

稍等一会，它自动为我们在`/src/girl`目录下，创建了`girl.controller.ts`文件。有了这个文件以后，我们就可以在这个文件里创建路由了。编写下面的代码：

```javascript
import { Controller, Get } from "@nestjs/common";

@Controller("girl")
export class GirlController {
  @Get()
  getGirls(): any {
    return {
      code: 0,
      data: ["翠花", "小红", "大丫"],
      msg: "请求女孩列表成功",
    };
  }
}
```

编写完成后，在浏览器中打开`http://localhost:3000/girl` 就可以看到返回的信息了。 我们真实的开发更倾向于这种模式。

<br/>

### 在 main.ts 设置默认前缀

这时候想在所有的请求加入前缀`/honglangman`，就可以到`/src/main.ts`里，编写下面的代码。

```javascript
app.setGlobalPrefix("HongLangMan");
```

这时候的访问地址就变成了`http://localhost:3000/honglangman/girl` 。

<br/>

## 05. Controller 控制器-业务逻辑相结合

业务逻辑放在`service`文件中。

<br/>

### 用命令行创建 service

同样使用终端命令行的形式创建`girl.service.ts`文件，在 VSCode 中打开终端，输入下面的命令。

```javascript
nest g service girl --no-spec
```

稍等一会，就会给我们两句提示。

```javascript
CREATE src/girl/girl.service.ts (88 bytes)
UPDATE src/girl/girl.module.ts (240 bytes)
```

看到这个就说明我们已经创建成功了。第一句是告诉我们`girl.service.ts`文件创建成功了，第二句话是告诉自动更新`girl.module.ts`文件。

<br/>

### Controller（控制器）引入 service（逻辑）

service 的文件属于逻辑层，按照约束，需要我们把业务逻辑相关的东西都写到这个文件里。当 service 文件创建好以后，我们需要作的第一件事，就是把 service 引入到 controller 控制器里。打开`girl.controller.ts`文件，编写下面的代码。

```javascript
import { Controller, Get } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService:GirlService){}
  //this.girlService = new GirlService();

 //.......
}
```

<br/>

### 在 service 里编写业务逻辑

在控制器里引入 service 后，就可以在 service 里编写业务逻辑了。比如我们把返回的代码移入`girl.service.ts` ，代码如下。

```javascript
import { Injectable } from "@nestjs/common";

@Injectable()
export class GirlService {
  getGirls() {
    return {
      code: 0,
      data: ["翠花", "小红", "大丫"],
      msg: "请求女孩列表成功",
    };
  }
}
```

这里的代码就相当于业务逻辑了，写完后，还需要回到`girl.controller.ts`里，在`getGirls( )`方法里使用 service 里的`getGirls( )`方法。

```javascript
import { Controller, Get } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService:GirlService){}
  @Get()
  getGirls():any{
    return this.girlService.getGirls();
  }
}
```

写完上面这句代码后，就可以在浏览器中`http://localhost:3000/girl` 进行访问。如果一切正常，依然可以看到上节课访问时一模一样的内容，只不过这时候我们的业务逻辑，已经挪到了`Service`中。上面这些就是我们在创建一个基本`Moudule`后，要作的基本操作。 下节课继续讲解 Controller 相关的内容，会讲一下如何创建 POST 路由，如何传递参数，这些内容。

<br/>

## 06. Controller 控制器-Get 和 Post 请求详解

### 创建 POST 请求

用 VSCode 打开`/src/girl/girl.service.ts` ，先编写一个增加女孩的方法`addGirl( )`。 代码编写如下：

```javascript
 addGirl(){
    return {
      code:200,
      data:{id:1,name:'大梨',age:27},
      msg:'女孩添加成功'
    };
  }
```

这个是业务逻辑的编写，写完这个后，我们再回到`girl.controller.ts` , 先引入`Post` 。

```javascript
import { Controller, Get, Post } from "@nestjs/common";
```

引入完成后，再用装饰器编写一个`@Post`请求方法。

```javascript
import { Controller, Get,Post } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService:GirlService){}
  //this.girlService = new GirlService();
  @Get()
  getGirls():any{
    return this.girlService.getGirls();
  }
  //------新增Post请求方法
  @Post('/add')
  addGirl():any{
    return this.girlService.addGirl();
  }
}
```

这样就创建好了，我们可以使用 REST Client 进行 Post 请求。

<br/>

### REST Client 的使用

`REST Client` 是 VSCode 的一个用于发送请求的插件

> [VSCode 接口调试插件 REST Client](<https://jspang.com/article/[https://www.bilibili.com/video/BV1u7411a79W/](https://www.bilibili.com/video/BV1u7411a79W/)>)

当插件安装完成后，就可以在项目根目录下创建一个`/RESTClient/demo.http`的文件，然后编写下面的代码。

```javascript
POST http://localhost:3000/girl/add HTTP/1.1
```

点击`Send Request`按钮，发送请求，如果一切正常，我们就可以看到请求返回的结果了。

<br/>

### 接受 Get 请求参数

在开发中，我们的请求一般都是带有参数的，比如在女孩中根据 ID 出现相对的女孩。这时候我们传递的就是 ID，得到的是对应女孩的信息。
先到`/src/girl/girl.service.ts`文件里编写对应的业务逻辑。

```javascript
getGirlById(id:number){
    let  reJson:any ={}
    switch(id){
      case 1:
         reJson={id:1,name:'翠花',age:18}
         break;
      case 2:
         reJson={id:1,name:'小红',age:20}
         break;
      case 3:
         reJson={id:1,name:'大丫',age:23}
         break;
    }
    return reJson;
  }
```

写完业务逻辑后，我们到控制器页面`/scr/girl/girl.controller.ts`,用 `@Get`装饰器编写一个路由，在代码最开始的地方我们引入了`Request`。

```javascript
import { Controller, Get, Post, Request } from "@nestjs/common";
```

Request 的作用就是获得参数，当有了 Request 后，我们继续编写对应的`getGirlById( )`方法。

```javascript
@Get('/getGirlById')
  getGirlById(@Request() req):any{
    //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
    let id:number = parseInt(req.query.id)
    return this.girlService.getGirlById(id)
  }
```

这些编写完成后，我们再到`demo.http`文件里，作一个发送请求。

```javascript
Get http://localhost:3000/girl/getGirlById
?id=1
```

然后点击`Send Request`按钮后，就可以根绝 id 不同，等到不同的结果了。

<br/>

### @Query 装饰器的使用

上面的`req.query.id` 写起来不简介，我们可以使用`@Query`修饰器来进行简写。现在文件最开始引入它。

```javascript
import { Controller, Get, Post, Request, Query } from "@nestjs/common";
```

然后把`@Request`换成`@Query`。

```javascript
@Get('/getGirlById')
  getGirlById(@Query() query):any{
    let id:number = parseInt(query.id)
    return this.girlService.getGirlById(id)
  }
```

这样写也是完全没有问题的，算是一种简写方法。

### 接受 Post 请求参数

Post 请求和 Get 基本一样，也可以使用`@Request`装饰器接收就可以了。这里把本节课开始时写的`addGirl( )`方法改为接受参数的方式。

```javascript
@Post('/add')
addGirl(@Request() req):any{
  console.log(req.body)
  return this.girlService.addGirl();
}
```

这时候到`demo.http`里，编写请求的代码，注意这里我们传递了参数。

```javascript
POST http://localhost:3000/girl/add
Content-Type: application/json

{
    "id":4,
    "name":"大梨",
    "age":30
}
```

点击`Send Request`按钮，可以看到终端内就会显示出我们请求的数据。

<br/>

### @body 修饰器的使用

和`@Query`修饰器一样，NestJS 也为我们准备了`@Body`修饰器。 使用前同样需要先引入 Body。

```javascript
import { Controller, Get, Post, Request, Query, Body } from "@nestjs/common";
```

这时候直接修改代码为下面的形式，依然可以运行。

```javascript
  @Post('/add')
  addGirl(@Body() body):any{
    console.log(body)
    return this.girlService.addGirl();
  }
```

<br/>

## 07. Controller 控制器-动态路由的创建

NestJS 还提供动态路由的相关编写方法。其实动态路由，就是在 Get 请求时，把参数的传递掩饰在路径里，而不是用传统的方式进行传递。
例如我们上节课编写的通过 ID 获得一个女孩的的路由，请求时我们需要携带参数。

```javascript
Get http://localhost:3000/girl/getGirlById
?id=1
```

改为动态路由时，请求路由就变成了这样。

```javascript
Get http://localhost:3000/girl/getGirlById/1
```

<br/>

### 创建动态路由

在`Controller`里在新建一个方法`findGirlById`，制作动态路由。

```javascript
@Get('/findGirlById/:id')
findGirlById(@Request() req):any{
  let id:number = parseInt(req.params.id)
  return this.girlService.getGirlById(id)
}
```

依然使用`REST Client`进行测试，这次就不需要显式的传递参数，可以隐式的以路径形式进行传递。

```javascript
GET http://localhost:3000/girl/findGirlById/2
```

<br/>

### 多参数的传递

实际开发中，我们可能传递的不仅仅是一个参数，而是多个参数。NestJS 也可以满足多参数的传递。

```javascript
@Get('/findGirlById/:id/:name')
findGirlById(@Request() req):any{
  console.log(req.params.name)
  let id:number = parseInt(req.params.id)
  return this.girlService.getGirlById(id)
}
```

我们又接收了一个新的 name 参数，然后打印在了控制台。这时候的访问路径就变成了，下面的形式。

```javascript
GET http://localhost:3000/girl/findGirlById/2/jspang
```

### @Param 装饰器的使用

NestJS 也提供了对应的简写装饰器`@Param` ,使用前记得先进行引入。

```javascript
import { Param } from "@nestjs/common";
```

然后修改对应的代码为下面的形式。

```javascript
@Get('/findGirlById/:id/:name')
findGirlById(@Param() params):any{
  console.log(params.name)
  let id:number = parseInt(params.id)
  return this.girlService.getGirlById(id)
}
```

### @Headers 装饰器

如果想读取请求头里边的信息，就可以使用`@Headers`装饰器，使用前还是需要引入的。

```javascript
import { Headers } from "@nestjs/common";
```

然后修改对应的代码获得请求头信息。

```javascript
@Get('/findGirlById/:id/:name')
findGirlById(@Param() params ,@Headers() header):any{
  console.log(params.name)
  console.log(header)
  let id:number = parseInt(params.id)
  return this.girlService.getGirlById(id)
}
```

<br/>

## 08. 数据库操作-NestJS 中 ORM 工具简介

> ORM 是 Object Relational Mapping 的缩写，译为“对象关系映射”，它解决了对象和关系型数据库之间的数据交互问题。

### 简单理解 ORM

**简单理解 ORM 的作用就是：定义一个对象，这个对象就对应着一张表，这个对象的一个实例，就对应着表中的一条记录。** 这样作的好处，就是我们可以通过对象的形式，来操作数据库。比如取表中的一个字段，那应该就对应对象中的一个属性。对象的形式，对于前端工程师来说非常友好。 ![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310291524509.png) **传统的 SQL**

```javascript
SELECT id,name,age FROM girls where  id=1
// 代码
res = db.execSql(sql)
name=res[0]['NAME']
```

**ORM 代码**

```javascript
girl = Girl.get(1);
name = girl.name;
```

用 ORM 的形式，就不用再写 SQL 语句了，因为 ORM 工具就已经为我们做好了。这样我们的学习成本就相对来说降低了，而且也提高了阅读性。

<br/>

### ORM 的优缺点

当我们知道了 ORM 是什么工具之后，还需要了解它的优缺点。 这里先说优点：

- 方便维护：数据模型定义在同一个地方，利于重构；
- 代码量少、对接多种库：代码逻辑更易懂
- 工具多、自动化能力强：数据库删除关联数据、事务操作等....

再来说缺点：

- 性能没有使用传统 SQL 语句效率高，因为 SQL 语句的形式是可以进行优化的，而由于 ORM 工具这种高度集成化的形式，所以没办法进行 SQL 语句的优化。所以在一些极端情况下会出现性能问题。

<br/>

### 常见的 ORM 工具

- prisma : 个人推荐使用的 ORM 工具，由于是公司维护，所以个人感觉稳定性更好。
- TypeOrm：官方推荐使用的 ORM，社区维护，性能略由于 prisma 工具。

<br/>

## 09. 数据库操作-安装 MySql 和 TypeORM

### Database Client 插件的安装

`Database Client`

直接在 VSCode 的插件中查找安装就可以使用了。

<br/>

### 安装 TypeORM

上节中说了，TypeORM 是 NestJS 官方推荐的工具库，所以我们也先来讲解 TypeORM。我们采用命令行的方式进行安装。

```javascript
npm install --save @nestjs/typeorm typeorm mysql2
```

<br/>

### 引入 TypeORM

我们直接再`/src/app.module.ts` 中引入`typeorm`。

```javascript
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type:'mysql',           // 数据库类型
    host:'localhost',       // 数据库的连接地址host
    port:3306,              // 数据库的端口 3306
    username:'root',        // 连接账号
    password:'root123',     // 连接密码
    database:'test_db',     // 连接的表名
    retryDelay:500,         // 重试连接数据库间隔
    retryAttempts:10,       // 允许重连次数
  })],
  controllers: [GirlController],
  providers: [GirlService],

})
```

编写完成后在控制台启动服务.

```javascript
npm run start:dev
```

访问`http://localhost:3000/girl`

<br/>

## 10. 数据库操作-TypeORM 的实体操作

### TypeORM 中的实体 Entities

> ORM 中的实体其实就是把数据库映射成对象的那个类。这个类可以模拟数据库表，定义其中的字段。

因为映射的过程 ORM 已经为我们作好了，所以我们只需要定义实体类，当实体类定义好以后，就可操作数据库了。下面的图在第八节中已经见过，这里所谓的实体，就是`Object` 。 ![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310291524509.png) 有了这个 Object 就可以自动生成表结构，而且 DB 里的数据也编程了标准的对象。

<br/>

### 增加配置项

如果想让 TypeORM 自动工作，为我们创建对应的数据库结构，我们需要先在配置数据库连接的地方增加两个配置项，一个是允许实体同步到数据库，另一个是自动加载实体。

```javascript
import { Module } from "@nestjs/common";
import { GirlModule } from "./girl/girl.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    GirlModule,
    TypeOrmModule.forRoot({
      type: "mysql", // 数据库类型
      host: "localhost", // 数据库的连接地址host
      port: 3306, // 数据库的端口 3306
      username: "root", // 连接账号
      password: "root123", // 连接密码
      database: "nest_demo", // 连接的表名
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 充实次数
      synchronize: true, // 是否将实体同步到数据库
      autoLoadEntities: true, // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

<br/>

### 编写 Entities 实体

先进入到`/src/girl`目录下，新建一个文件夹`entities`,然后在里边新建`girl.entity.ts`编写实体。

```javascript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Girl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  skill: string;
}
```

编写好类之后，需要在`module`里进行引入，打开`girl.module.ts`文件，先用`import`引入`TypeOrmModule`。

```javascript
import { TypeOrmModule } from "@nestjs/typeorm";
```

然后在`@Module( )`装饰器中用`forFeature( )`方法，把`Girl`的实体引入。

```javascript
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  .....
})
```

写完后启动数据库服务，数据服务启动好以后，再控制台启动 NestJS 服务。

```javascript
npm run start:dev
```

两个服务都没有问题后，我们到 VSCode 中的`Database Client` 中，查看数据库是否已经创建了`girl`的表。

<br/>

### 实体字段的详细介绍

**列类型**：可以使用`type`字段定义列的类型和长度。

```javascript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Girl {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "int" })
  age: number;

  @Column({ type: "varchar" })
  skill: string;
}
```

**常见类型**

```javascript
int,
  tinyint,
  smallint,
  mediumint,
  bigint,
  float,
  double,
  dec,
  decimal,
  numeric,
  date,
  datetime,
  timestamp,
  time,
  year,
  char,
  varchar,
  nvarchar,
  text,
  tinytext,
  mediumtext,
  blob,
  longtext,
  tinyblob,
  mediumblob,
  longblob,
  enum,
  json,
  binary,
  geometry,
  point,
  linestring,
  polygon,
  multipoint,
  multilinestring,
  multipolygon,
  geometrycollection;
```

**自动生成时间** 在开发中经常需要在保存数据时同时记录时间，这时候可以使用`@CreateDateColumn( )`装饰器来制作。我们先进行引入。

```javascript
import { CreateDateColumn } from "typeorm";
```

引入后就可以使用`@CreateDateColumn( )`装饰器来定义字段了。

```javascript
 @CreateDateColumn({type:"timestamp"})
  entryTime:Date
```

**自动生成列** 开发时也会遇到生成一个不规则、不重复的自动编号，这时候就可以使用`Generated( )`装饰器。

```javascript
import {....,Generated} from 'typeorm'
 @Generated('uuid')
  uuid:string
```

其实关于 TypeORM 的实体配置还有很多，但是我们没有必要全部记住，用的时候查就可以了。

<br/>

## 11. 数据库操作-ORM 对数据库的增删改查

当我们有了一个 Girl 的实体(Entity)之后，我们就可以对一个表的数据进行增删改查了。操作数据库的数据，也是后端开发的一个核心技能。

<br/>

### 引入必要的装饰器和工具

对数据的操作，我们一般都放在`xxx.service.ts`这个文件里，因为算是业务逻辑的编写。这里我们就放在`girl.service.ts`文件里。打开文件，我们还需要引入三个必要的东西。

```javascript
import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Girl } from "./entities/girl.entity";
```

引入后我们要在构造函数里增加一个依赖注入的操作。

```javascript
// 依赖注入
constructor(@InjectRepository(Girl) private readonly girl:Repository<Girl>){}
```

上面的两步完成，我们才能进行正式的增删改查。

<br/>

### 增加数据 save( )

先到`girl.service.ts`文件里，来编写增加数据的方法`addGirl( )`。这里我们先`new`出一个`girl`的对象，然后用这个对象的`save( )`保存数据就可以了。

```javascript
  //增加一个女孩
  addGirl(){
    const data = new Girl()
    data.name='大梨';
    data.age=25;
    data.skill='精油按摩,日式按摩';
    return this.girl.save(data);
  }
```

有了业务逻辑，需要去`girl.controller.ts` 里，去配置一下对应的路由。

```javascript
@Get('/add')
  addGirl(@Body() body):any{
    console.log(body)
    return this.girlService.addGirl();
  }
```

然后我们启动服务，访问路径，看看是否数据表`girl`已经增加了一条数据。

```javascript
npm run start:dev
// http://localhost:3000/girl/add
```

我们可以修改`girl.service.ts`文件里的数据，多增加几条，方便后面的操作。

<br/>

### 删除数据 delete( )

继续在`girl.service.ts`文件里编写删除方法。删除方法使用`delete( )`，、

```javascript
 // 删除一个女孩
  delGirl( id:number){
    return this.girl.delete(id)
  }
```

这里我们接收一个参数为`id`,然后根据`id`进行删除。 写完后还是去`girl.controller.ts`里编写对应的路由。

```javascript
 @Get('/delete/:id')
  deleteGirl(@Param() params):any{
    let id:number = parseInt(params.id)
    return this.girlService.delGirl(id);
  }
```

写好后到浏览器中访问，删除 ID 为 4 的数据。

```javascript
http://localhost:3000/girl/delete/4
```

<br/>

### 修改数据 update( )

修改数据需要根据 id，再进行修改，也就是要接收两个参数，一个是 id，一个是要修改的数据。

```javascript
//修改一个女孩
  updateGirl( id: number ){
      let data = new Girl()
      data.name="王小丫";
      data.age=19
      return this.girl.update(id,data)
  }
```

然后再到`girl.controller.ts`里，编写对应的路由。

```javascript
@Get('/update/:id')
  updateGirl(@Param() params):any{
    let id:number = parseInt(params.id)
    return this.girlService.updateGirl(id);
  }
```

<br/>

### 查询数据 find( )

查询数据我们一般分两种，一种是查询表中的所有数据，一种是根据姓名模糊查询（或者根据 ID 查询）。先在`girl.servie.ts`中写一个查询全部数据的。 ** 查询全部数据 **

```javascript
 // 得到所有女孩
  getGirls(){
    return this.girl.find()
  }
```

这个是不是超级简单，一句话就可以完成。再到`girl.controller.ts`里编写对应的路由。

```javascript
@Get()
  getGirls():any{
    return this.girlService.getGirls();
  }
```

然后访问`http://localhsot:3000/girl`就可以看到全部的数据打印在了页面上。 ** 根据姓名模糊查询 ** 再来写一个根据姓名模糊查询的方法。

```javascript
  // 根据姓名查找一个女孩的信息
  getGirlByName(name:string){
    return this.girl.find({
      where:{
        name:Like(`%${name}%`)
      }
    })
  }
```

这里使用的 Like 是模糊查询的意思，也就是根据姓名来模糊查询数据。写完这个继续编写对应的路由配置。

```javascript
 @Get('/findGirlByName/:name')
  findGirlByName(@Param() params ):any{
    console.log(params.name)
    let name:string = params.name
    return this.girlService.getGirlByName(name)
  }
```

这样我们就完成了对一个数据表的增删改查，当然这只是最简单的操作，真实的开发中要比这个复杂很多。

<br/>

## 12. Providers(提供者)实现依赖注入

`Providers` 可以翻译成提供商，或者提供者。有了这个工具的帮助，我们就可以在`constructor`（构造函数）里注入依赖关系。有了`Providers`表示对象可以彼此形成各种关系，更好更灵活的组建开发。

<br/>

### 初识 Providers 提供者

上面的文字对小伙伴的理解不会有太大帮助，我这里画一幅图，来帮助大家理解。
![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310291524528.jpeg) 图示：图的左边是`service`文件，也就是我们 常说的服务类，数据库和业务逻辑的操作代码就放在这个里面。图的右边是`controller`文件，我们常说的路由文件，但是路由文件最终要调用`service`文件里的方法，而此时的调用是通过`this.girlService.addGirl()`完成的。能使用这种形式的功劳就是有`Providers`提供者的帮忙，也就是我们常说的依赖注入`IOC`. 其实使用依赖最多的框架是 Java Spring boot 框架。 NestJS 也借鉴了 SpringBoot 框架，在自己的框架里边大量的使用了依赖注入这种写法。

<br/>

### Providers 自定义名称

打开`girl.module.ts`文件，可以看到下面这样的代码。

```javascript
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [GirlService],
})
```

这里的`providers: [GirlService],`只是一种简写，他的正规写法应该是这样。

```javascript
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [{
    provide:"girl",
    useClass:GirlService
  }],

})
```

但这时候我们的程序会报错，因为在`girl.controller.ts`里没有进行注入的操作，简写是不用编写注入操作的，但如果自定义名称，就需要写一下，先引入`Inject`装饰器。

```javascript
import { Controller, Inject, Get, Body, Param } from "@nestjs/common";
```

然后在`constructor`使用注入装饰器，并把名字作为参数传递过去。

```javascript
constructor(@Inject('girl') private girlService:GirlService){}
```

<br/>

### 自定义注入值

我们不仅仅可以注入`service`类中的方法，我们还可以定义一些数据值，直接注入到`controller`里，直接在`girl.module.ts`里编写代码，定义一个数组。

```javascript
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [{
    provide:"girl",
    useClass:GirlService
  },{
    provide:"GirlArray",
    useValue:['小红','小翠','大鸭']
  }{
    provide:"Factory",
    useFactory(){
    console.log('myFactory')
	return 'print factory'
}
  }],

})
```

然后还需要到`girl.controller.ts`进行注入操作。

```javascript
constructor(
    @Inject('girl') private girlService:GirlService,
    @Inject('GirlArray') private girls:string[],
     @Inject('Factory') private girls:string,
  ){}
```

写完注入后，我们就可以在方法中进行使用了，这里我们新写一个路由方法`test`

```javascript
@Get('/test')
  test():string[]{
    // return this.GirlArray;
    return this.Factory;
  }
}
```

然后在浏览器中访问路径，就可以看到刚才定义的数组了。

```javascript
http://localhost:3000/girl/test
```

<br/>

### 自定义工厂（方法）

有时候我们要注入一些除`service`方法之外业务逻辑，就可以使用这种工厂模式。 先在`girl.module.ts`文件里编写下面的工厂方法。

```javascript
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [
  ......
    {
    provide:"MyFactory",
    useFactory(){
      console.log('myFactory---------:')
      return 'console.log() function'
    }
  }],

})
```

然后到`girl.controller.ts`里边，进行注入。

```javascript
  constructor(
    .......
    @Inject('MyFactory') private myFactory:string,
  ){}
```

注入完成后，我们就可以在`test( )`方法里使用它了。

```javascript
 @Get('/test')
  test():string[]{
    console.log(this.myFactory)
    return this.girls;
  }
```

其实在这个方法中可以作很多事情，甚至写一些必要的业务逻辑，现在我们只是用了最简单的方式来编写。

<br/>

## 13. 为 NestJS 增加热重载功能

NestJS 并没有提供热重载，随着学习的深入，每次修改文件保存，服务都需要经过几秒的重新编译。在现实中的项目开发，这个过程会变成十几秒到几十秒，非常影响开发的连贯性。所以这节课为我们就修改 webpack 配置，为 NestJS 增加热重载功能。

<br/>

### 热重载的作用

> 热重载会对比代码变化，然后只重新编译变化的文件，而不是所有的文件都重新编译。

需要说明的是，配置热重载只适合在项目初期，就是开发阶段。如果你项目进入维护阶段，建议去掉热重载功能。因为它对实体（Entities）和静态文件支持的不是很好。官方也是因为没办法完美的解决一些问题，所以没有加入热重载功能。

<br/>

### 配置热重载

**1.安装依赖包** 配置热重载首先要安装相关的依赖，这里直接使用 npm 进行安装

```javascript
$ npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
```

2.**增加配置文件** 安装完成后，我们需要在项目根目录下增加一个`webpack-hmr.config.js`的配置文件。有了文件后，再把下面的代码复制到文件里。

```javascript
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ["webpack/hot/poll?100", options.entry],
    externals: [
      nodeExternals({
        allowlist: ["webpack/hot/poll?100"],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({
        name: options.output.filename,
        autoRestart: false,
      }),
    ],
  };
};
```

3.**修改对应代码** 有了配置文件后，还需要手段增加一段新代码，让项目支持热加载，这段代码是增加到`/src/main.ts`文件下面的。

```javascript
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => app.close());
}
```

增加后，文件会报`hot`不存在的错误，所以我们需要安装一个新的依赖包,使用 npm 进行安装。

```javascript
$ npm i -D @types/webpack-env
```

安装完成，再回来看`main.ts`文件，发现错误已经消失了。

**4.替换启动脚本** 上面的配置完成后，我们需要替换`package.json`中的`start:dev`脚本。

```javascript
"start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch",
```

这样配置完成后，我们就可以使用热加载功能了。
打开项目终端，然后输入`npm run start:dev`启动项目。然后在`/src/girl/girl.controller.ts`文件里增加一个`hotLoad( )`方法。

```javascript
 @Get('/hotLoad')
  hotLoad():any{
    return 'HotLoad Function';
  }
```

这时候我们再保存，你会发现 NestJS 没有重新编译所有文件，而只是编译了改变的文件，也就是实现了热加载。

<br/>

## 14. 中间件 Middleware-局部中间件和全局中间件

无论是前端和后端对中间件这个概念都不陌生，NestJS 当然也是支持中间件的编写的。有了中间件就可以通过编写中间件的形式，实现一些资源共享，功能共享的目的。比如你作一个全站的访问计数功能，就可以使用中间件来实现，比如我们常用的访问日志功能，都可以在中间件里实现。

<br/>

### 生成局部中间件

NestJS 的局部中间件也需要使用命令行来生成，生成的命令如下。

```javascript
nest g mi counter
```

这里我们生成一个计数器的中间件。命令执行完以后，会在`/src`目录下，生成一个`counter`文件夹。 我们打开`counter.middleware.ts`文件,可以看到下面的代码。

```javascript
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
```

为了能看到效果,我们在`next( )`代码上面,添加一句输出。

```javascript
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("进入中间件");
    next();
  }
}
```

这样每次进入中间件的代码,我们都可以看到结果.这里说一下`Next( )`方法的作用,如果不写这个方法,那程序执行到这里就会停止,不会向下执行后面的代码了.

<br/>

### 局部中间件的使用

中间件可以分为局部中间件和全局中间件,我们先讲局部中间件,也就是应用中的某些路径会进入中间件。
中间件写好以后,还要在`module`文件里写一些代码,让她生效.这里就在`girl.module.ts`这个文件里使用中间件.我们先引入中间件.

```javascript
import { CounterMiddleware } from "../counter/counter.middleware";
```

引入后,在`GirlModule`的类上,实现`NestModule`接口.具体代码如下.

```javascript
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes("girl");
  }
}
```

这样我们的中间件就可以使用了,启动服务.`npm run start:dev`,然后访问 girl 相关的路由,就可以看到控制台输出了`进入中间件`这样的提示.说明我们的中间件已经起作用了.

<br/>

### 全局中间件的使用

明白了局部中间件的使用,我们再学习一下全局中间件顾名思义,就是应用中的每个路径都会先进入中间件。注意局部中间件我们是以实现`NestModule`接口的形式,把中间件挂在到`Moudle`上的.而全局中间件要以`function`的形式 编写到`main.ts`里。 先来编写一个全局中间件的方法.

```javascript
function MiddleWareAll(req: any, res: any, next: any) {
  console.log("我是全局中间件.....");
  next();
}
```

然后再下面的`bootstrap( )`方法中进行使用.

```javascript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(MiddleWareAll);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
```

这样就完成了全局中间件的编写.
这节课我们就先到这里,下节课我们会讲讲第三方中间件的使用和一些补充的小知识点.下节见。

<br/>

## 15. 中间件 Middleware-用第三方中间件实现跨域

### 测试跨域请求

做过前端的同学，一定都知道在对接接口的时候，会遇到跨域问题。我们一般会让后端解决这个问题，因为前端解决还是挺麻烦的。我们就借着第三方中间件的机会，讲一下使用`cors`实现后端跨域返回。 需要说的是，我们这里只是为了讲课，其实 NestJS 是自带配置项的，可以通过简单的配置完成跨域操作。 先编写一下`corsTest( )`路由方法，打开`/src/girl/girl.controller.ts`文件，然后编写下面的方法。

```javascript
 @Get('/corstest')
  corsTest():object{
    return {message:'测试跨域请求成功'}
  }
```

我们这里使用 Node 环境来实现跨域，直接打开浏览器，登录我的博客`https://jspang.com`，然后按`F12`打开控制台，输入下面的代码。

```javascript
fetch("http://localhost:3000/girl/corstest")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
```

可以看到，直接报错误，说明现在程序是支持跨域请求的。

<br/>

### 使用第三方插件解决跨域

使用第三方中间件`cors`来解决这个问题，我们需要先使用 npm 来进行安装，一个是插件本身，一个是声明插件。

```javascript
$ npm install cors
$ npm install @types/cors -D
```

安装完成后，就可以使用了。打开`main.ts`文件编写全局的跨域代码。 先用`import`进行引入`cors`.

```javascript
import * as cors from "cors";
```

然后使用`use`进行使用，注意这个中间件的使用是有顺序的，如果顺序错了，是会报错的。

```javascript
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cors from "cors";

function MiddleWareAll(req: any, res: any, next: any) {
  console.log("我是全局中间件.....");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(MiddleWareAll);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
```

报错后，这时候再次到浏览器中测试跨域，可以发现已经可以完成跨域操作了。

<br/>

### 关于跨域其他知识的补充

**send( )方法的使用** 在学习局部中间件的时候，我们学了`next( )`方法，是向下执行，但有时候我们并不希望程序继续执行，比如发现了非法访问路径，这时候我们就需要使用`res.send( )`方法进行拦截。 打开`/src/counter/counter.minddleware.ts`文件，修改代码如下。

```javascript
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("进入中间件");
    res.send("禁止访问，你被拦截了");
    //next();
  }
}
```

然后再进行访问，可以看到`girl.controller.ts`里的代码这次并没有执行，而是直接返回了`禁止访问，你被拦截了`的文字。

<br/>

### 指定请求类型

还可以设置请求的类型，比如 Get 请求通过中间件，Post 请求不通过中间件。打开`/src/girl/girl.module.ts`文件，在`forRoutes( )`方法中，把原来的字符串形式，改成对象形式，然后修改对象属性，就可以用来控制请求类型了。

```javascript
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CounterMiddleware)
      .forRoutes({ path: "girl", method: RequestMethod.GET });
  }
}
```

好了，中间件我们就讲到这里了。

<br/>

## 16. 模块 Module-基本使用和全局模块

### 基本使用方法

我们可以使用`nest g res boy`的模块，来创建一个`男孩`的模块。当模块创建好以后，`/src/app.module.ts`会自动引入`BoyModule`模块。

```javascript
import { Module } from "@nestjs/common";
import { GirlModule } from "./girl/girl.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoyModule } from "./boy/boy.module";

@Module({
  imports: [
    GirlModule,
    BoyModule,
    TypeOrmModule.forRoot({
      type: "mysql", // 数据库类型
      host: "localhost", // 数据库的连接地址host
      port: 3306, // 数据库的端口 3306
      username: "root", // 连接账号
      password: "root123", // 连接密码
      database: "nest_demo", // 连接的表名
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 充实次数
      synchronize: true, // 是否将实体同步到数据库
      autoLoadEntities: true, // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

而且会在`/src`目录下，生成一个`boy`的文件夹，这样一个模块就建立好了。

<br/>

### 共享模块的设置

创建好的`Boy`模块，只能在模块中进行调用，如果想其他模块需要调用此模块中的方法，需要进行设置。比如我们想在`girl.controller.ts`中使用`boy.service.ts`中的方法。 **exports 模块编写** 先到`body.module.ts`用`exports`导出模块中业务逻辑。

```javascript
import { Module } from "@nestjs/common";
import { BoyService } from "./boy.service";
import { BoyController } from "./boy.controller";

@Module({
  controllers: [BoyController],
  providers: [BoyService],
  exports: [BoyService],
})
export class BoyModule {}
```

**到 module 里设置注入**
然后再到`/src/girl.module.ts`中进行编写。我们先引入这个`service`文件。

```javascript
import { BoyService } from "../boy/boy.service";
```

然后设置注入`providers`，代码如下。

```javascript
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [BoyService,{
    provide:"girl",
    useClass:GirlService
  },{
    provide:"GirlArray",
    useValue:['小红','小翠','大鸭']
  },{
    provide:"MyFactory",
    useFactory(){
      console.log('myFactory---------:')
      return 'console.log() function'
    }
  }],

})
```

**进行使用** 这个注入设置配置完成后，就可以到`girl.controller.ts`进行引入使用了。

```javascript
import { BoyService } from "./../boy/boy.service";
```

引入后记得再`constructor`构造函数里，进行注入。

```javascript
constructor(
    @Inject('girl') private girlService:GirlService,
    @Inject('GirlArray') private girls:string[],
    @Inject('MyFactory') private myFactory:string,
    private  BoyService:BoyService
  ){}
```

然后我们改写下面的`test`方法。

```javascript
@Get('/test')
  test():string{
    return this.BoyService.findAll()
  }
```

到浏览器中查看最终效果，如果配置一切正常，可以看到已经完成了跨模块的使用。

<br/>

### 全局模块的使用

除了这种独立模块的创建和使用，我们还可以创建全局模块。全局模块的功能可以下发到子模块，然后子模块都可以使用。

**1.创建全局模块** 例如我们要创建一个`config`的全局模块，然后让每个模块都可以使用。这里我们先在`/src`文件夹下创建一个`config`文件夹，然后在里边创建`config.module.ts`文件，编写下面的内容（`@Global()`）。

```javascript
import { Module, Global } from "@nestjs/common";

@Global()
@Module({
  providers: [
    {
      provide: "Config",
      useValue: { shopName: "浪漫" },
    },
  ],
  exports: [
    {
      provide: "Config",
      useValue: { shopName: "浪漫" },
    },
  ],
})
export class ConfigModule {}
```

**2.设置全局引入** 有了文件后，我们还要配置`app.module.ts`文件，先把全局模块进行引入。

```javascript
import { ConfigModule } from "./config/config.module";
```

然后在文件中的`imports`里写入下面代码就可以了。

```javascript
@Module({
  imports: [GirlModule, BoyModule,ConfigModule
  ......
})
```

**3.进行使用** 上面两步完成后，我们就可以在任何模块中使用全局模块的内容了，比如我们要在 Girl 模块中进行使用。打开`/src/girl/girl.controller.ts`文件，新设置依赖注入。

```javascript
 constructor(
    ....
    @Inject('Config') private  shopName:string,
    private  BoyService:BoyService,

  ){}
```

有了这个依赖注入后，就值可以在方法中直接使用了。

```javascript
 @Get('/test')
  test():string{
    return this.shopName
  }
```

写完方法后，我们再到浏览器中访问`localhost:3000/girl/test/`路径，就可以看到这个全局模块中的内容已经可以使用了。 好了，这就是本节课的内容了，下节课我们继续学习模块中的动态模块相关的知识。

<br/>

## 17. 模块 Module-动态模块的编写

什么是动态模块那？其实就是在调用模块的时候可以进行传参的模块。里边的知识点就是如何接收参数，如何传递参数。

<br/>

### 创建动态模块

我为了省事（懒），这里还是在`config`模块里继续编写。NestJS 提供了一套固定写法，所以按照规则写就问题不大。打开`/src/config/config.module.ts`文件。

> ` static forRoot (option:string):DynamicModule{}`

```javascript
export class ConfigModule {
  static forRoot(option: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "Config",
          useValue: { shopName: "浪漫" + option },
        },
      ],
      exports: [
        {
          provide: "Config",
          useValue: { shopName: "浪漫" + option },
        },
      ],
    };
  }
}
```

设置动态路由，需要先编写一个静态方法，然后返回的参数需要是`DynamicModule`类型就可以实现动态模块了（注意这个 DynamicModule 需要用 import 进行引入）。这里我们传入一个参数`option`，要求是字符串类型。然后我们设置返回参数。这时候在`@Module`装饰器下的值就可以移入到这里进行编写了。 这样一个动态模块的就建立好了。

<br/>

### 传值进行使用

当动态模块编写完成后，我们还要进行使用。代码回到`app.module.ts`里，在`imports`里，给`ConfigModule`增加`forRoot('中心')`方法。

```javascript
@Module({
  imports: [GirlModule, BoyModule,ConfigModule.forRoot('中心'),TypeOrmModule.forRoot({
    type:'mysql',           // 数据库类型
    host:'localhost',       // 数据库的连接地址host
    port:3306,              // 数据库的端口 3306
    username:'root',        // 连接账号
    password:'root123',     // 连接密码
    database:'nest_demo',   // 连接的表名
    retryDelay:500,         // 重试连接数据库间隔
    retryAttempts:10,       // 充实次数
    synchronize:true,       // 是否将实体同步到数据库
    autoLoadEntities:true,  // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
  }) ],
  controllers: [],
  providers: [],
})
```

这样就可以给动态模块进行传值了。我们启动服务，然后访问一下`http://localhost:3000/girl/test`可以看到结果已经生成了。

<br/>

## 18. 数据库操作-TypeORM 中的一对一关系

### 项目环境

我从新在 D 盘的 code 目录下面新建了一个`Honglangman`的项目，然后我用`nest g rs girl —no-spec` 生成了一个`girl`的模块。又安装了 TypeORM 相关的组件和配置了数据库相关的信息。 然后在`app.module.ts`文件中加入数据库配置。

```javascript
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GirlModule } from "./girl/girl.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql", // 数据库类型
      host: "localhost", // 数据库的连接地址host
      port: 3306, // 数据库的端口 3306
      username: "root", // 连接账号
      password: "root123", // 连接密码
      database: "honglangman", // 连接的表名
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 允许重连次数
    }),
    GirlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

<br/>

### 错误问题

当我们在`app.module.ts`里配置数据库连接时，需要开启`synchronize:true`。但我们第一次 没有数据表时，是没有问题的，但是第二次再开启服务时，就会报`Table 'xxx' already exists` 的错误。 其实这个错误再 Mac 和 Linux 上就不会存在。所以可以把问题锁定在大小写上。这时候我们把配置项中的数据表项改为全小写，就不会报这个错误。

**错误的写法：**

```javascript
TypeOrmModule.forRoot({
      type:'mysql',           // 数据库类型
      host:'localhost',       // 数据库的连接地址host
      port:3306,              // 数据库的端口 3306
      database:'HongLangMan', // 连接的表名
      //.......
    }),
```

**正确写法：**

```javascript
TypeOrmModule.forRoot({
      type:'mysql',           // 数据库类型
      host:'localhost',       // 数据库的连接地址host
      port:3306,              // 数据库的端口 3306
      database:'honglangman', // 连接的表名
      //.......
    }),
```

<br/>

### 一对一关系设置

**原理**

一对一关系在实际项目中非常常见，这样的设计可以大大改善查询的效率。比如表里有很多女孩，假设 5000 条数据。进入程序首页，要显示一个简介列表。这时候为了查询性能的有优化就要设计一对一关系，没必要显示在列表中的信息，我们就放在附表里，也就是`girlDetail`表。 说完原理，我们再动手设置一下 NestJS TypeORM 如何设置一对一关系。打开`/src/girl/entities/girlDetail.entity.ts`文件，设置一对一关系。在代码的最后，先使用`@oneToOne`修饰符，再使用箭头函数的形式设置对应的类，就是 Girl 这个类。再使用`@JoinColumn()`这个修饰符，最后代码如下。

```javascript
import {
  Entity,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Girl } from "./girl.entity";

@Entity()
export class GirlDetail {
  //...
  @OneToOne(() => Girl)
  @JoinColumn()
  girl: Girl;
}
```

设置好后，保存代码，如果没有错误。再到数据库中查看，一对一的数据表关系就设置好了。

<br/>

### 自定义列名

可以自定义拼接方式。例如设置为`girl_id`。就可以修改代码为下面的形式。

```javascript
@OneToOne(()=>Girl)
@JoinColumn({name:'girl_id'})
girl:Girl
```

这时候数据表中的列名就变成了`girl_id`了。 这里的难点是，这时候我们使用的编程思想都是面向对象的，把一个表看成一个类，然后实例就是对象。所以我们这里在设置`OneToOne`的时候，我们了这个对象实例的方式。 好了，这节课的内容就先到这里了，希望小伙伴们花点时间，把这节课需要的代码都编写一下，然后继续跟着技术胖一起学习。

<br/>

## 19. 数据库操作-TypeORM 中一对多关系

什么情况下会产生一对多的关系。比如开始营业了，每服务一个顾客就产生一条服务记录。

<br/>

### 建立 Order 模块

我们使用命令创建一个 order 模块。

```javascript
nest g res order --no-spec
```

建立好后，在`order`模块中创建一个`order.entity.ts`的实体，然后编写实体代码如下。

```javascript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  orderDate: Date;

  @Column()
  orderMoney: number;
}
```

注意，这时候我们并没有建立一堆多的关系。

<br/>

### 一对多关系的建立

当我们的`order`实体建立好以后，我们再回到`girl`模块的实体中，来作一对多的设置。
在`girl.entiy.ts`文件的最后编写下面的代码。

```javascript
@OneToMany(()=>Order,(order)=>order.girl)
  @JoinColumn()
  order:Order[]; // 一对多关系
```

编写完成，我们再用`import`把`Order`实体引入过来。

```javascript
import { Order } from "../../order/entities/order.entity";
```

这时候`order.girl`会报错，因为我们还需要去`Order`实体中，设置多对一的关系`ManyToOne`。
打开`order.entity.ts`文件，在最后设置`多对一`关系.

```javascript
@ManyToOne(()=>Girl, girl=>girl.order)
  girl:Girl; // 多对一关系
```

写完后，记得还是需要把`girl实体`引入的。

```javascript
import { Girl } from "../../girl/entities/girl.entity";
```

这样我们就做好了一堆多的关系。

<br/>

### 在模块中引入

当我们做好了实体后，还需要到新建立的`order.module.ts`里用`imports`把实体引入一下。

```javascript
import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
```

这一步做完后，就可以启动服务`npm run start:dev`来看一下效果了。

```javascript
http://localhost:3000
```

这时候我们再到数据库中看一下结果，可以看到`Order`表已经建立，并且有了一个`girlId`的字段。这也标志这我们一对多的关系设置成功了。
