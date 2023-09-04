const path = require('path');
module.exports = {
    entry: './a.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    // 增加loader的配置
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    mode: 'none'
};