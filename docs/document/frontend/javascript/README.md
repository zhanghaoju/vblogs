---
title: 变量
date: 2022-08-31 23:50:11
permalink: /document/frontend/javascript/
---

### 变量

变量是对值的具名引用，变量就是为值起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。

注意：JavaScript 的变量名区分大小写，A和a是两个不同的变量
```javascript
	let c = 5;
	let C = 10;
	console.log(c);// 5
	console.log(C); // 10
```

#### 变量的本质

变量的本质：变量是程序在内存中申请的一块用来存放数据的空间

#### 声明变量并赋值

```javascript
  // 声明变量
  let age;
  // 赋值 把值存入变量中
  age = 18; // 把10给age，赋值
  console.log(age);
  // 变量的初始化：声明一个变量并赋值
  let myName = 'Karim';
  console.log(myName);
```

- 如果变量重新声明了一个已经存在的变量是无效的(`var`)
```javascript
var a = 1;
var a;
console.log(a) // 1
```

- 如果二次声明的变量赋值，则会覆盖前面的值(`var`)
```javascript
var a = 1;
var a = 2;
console.log(a) // 2
```

#### JavaScript的引擎方式

JavaScript引擎的工作方式，先解析代码，获取所有被声明的变量，然后再一行一行的运行。

#### 变量提升

所有的变量声明语句都会被提升到代码的头部，这就叫做变量提升(`hoisting`)
```javascript
	let a;
	console.log(a); // 变量a已声明，但还未赋值 返回undefined
	a = 1;
```
### 常量

使用const声明的变量称为"常量"，他们不能被修改，如果修改会报错
```javascript
const myBirthday = '18.04.1982'
myBirthday = '19.02.1994' // 报错 不能对常量进行二次赋值
```
