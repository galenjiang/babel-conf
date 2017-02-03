[参考网址](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
# babel-conf
configure for babel

# babel-cli 全局安装
```
$ npm install --global babel-cli

// 命令行编译
$ babel example.js -o compiled.js
$ babel src -d lib
```
# babel-cli 本地安装
// npm-script 编译
```
$ npm install --save-dev babel-cli
```
# babel-core 项目依赖
```
$ npm install --save-dev babel-core
```
# babel 配置文件
```
// 确定转换哪种语言规范
$ npm install --save-dev babel-preset-latest
$ npm install --save-dev babel-preset-react
$ npm install --save-dev babel-preset-stage-0
// 增加polyfill
$ npm install --save babel-polyfill
// 规范代码，用import来引入助手方法
$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime

{
  "presets": [
      "latest",
      "react",
      "stage-0"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```