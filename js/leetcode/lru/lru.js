// 不用每次都去硬盘里找， 在内存中缓存
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.obj = {};   // key
    this.arr = [];
}

// json Object对象字面量来
LRUCache.prototype.get = function(key) {
    // 只存正值,没有-1， 有，返回值设置为最近使用
    // if(this.obj.key) {
    //     this.arr.unshift(key);
    //     return this.obj[key];
    // } else {
    //     return -1;
    // }
    var val = this.obj[key];
    // 容量不大的内存服务于最多的进程
    if(val > 0) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
    } else {
        return -1;
    }
}
LRUCache.prototype.set = function(key, value) {
    if (this.obj[key]) {
        this.obj[key] = value; // 更新
        // 最近使用的 数组的最前面[0]
        // 之前的删除？
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
    }
    // 如果有这个值key,返回;
    // 没有
    if(this.capacity === this.arr.length) {
        // 放满了
        var k = this.arr.pop(); // 最近最少使用
        this.obj[k] = undefined; // 删除了
    }
    this.obj[key] = value;
    this.arr.unshift(key);
    //   没有的话,两种可能: 1.如果内存满了,arr.pop(),再存进去到arr里
}