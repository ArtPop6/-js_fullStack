// 得到 APP 
const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>';
//去除html标签 输出lorem ipsum strip tags
// 正则  replace  splice  记规则  <>什么都不是 []范围匹配， [^>]匹配非>的  [0-9]+一直匹配到没有数字为止  ^表非
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');


