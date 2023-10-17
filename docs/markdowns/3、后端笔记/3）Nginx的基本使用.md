# Nginx

## Nginx 简介

### 诞生背景

解决 C10K 问题： 10000 concurrent connection，同时处理 10000 个并发连接。即服务器同时支持成千上万并发客户端的问题。

### 特点

- 反向代理
- 负载均衡
- epoll - IO 多路复用
- 高并发，最大 50000 个连接
- 高性能、低内存消耗
- 热部署
- .....

## 服务启停

### 查看进程

> `ps -ef|grep nginx`
>
> 查看 Nginx 进程
>
> 1. **master**：主进程，负责读取和验证配置文件以及管理 worker 进程，只有一个。
> 2. **worker**：工作进程，负责处理实际的请求，可以有多个。

![image-20230718223243786](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151723613.png)

### 控制 Nginx

> `nginx -S **`
>
> 1. **quit**：停止
> 2. **stop**：立即（强制）停止
> 3. **reload**：重载配置文件
> 4. **reopen**：重新打开日志文件

### 静态站点

> `nginx -V`
>
> 查看版本及文件信息
>
> `nginx -t`
>
> 查看 conf 配置文件位置

**如查看结果：**

![image-20230718231049612](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724166.png)

**使用 vscode 打开**：

`code /opt/ homebrew/etc/nginx/nginx.conf`

#### 反向代理（proxy_pass) / 负载均衡（upstream）

> 通过配置 location 来对请求地址进行反向代理，通过配置 upstream 中的 server 服务器以及 weight 权重来实现负载均衡。

![image-20230718235705619](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724141.png)

<br/>

# 本地简易部署

## Nginx 目录结构

![image-20230519164342458](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724783.png)

<br/>

## 导入打包文件（dist)

### 在 /html 目录下添加项目文件夹

![image-20230519164604379](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724213.png)

### 在项目文件夹中添加 dist 打包文件夹里的全部文件

![image-20230519164718638](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724896.png)

<br/>

## 修改配置文件

### 打开 /conf 文件夹中的 nginx.conf 文件

![image-20230519164837500](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724476.png)

### 添加项目部署配置

![image-20230915172324686](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724880.png)

<br/>

## 启动 Nginx

### 双击打开 nginx.exe

![image-20230519165753752](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724698.png)

### 重新载入 nginx，检查服务是否开启成功

![image-20230519175307974](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202309151724242.png)
