# Babel使用

+ 根据官方网站下载

+ npm install --save-dev @babel/core @babel/cli @babel/preset-env 

  npm install --save @babel/polyfill 

+ cli（control-line interface）单独全局安装是无效的，必须和core在同一个目录下

+ 注意.babelrc配置文件（.rc文件是资源文件,包括比如对话框、菜单、图标、字符串等资源信息。 使用.rc资源文件的目的是为了对程序中用到的大量的资源进行统一的管理。）

+ 如果没有全局安装core和cli模块，就要在@babel文件目录下输入指令，最好使用npx前缀

  + 例如：npx  babel  js/src  -d  js/dir
  + 这种效果可以替代全局安装也可以使用指令

