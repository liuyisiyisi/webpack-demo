#初始化一个npm项目并使用默认参数创建package.json
npm init -y

#安装了指定版本的webpack与webpack-cli
npm install --save-dev webpack@4.43.0    webpack-cli@3.3.12

#从a.js文件开始，按照模块引入的顺序把所有代码打包到bundle.js文件里
npx webpack a.js -o bundle.js
    -----------------------------------------------------    
    在打包时报错------------  code: 'ERR_OSSL_EVP_UNSUPPORTED'
    解决方案----------------  在命令行执行$env:NODE_OPTIONS="--openssl-legacy-provider"


