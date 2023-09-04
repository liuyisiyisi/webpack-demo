var path = require('path');
module.exports = {
    entry: './a.js',
    output: {
        path: path.resolve(__dirname, ''), //path.resolve(__dirname, '')表示的其实就是当前文件夹根目录的绝对路径
        filename: 'bundle.js'
    },
    mode: 'none' //mode是Webpack的打包模式，默认是'production'，表示给生产环境打包的。现在我们设置成'none'，这样代码就不会压缩了。
};