# AJAX

### URL

URL(全称是 UniformResourceLocator)中文叫统一资源定位符，用于标识互联网上每个资源的唯一存放位置。

<br/>

### 组成部分

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092356427.png" alt="截图" style="zoom:50%;" />

<br/>

### 通讯过程

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092356128.png" alt="截图" style="zoom:50%;" />

<br/>

#### 请求方式

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357096.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

## Ajax 基础

<img src="a50aefb72421fa834c5af17df8428a7c.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357553.png" alt="截图" style="zoom:50%;" />

<br/>

### jQuery 中发起 Ajax 请求的三个方法

#### $.get()函数

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357243.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357203.png" alt="截图" style="zoom:50%;" />

#### $.post()函数

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357244.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357496.png" alt="截图" style="zoom:50%;" />

#### $.ajax()函数

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357155.png" alt="截图" style="zoom:50%;" />

<br/>

### 接口

使用 Ajax 请求数据时，被请求的 URL 地址，就叫做数据接口（简称接口）。同时，每个接口必须有请求方式。

#### 接口文档

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357943.png" alt="截图" style="zoom:50%;" />

<br/>

### 表单

#### 标签属性

**action**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357794.png" alt="截图" style="zoom:50%;" />

**target**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357105.png" alt="截图" style="zoom:50%;" />

**method**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092357427.png" alt="截图" style="zoom:50%;" />

**enctype**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358577.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358694.png" alt="截图" style="zoom:50%;" />

<br/>

### 同步提交

通过点击 submit 按钮，触发表单提交的操作，从而使页面跳转到 action URL 的行为，叫做表单的同步提交。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358670.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

### 通过 Ajax 提交表单数据

**监听表单提交事件**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358717.png" alt="截图" style="zoom:50%;" />

**阻止表单**

**阻止表单默认提交行为**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358265.png" alt="截图" style="zoom:50%;" />

**快速获取表单中的数据**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358369.png" alt="截图" style="zoom:50%;" />

<br/>

### 模板引擎

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358467.png" alt="截图" style="zoom:50%;" />

#### 模板引擎的好处

1. 减少了字符串的拼接操作
2. 使代码结构更清晰
3. 使代码更易于阅读与维护

<br/>

#### art-template 模板引擎

**使用步骤**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358234.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358945.png" alt="截图" style="zoom:50%;" />

<br/>

**标准语法**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358108.png" alt="截图" style="zoom:50%;" />

<br/>

**原文输出**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358504.png" alt="截图" style="zoom:50%;" />

<br/>

**条件输出**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358563.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358140.png" alt="截图" style="zoom:50%;" />

<br/>

**循环输出**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358521.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358328.png" alt="截图" style="zoom:50%;" />

<br/>

**过滤器**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358857.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358842.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092358026.png" alt="截图" style="zoom:50%;" />

<br/>

**实现原理**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092359426.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092359328.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092359544.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092359055.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092359130.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310092359085.png" alt="截图" style="zoom:50%;" />

<br/>

**封装简易模板引擎**

**实现步骤**

1. 定义模板结构
2. 预调用模板引擎
3. 封装 template 函数
4. 导入并使用自定义的模板引擎

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100000312.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100000157.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

## Ajax 加强

### XMLHttpRequest

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100000418.png" alt="截图" style="zoom:50%;" />

<br/>

#### xhr 发起 GET 请求

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001747.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001779.png" alt="截图" style="zoom:50%;" />

**readyState 属性**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001591.png" alt="截图" style="zoom:50%;" />

**查询字符串**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001945.png" alt="截图" style="zoom:50%;" />

**URL 编码与解码**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001556.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001706.png" alt="截图" style="zoom:50%;" />

<br/>

### xhr 发起 POST 请求

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001926.png" alt="截图" style="zoom:50%;" />

<br/>

### 数据交换格式

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001580.png" alt="截图" style="zoom:50%;" />

<br/>

#### XML

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100001472.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100002705.png" alt="截图" style="zoom:50%;" />

#### JSON

JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。

**JSON 的作用**：在计算机与网络之间存储和传输数据。

**JSON 的本质**：用字符串来表示 Javascript 对象数据或数组数据

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100002806.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100002415.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100002671.png" alt="截图" style="zoom:50%;" />

<br/>

**JSON 语法注意事项**

1. 属性名必须使用双引号包裹
2. 字符串类型的值必须使用双引号包裹
3. JSON 中不允许使用单引号表示字符串
4. JSON 中不能写注释
5. JSON 的最外层必须是对象或数组格式
6. 不能使用 或函数作为 JSON 的值

#### JSON 和 JS 对象的互转

**JSON.parse()、JSON.stringify()**

  <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003741.png" alt="截图" style="zoom:50%;" />

<br/>

**序列化和反序列化**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003572.png" alt="截图" style="zoom:50%;" />

#### 封装自己的 Ajax 函数

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003376.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003521.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003199.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003614.png" alt="截图" style="zoom:50%;" />

#### XMLHttpRequest Level2 的新特性

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003894.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003284.png" alt="截图" style="zoom:50%;" />

<br/>

**设置 HTTP 请求时限**

xhr.timeout = \*\*、xhr.ontimeout = function(e){}

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003680.png" alt="截图" style="zoom:50%;" />

<br/>

**FormData 对象管理表单数据**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003536.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100003670.png" alt="截图" style="zoom:50%;" />

<br/>

**上传文件**

<img src="4ab041ffb6064eff60ecadf8f210fdb7.png" alt="截图" style="zoom:50%;" />

**显示文件上传进度**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004729.png" alt="截图" style="zoom:50%;" />

<br/>

```html
<input type="file" id="file1" />
<button id="upLoad">上传</button>

<script>
  var Upload = document.querySelector("#upLoad");

  Upload.addEventListener("click", function () {
    var files = document.querySelector("#file1").files;
    if (files.length <= 0) {
      return alert("请选择要上传的文件");
    }
    var fd = new FormData();
    // 将用户选择的文件，添加到FormData中
    fd.append("avat", files[0]);

    var xhr = new XMLHttpRequest();

    // 计算上传进度
    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        var pC = Math.ceil((e.loaded / e.total) * 100);
        console.log(pC);
      }
    };

    xhr.open("POST", "www.baidu.com");
    xhr.send(fd);

    xhr.onreadystatechange = function () {
      if (xhr.readyState **= 4 && xhr.status **= 200) {
        alert("上传成功！");
      }
    };
  });
</script>
```

<br/>

### jQuery 实现文件上传

**上传步骤**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004205.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004051.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004476.png" alt="截图" style="zoom:50%;" />

<br/>

**实现 loading 效果**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004519.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004748.png" alt="截图" style="zoom:50%;" />

#### axios

Axios 是用于网络数据请求的库

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004629.png" alt="截图" style="zoom:50%;" />

#### axios 发起 GET 请求

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100004018.png" alt="截图" style="zoom:50%;" />

#### axios 发起 POST 请求

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005529.png" alt="截图" style="zoom:50%;" />

#### 直接使用 axios 发起请求

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005355.png" alt="截图" style="zoom:50%;" />

<br/>

### 跨域与 JSONP

#### 同源策略与跨域

**同源策略**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005168.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005106.png" alt="截图" style="zoom:50%;" />

**跨域**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005394.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005608.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005853.png" alt="截图" style="zoom:50%;" />

#### JSONP

JSONP 的实现原理：通过`<script>`标签的 src 属性，请求跨域的数据接口，并通过函数调用的形式,接收跨域接口响应回来的数据。

![](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100006034.png)

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005352.png" alt="截图" style="zoom:50%;" />

<br/>

**jQuery 中的 JSONP**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100005756.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007806.png" alt="截图" style="zoom:50%;" />

<br/>

### 防抖和节流

#### **防抖**

防抖策略(debounce)：当事件被触发后，延迟 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007152.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007743.png" alt="截图" style="zoom:50%;" />

#### **节流**

节流策略(throttle)：减少一段时间内事件的触发频率。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007677.png" alt="截图" style="zoom:50%;" />

**节流案例**.

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007089.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007342.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007971.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

## HTTP 协议加强

### 通信

通信，就是信息的传递和交换。

通信三要素：

1. 通信的主题
2. 通信的内容
3. 通信的方式

#### **通信协议**

通信协议(Communication Protocol），是指通信的双方完成通信所必须遵守的规则和约定。
通俗的理解：通信双方采用约定好的格式来发送和接收消息，这种事先约定好的通信格式，就叫做通信协议。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007022.png" alt="截图" style="zoom:50%;" />

**HTTP 协议**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100007941.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100008263.png" alt="截图" style="zoom:50%;" />

#### HTTP 请求消息

由于 HTTP 协议属于客户端浏览器和服务器之间的通信协议。因此，客户端发起的请求叫做 HTTP 请求，客户端发送到服务器的消息，叫做 HTTP 请求消息。

注意：HTTP 请求消息又叫做 HTTP 请求报文。

**HTTP 请求消息的组成部分**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100008198.png" alt="截图" style="zoom:50%;" />

1.请求行

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100008973.png" alt="截图" style="zoom:50%;" />

2.请求头部

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100008759.png" alt="截图" style="zoom:50%;" />

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009698.png" alt="截图" style="zoom:50%;" />

3.空行

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009443.png" alt="截图" style="zoom:50%;" />

4.请求体

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009927.png" alt="截图" style="zoom:50%;" />

#### HTTP 响应消息

响应消息就是服务器响应给客户端的消息内容，也叫作响应报文。

**HTTP 响应消息的组成部分**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009778.png" alt="截图" style="zoom:50%;" />

1.状态行

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009404.png" alt="截图" style="zoom:50%;" />

2.响应头部

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009522.png" alt="截图" style="zoom:50%;" />

3.空行

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009474.png" alt="截图" style="zoom:50%;" />

4.响应体

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009047.png" alt="截图" style="zoom:50%;" />

#### HTTP 请求方法

HTTP 请求方法，属于 HTTP 协议中的一部分，请求方法的作用是:用来表明要对服务器上的资源执行的操作。最常用的请求方法是 GET 和 POST。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009736.png" alt="截图" style="zoom:50%;" />

#### HTTP 响应状态代码

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009803.png" alt="截图" style="zoom:50%;" />

**状态码的组成及分类**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100009333.png" alt="截图" style="zoom:50%;" />

**成功相关**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100010265.png" alt="截图" style="zoom:50%;" />

**重定向相关**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100010038.png" alt="截图" style="zoom:50%;" />

**客户端错误相关**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100010950.png" alt="截图" style="zoom:50%;" />

**服务端错误相关**

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310100010576.png" alt="截图" style="zoom:50%;" />
