fullstack 全栈
Front Engineer
Backend  /api

restful  api
浏览器与服务器通信方式的一种设计风格

yarn add json-server

- restful 的世界里， 一切皆资源可以用url描述
- url 来唯一定位资源的识别符
/posts/:id/comments
- 加一条评论 怎么办? 只是添加了评论资源 /comments/2
  {
      id: 2,
      body: '好巧，你那边也在下雨',
      postId: 1
  }
  /comments 设计好URL  Post method来发送
  增加post
- 设计有意义的URL 
  资源  状态改变 
  前后端通信动词:
  POST /comments 加一条评论 id：2
  修改一下内容
  PUT  /comments/2 body: '最美不过下雨天，一起与你...'
  虚拟世界任何东西都是资源 都完全实物化
  操作           SQL方法   HTTP动词
  CREATE 创造资源 INSERT    POST
  READ           SELECT    GET
  UPDATE         UPDATE    PUT/PATCH {body: '',postId:1} PUT是把完整内容交给他  PATCH只要给一部分
  DELETE          DELETE   DELETE
  状态  切换  ， 使用定义的谓语动词

