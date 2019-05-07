// 推平一个数组
// 
const _ = require('lodash');
const arr1 = [99, 0, 33, [101, 202, [303]], 1, 2];
const arr2 = [2, 1, 2];
const users = [
    {user: 'fred', age: 48},
    {user: 'barney', age: 36},
    {user: 'fred', age: 40},
    {user: 'barney', age: 34},
]
const sortedUser = _.sortBy(users, ['user', 'age']);

// 深度超过两层有问题
const flattenArr1 = _.flattenDeep(arr1);
const flattenArr2 = _.uniq(arr2);
console.log(flattenArr1);
console.log(flattenArr2);
console.log(sortedUser);