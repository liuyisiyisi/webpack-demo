// 对于匿名(default)导出的模块c.js，我们自定义一个变量moduleC代表其导出值
// d.js
import moduleC from './c.js'
console.log(moduleC)   // 控制台输出一个对象｛price: 285, id: 12｝