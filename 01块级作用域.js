
var a = 10
let b = 20;
function add() {
    var c = 30
    console.log('',a,b,c);
}
add()
if (true) {
    var d = 40
    //使用let定义的变量只能在语法块中使用
    let e = 50
}
console.log('', d, e);// e is not defined
/*
var 关键字定义的变量 有两个作用域 全局作用域 和局部作用域 声明的变量有变量提升
let 关键字定义的变量 有三个作用域 全局作用域 和局部作用域 和块级作用域 神功的变量没有变量提升
*/
