const path = require("path");
module.exports = {
    // mode: "development", //打包为开发模式
    mode: "production", //打包为生产模式
    // 入口配置的对象中，属性为输出的js文件名，属性值为入口文件
    entry: {
        // app1: "./input.js",
        app1: "./bar.js",
        app1: "./foo.js",
    }, //入口文件,从项目根目录指定
    output: { //输出路径和文件名，使用path模块resolve方法将输出路径解析为绝对路径
        path: path.resolve(__dirname, "./dist/js"), //将js文件打包到dist/js的目录
        filename: "[name].js" //使用[name]打包出来的js文件会分别按照入口文件配置的属性来命名
    }
}