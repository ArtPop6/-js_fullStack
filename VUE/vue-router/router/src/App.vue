<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航:
      <!-- 相当于a标签 -->
      <router-link to="/">首页</router-link> |
      <router-link to="/look/12345">看看</router-link> |
      <!-- <router-link to="/look/look-one">look1</router-link> | -->
      <div class="test" @click="go">look1</div>
      <!-- <router-link to="/look/look-two">look2</router-link> -->
      <!-- 用路由名称跳转 -->
      <router-link :to="{ name: 'LookTwo', params: {userId: 123} }">look2</router-link>
      <router-link to="/detail">重定向</router-link>
      <!-- 编程式跳转 -->

    </p>
    <!-- 路由展示 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go () {
      this.$router.push({ name: 'LookOne', params: { name: 'old wang' } }) //编程式路由跳转
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
