function findKthLargest(nums, k) {
    const arr = quick_sort(nums);
    return arr[k-1];
}
// 手写快拍，promise，对时间空间要求高就算法
function quick_sort(arr) {
    if (arr.length <= 1) return arr;
    var left = [],
        right = [],
        // 四舍五入
        baseDot = Math.round(arr.length / 2),
        // splice返回数组
        base = arr.splice(baseDot, 1)[0];
    for(var i = 0; i < arr.length; i ++) { // O(N)
        if (arr[i] < base) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quick_sort(left).concat([base], quick_sort(right)); // 递归 O(log2N)
    // 递归，多小事，树

}