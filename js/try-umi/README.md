yarn global add umi
react 架构设计
npm get registry
yarn global bin

参数的验证
umi 可拔插的React企业级开发框架\
umi generate page index 脚手架 路由级别组件  不用路由数组，自动添加page目录
node 要求5-9之间
nvm 
组件加样式帮在一起，index默认跟路由
umi dev

- 约定式的路由
- 开箱即用 

- umi generate page index 自建路由，显示页面级路由组件
- umi dev
- umi build (dist)
- umi pages/ 约定文件即路由
- umi 内部有react-router ,封装了umi/link umi/router

pages页面router.push('')

history match(包含匹配的参数)

不需要配置路由，router声明






























Microsoft Windows [版本 10.0.10586]
(c) 2015 Microsoft Corporation。保留所有权利。

C:\Users\Admin>nvm --version

Running version 1.1.7.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
                                 Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
                                 Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.


C:\Users\Admin>nvm intall v8.10.4

Running version 1.1.7.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
                                 Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
                                 Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.


C:\Users\Admin>nvm install v8.10.4
Version 8.10.4 is not available. If you are attempting to download a "just released" version,
it may not be recognized by the nvm service yet (updated hourly). If you feel this is in error and
you know the version exists, please visit http://github.com/coreybutler/nodedistro and submit a PR.

C:\Users\Admin>nvm install 8
Downloading node.js version 8.16.0 (64-bit)...
Complete
Creating C:\Users\Admin\AppData\Roaming\nvm\temp

Downloading npm version 6.4.1... Error while downloading https://github.com/npm/cli/archive/v6.4.1.zip - read tcp 192.168.31.65:65074->13.229.189.0:443: wsarecv: An existing connection was forcibly closed by the remote host.
Complete
Installing npm v6.4.1...2019/06/25 11:02:22 Failed to extract npm. Could not find C:\Users\Admin\AppData\Roaming\nvm\temp\nvm-npm\npm-6.4.1\bin

C:\Users\Admin>nvm list

  * 10.15.2 (Currently using 64-bit executable)
    8.16.0

C:\Users\Admin>nvm use 8.16.0
Now using node v8.16.0 (64-bit)

C:\Users\Admin>nvm list available

Could not retrieve https://nodejs.org/dist/index.json.


Get https://nodejs.org/dist/index.json: net/http: TLS handshake timeout
C:\Users\Admin>
