// 'aba'验证回文
// 原生js api但时间复杂度有缺失
// var s = 'aba';
// a = s.split('');
// for(i=length-1; i>0;i--) {
//     b = a[i]
// }

// 'aba'.split("").reverse().join("") === 'aba'
// 'aba'


// function validPalindrome(str) {
//     if (!str || typeof str != 'string') return false;
//     return str.split("").reverse().join("") === str;
// }
// 大小写
// 空， 特殊符号 忽略  不增加空间 指针
// A man, a plan, a canal: Panama
//  /[0-9a-zA-Z]/.test('1')    true
//  /^[\w]$/.test('12')  false
//  /^[\w]$/.test('1')  true
//  /^[\w]$/.test('1')  true
var isValidChar = (c) => { // abc 123
    return /^[\w]$/.test(c);
}
var isPalindrome = (s) => {
    s = s.toLowerCase();
    let left = 0,
        right = s.length - 1;

    while(left < right) {
        if (!isValidChar(s[left])) {
            left ++;
            // 退出当前循环，执行下一次循环
            continue;
        }
        if (!isValidChar(s[right])) {
            right --;
            continue;
        }
        if (s[left] == s[right]) {
            left ++;
            right --;
        } else {
            // 跳出循环
            break;
        }
    }
    return right <= left;
}
