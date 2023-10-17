# Typescript

## TS 简介

![image-20230417165812678](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851086.png)

![image-20230417165828762](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851228.png)

<br/>

<br/>

## TS 开发环境搭建

### **如何在控制台直接运行 ts，并可查看打印等输出内容**

**1、在 vscode 中安装插件 Code Runner**

![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851824.png)

**2、安装 ts 包**

```cobol
npm  i typescript ts-node @types/node@* -g
```

![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851714.png)

**3、点击文件右上角的运行按钮即可**

![img](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851398.png)

<br/>

### 自动编译

设置 VSCode 自动编译，省去敲命令编译文件，由工具自动完成，提高效率。

运行 `tsc --init`，创建 `tsconfig.json` 文件；
修改 `tsconfig.json` 文件，设置编译后的 js 文件夹。快速查找 `outDir`，输出路径修改为：`"outDir": "./js/"`；

设置 vscode 监视任务，之后修改项目中的 ts 代码时，会自动生成对应 js；
（或运行 `tsc -w `命令监听）

<br/>

<br/>

## TS 基本数据类型

![image-20230417171630827](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851667.png)

![image-20230417171905158](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851505.png)

<br/>

<br/>

## TS 编译选项

![image-20230417172125187](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851978.png)

![image-20230417172852105](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151851981.png)

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852757.png" alt="image-20230417173005996" style="zoom: 67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852014.png" alt="image-20230417173340097" style="zoom:67%;" />

<br/>

<br/>

## 面向对象

### 类（class）

![image-20230418100419520](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852094.png)

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852313.png" alt="image-20230418101345704" style="zoom: 67%;" />

#### 构造函数和 this

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852069.png" alt="image-20230418103258732" style="zoom:67%;" />

#### 继承

> class Dog extends Animal
> 此时，Animal 被称为父类，Dog 被称为子类；
> 使用继承后，子类将会拥有父类所有的方法和属性通过==继承==可以将多个类中共有的代码写在一个父类中，这 2 样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法如果希望在子类中添加一些父类中没有的属性或方法直接加就行；
> 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法，这种子类覆盖掉父类方法的形式，我们称为方法==重写==；
>
> **super 关键字**：在类的方法中 super 就表示当前类的父
>
> 如果子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用（super(...))
>
> **抽象类**：以 abstract 开头的类是抽象类。
>
> 抽象类和其他类区别不大，只是不能用来创建对象，抽象类就是专门用来被继承的类；
>
> 抽象类中可以添加抽象方法。

```js
(function () {
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    say() {
      console.log('谁在叫');
    }

    //定义一个抽象方法
    //抽象方法使用abstract开头，没有方法体
    //抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract test(): void
  }

  class Dog extends Animal {
    age: number;1	2
    constructor(name: string, age: number) {
      super(name, age); // 调用父类构造函数
      this.age = age + 1;
    }
    run() {
      console.log(`${this.name}在跑`);
    }
    say() {
      super.say()
      console.log('汪汪汪');
    }
    test() {
      console.log('test');
    }
  }
  class Cat extends Animal {
    say() {
      console.log('喵喵喵');
    }
    test() {
      console.log('test');
    }
  }

  const dog = new Dog('Fido', 3);
  console.log(dog.name, dog.age);
  dog.say();
  dog.run();
  dog.test()

  const cat = new Cat('mm', 2);
  console.log(cat.name, cat.age);
  cat.say();
  cat.test()

})()
```

<br/>

### 接口

> **抽象类：**强调的是把共同(共有、相同)的属性方法， 抽象出来，统一写在一个地方（他们的实现代码是一样的），方便维护（面向对象的继承特性）。
>
> **接口：** 抽象的是行为 - 同一种行为的不同实现方式。当多个对象都拥有相同的行为，但是行为的具体实现方式不一样的时候可以用接口抽象（面向对象中的多态特性）。
>
> 接口也相当于==语法规范==，在使用 ts 编写的时候，需要注重的就是数据类型以及语法规范，恰好这里提供了一个接口，在进行传值的时候，传值的类型以及字段必须符合我们预期的类型规范才可以。
>
> 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法,同时接口也可以当成类型声明去使用
>
> 接口可以在定义类的时候去限制类的结构，接口中的所有的属性都不能有实际的值。接口，只定义对象的结构，而不考虑实际值。在接口中所有的方法都是抽象方法，没有返回值（使用 void)。
>
> 定义类时，可以使类去实现一个接口，实现接口就是使类满足接口的要求。

```tsx
interface myInterface {
  name: string;
  age: number;
}

interface myInterface {
  gender: string;
  sayHello(): void;
}

class myClass implements myInterface {
  constructor(public name: string, public age: number, public gender: string) {} //构造函数的参数可以使用访问修饰符（public、private、protected）来定义类的属性，并且自动将参数赋值给对应的属性。
  sayHello() {
    console.log("666");
  }
}

const XM = new myClass("xm", 20, "male");
console.log(XM.name);
console.log(XM.age);
XM.sayHello(); // 666
```

<br/>

### 属性的封装

> - public 修饰的属性可以在任意位置访问（修改）默认值
> - private 私有属性，私有属性只能在类内部进行访问（修改）通过在类中添加方法使得私有属性可以被外部访问
> - protected 受包含的属性，只能在当前类和当前类的子类中使用

#### **常规方法**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852392.png" alt="image-20230418223049877" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852687.png" alt="image-20230418223315633" style="zoom:67%;" />

#### **TS 方法**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852195.png" alt="image-20230418223604462" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852498.png" alt="image-20230418223637511" style="zoom:67%;" />

<br/>

### 泛型

在定义函数或是类时，如果遇到类型不明确就可以使用泛型。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852623.png" alt="image-20230419100904908" style="zoom:80%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852562.png" alt="image-20230419101319740" style="zoom:80%;" />

> **interface**：是定义接口的关键字。
>
> **implement**：是实现接口的关键字，用于规范传入参数的类型。
>
> **extends**：是子类继承父类的关键字，用于指定子类属性的类型。

<br/>

<br/>

## 语法巩固

### 数组类型定义

![image-20230824144126759](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852844.png)

<br/>

### 接口定义

![image-20230824131923346](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852154.png)

<br/>

### 函数定义

![image-20230824144420589](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151852513.png)

<br/>

### 数组对象定义

![image-20230824144632718](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151853410.png)

### 泛型

![image-20230824150131176](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151853196.png)

<br/>

#### 拓展

![image-20230824150933618](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151853777.png)

![image-20230824150945699](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151853581.png)

![image-20230824151128055](https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310151853059.png)
