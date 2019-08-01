// var arr = new Array(6)
// arr[0] = "10"
// arr[1] = "5"
// arr[2] = "40"
// arr[3] = "25"
// arr[4] = "1000"
// arr[5] = "1"
// function sortNumber(a,b)
// {
// return a - b
// }
// console.log(arr.sort(sortNumber));
// [3,1,6].sort((a,b) => b-a)[1]
// [1, 4, 2, 6, 9, 10]
function findKthLargest (nums, k) {
    if (k < 0 || k > nums.length - 1) return NaN;
    return nums.sort((a, b) => b - a)[k - 1]
}
console.log(findKthLargest([1, 4, 2, 6, 9, 10], 2))
// 简单排序算法 复杂度是n平方