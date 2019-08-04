// console.log('hello ts')
// tsc --watch
var decLiteral = 1;
// decLiteral = "12121";
var hexLiteral = 0xf00d;
var user_name = "bob";
var sentence = "hello, my name is " + name;
var list = [1, 2, 3];
// <泛型，内部类型>
var list2 = [1, 2, 3];
function div(x) {
    // x不能=0
    // 1000/x
    if (isFinite(1000 / x)) {
        return 'Number is NOT Infinity';
    }
    ;
    return 'Number is Infinity';
}
console.log(div(0));
