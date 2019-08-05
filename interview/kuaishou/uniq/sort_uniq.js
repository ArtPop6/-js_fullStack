function unique(arr) {
    var res = [];
    // 确保是数组
    var sortedArray = array.concat.sort();
    var seen;
    for (var i = 0, len = sortedArray.length; i < len; i ++) {
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i]);
        }
        seen = sortedArray[i];
    }
    return res;
}