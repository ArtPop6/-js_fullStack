<template>
  <div id="app">
    <h1>Shopping Cart</h1>
    <hr>
    <h1>Products</h1>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart';
export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
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
