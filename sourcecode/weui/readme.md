stylus
1. @import 文件引入, 一个文件做一件事, 有利于代码的维护及管理 多人协作
/base/reset 基础的reset任务
base 是核心不能变  widget
@import 让我们可以做文件的分离和管理， 多人协作，目录让我们看到了思想及野心。
variable 变量 当是个大项目时, 有大量的变量要维护, variable 目录 

weui.styl 是一个入口文件只有一个入口，里面很多部门 @import 串起来各个部分
base / widget  
mixin 混入要调用的地方
- reset.styl
- variable 
  - global.styl
  - weui-button.styl 按钮上颜色定义
- weui-button