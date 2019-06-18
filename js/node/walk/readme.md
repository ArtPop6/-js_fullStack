- readdir
  读目录里内容  IO操作异步
  回调会带来回调地狱
  readdirSync会同步进行  Async异步吃 sync同步

  从上往下执行，不能一下执行完，两个耗时任务，一个立即执行

  JS是单线程的， 用回调或Promise，释放主线程的控制权， 主要因为JS是前端DOM的编程， 用户交互比较多，
  等到执行完后，再通过event-loop机制，拿回控制权(callback， resolve)
  来到了node， JS获取了服务器端的能力， readdirSync()等一等到执行完再接着走