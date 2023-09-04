// 对于模块a.js或b.js，我们使用大括号方式导出模块
// e.js
import { name, age, add } from './b.js'
console.log(name, age);   // 控制台输出'Jack'和18
console.log(add(1, 8));   // 控制台输出9