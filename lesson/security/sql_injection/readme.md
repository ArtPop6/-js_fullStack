前端安全

表单
form ->触发 onsubmit -> 服务器url
表单加密方法POST data:{email: 'zm@163.com',
                      password: '123456'
后端登陆过程  有sql 查找过程
sql 语法报错， 服务器出错

用户的输入不可信任
password' 导致 sql的提前结束或多了一个'  500错误  可用加密解密解决（编码解码）

登入账号 --' 不管后面是什么数据前面的都对

传输信息的时候编码一下 encode escape
escape("password'")
"password%27"
转码了

会变成
SELECT * from users
    WHERE email = 'user@email.com'
    AND password = 'password%27'
后台也会进行解码
unescape("password%27")
"password'"
