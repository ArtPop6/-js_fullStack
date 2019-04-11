js是单线程的， 所以有异步
promise执行有resolve抛出， promise.then 才能接受
success回调 then(p)
fail        catch(p)