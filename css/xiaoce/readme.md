## 界面搭框架及经验

水平方向一般禁止滚动条， 垂直方向出现滚动条
- 水平和垂直两个方向都滚动， 页面会摇晃， 易产生误操作
- 垂直方向滚动是开发主要方式
  
- margin: 0 auto; max-width:960px 美元;
- flex 布局
  flex-grow放大比例  flex-basic flex-shrink缩小比例  flex-wrap
  当网页由PC到mobile时， 缩小阵仗

  经验 简单适配PC到mobile  照顾所有的用户
  PC 大手大脚一点， max-width margin: auto  padding margin 使页面空旷一点
  moblie flex-shrink 让关键部分坚挺一点