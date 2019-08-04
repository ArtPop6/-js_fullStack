// console.log('hello ts')
// tsc --watch
let decLiteral: number = 1;
// decLiteral = "12121";
let hexLiteral: number = 0xf00d;

let user_name: string = "bob";
let sentence: string = `hello, my name is ${name}`;

let list:number[] = [1,2,3];
// <泛型，内部类型>
let list2:Array<number> = [1, 2, 3];

function div(x) {
    // x不能=0
    // 1000/x
    if (isFinite(1000/x)) {
        return 'Number is NOT Infinity'
    };
    return 'Number is Infinity';
}
console.log(div(0));