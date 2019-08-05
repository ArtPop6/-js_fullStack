function Marry(man, woman) {
    woman.husban = man;
    man.wife = woman;
    return {
        father: man,
        month: woman
    }
}
let family = marry({
    name: 'john'
}, {
    name: 'Ann'
})
//         Global
//            | 
//     Object(Family)
//     |             |
// Object(Father)<->Object(month)
// 把可达性干掉就回收