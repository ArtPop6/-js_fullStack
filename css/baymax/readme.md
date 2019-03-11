# 相对单位，为了自适应
  不同的移动设备
  750px
  iphine  XR 小手机
  小米 华为 
  iphone 大手机 max
  小米 华为
  vw,vh 按比例分配宽/高 20% 20vh 100vh最外层主体容器

  em 移动端少用px，用em，rem用于细致的每个盒子或盒子模型的大小等比例定义
  em 是相对自身的自体大小来比例
  10em 10*14px = 140px
  rem html 根元素上的fontSize

  :before :after 伪元素
  没有标签，但却可以像真正的元素一样 来在页面上占位子。
  dom 文档里不需要写这个元素，副作用，不回影响到内容的现实。
  使用css里声明，content属性是必需的，一般为空

  html默认的字体大小是16px
  如果没有设置， 会使用父级， 或body font-size

  