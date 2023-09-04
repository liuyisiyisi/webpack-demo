// 导出的模块有两个变量name和age，一个函数add
// b.js
var name = 'Jack';
var age = 18;
function add(a, b) {
    return a + b;
}
export { name, age, add };