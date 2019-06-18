[twitter]()
写一个函数 将完成以下功能  参数为一句话，英文的 将
- 如果字符超过140字，返回false
- 如果是空字符,返回false
- 以#开始
- 每个单词首字母大写

hello miss dong
#Hello Miss Dong


- map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

hello world miss'.split(' ')
(3) ["hello", "world", "miss"]
'hello world miss'.split(' ').map(word => CSSKeywordValue)
(3) [ƒ, ƒ, ƒ]
'hello world miss'.split(' ').map(word => word)
(3) ["hello", "world", "miss"]
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase())
(3) ["H", "W", "M"]
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
(3) ["Hello", "World", "Miss"]
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).join(' '))