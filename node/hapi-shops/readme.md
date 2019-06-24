yarn add hapi@16 mysql2 sequelize env2
 yarn add sequelize-cli --dev
 ./node_modules/.bin/sequelize init

 node MVC 

 config 模块化输出配置
 ./node_modules/.bin/sequelize migration:create --name create-shop-table
 ./node_modules/.bin/sequelize seed:create --name init-shops-goods
./node_modules/.bin/sequelize db:migrate
  ./node_modules/.bin/sequelize db:seed:all

  nodemon app.js


npm init -y
yarn add hapi@16 mysql2 sequelize env2
npm i sequelize-cli --Dev
<!-- seque初始化 -->  config.json->config.js
./node_modules/.bin/sequelize db:create
 ./node_modules/.bin/sequelize migration:create --name create-shop-table
 ./node_modules/.bin/sequelize migration:create --name create-goods-table
 ./node_modules/.bin/sequelize seed:create --name init-shops
./node_modules/.bin/sequelize db:migrate
db:seed:all


.env转成json用env2