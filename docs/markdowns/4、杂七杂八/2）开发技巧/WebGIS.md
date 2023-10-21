# QGIS

## Shp 文件转 Geojson 格式

### 导入 shp 文件，打开属性表检查是否乱码

![image-20230720105916781](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211632803.png)

<br/>

### 配置坐标系，若乱码，则需配置编码格式

![image-20230720110014004](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633553.png)

<br/>

### 导出，要素另存，设置格式以及坐标系

![image-20230720110051534](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633473.png)

<br/>

### 设置相关精度

![image-20230720110226069](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633587.png)

<br/>

<br/>

## ArcGIS 双线转单线

> 参考教程：
>
> [CSDN 图文](https://blog.csdn.net/Lois_merry/article/details/118642824 "ArcGIS 双线转单线")
>
> [Bilibili 视频](https://www.bilibili.com/video/BV1Da4y1L7Ey/?p=1&share_medium=android&share_plat=android&share_session_id=a10c065d-acf1-4ab4-a2b8-4649130f49ad&share_source=WEIXIN&share_tag=s_i&timestamp=1629182749&unique_k=XMkbu2&vd_source=d46cff13fdc735149625cfc607ca63fc "ArcGIS 双线转单线")

### 导入 shp 文件，设置缓冲区

![image-20230720102832752](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633226.png)

<br/>

### 设置缓冲区，填充颜色

![image-20230720103934074](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633275.png)

<br/>

### 导出 TIFF 格式文件

![image-20230720104052195](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633470.png)

![image-20230720104104964](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633514.png)

<br/>

### 导入生成的 TIFF 文件

![image-20230720104218141](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633528.png)

![image-20230720104244827](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633344.png)

<br/>

### 设置 TIFF 图层属性

![image-20230720104332252](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633693.png)

<br/>

### 在右侧目录中新建折线图层

![image-202310211633109](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211633109.png)

<br/>

### 设置 TIFF 坐标

![image-20230720104902490](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634629.png)

![image-20230720104914991](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634431.png)

<br/>

### 启用编辑器，开始编辑

![image-20230720104639523](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634544.png)

![image-20230720104733068](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634517.png)

![image-20230720104757918](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634976.png)

<br/>

### 矢量化配置

![image-20230720105005329](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634408.png)

![image-20230720105017380](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634525.png)

![image-20230720105048826](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634058.png)

![image-20230720105112564](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634892.png)

<br/>

### 导出 shp 数据文件

![image-20230720105148188](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211634337.png)

<br/>

<br/>

## 发布地表覆盖图层

### 导入地表覆盖 tif 数据

#### 栅格转矢量

![image-20230531141533197](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211644473.png)

<br/>

#### 创建字段名：value

![image-20230531141607962](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211645929.png)

<br/>

#### 设置新字段：color，导入命令

```
CASE
WHEN "value" = 10
THEN '#ffa1ff'
WHEN "value" = 20
THEN '#006400'
WHEN "value" = 30
THEN '#64ff00'
WHEN "value" = 40
THEN '#00ff79'
WHEN "value" = 50
THEN '#0064ff'
WHEN "value" = 60
THEN '#0000ff'
WHEN "value" = 70
THEN '#64642e'
WHEN "value" = 80
THEN '#ff0000'
WHEN "value" = 90
THEN '#bfbfbf'
WHEN "value" = 100
THEN '#c9f0ff'
WHEN "value" = 255
THEN '#00c9ff'
WHEN "value" = 0
THEN '#000000'
ELSE '#000000'
END
```

![image-20230531150022011](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211645693.png)

<br/>

#### 导出 shp 格式，选择坐标

![image-20230531150725091](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211646751.png)

<br/>

### 将市界导入 QGIS

#### 打开矢量，选择线转多边形

![image-20230531153105740](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211647665.png)

<br/>

#### 导出，格式选择 shp，选择坐标

![image-20230531153526551](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211647755.png)
