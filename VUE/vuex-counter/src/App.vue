<template>
  <div>
    <!-- <counter :count="count" v-on:increment="incrementCount" /> -->
    <counter />
    <Counter-Brother />
  </div>
</template>

<script>
// 两个组件都要用到counter状态，怎么办?找共同的父亲，状态只可能在一处。只有父组件才能修改，其他不能修改。
import Counter from './components/counter'
import CounterBrother from './components/CounterBrother'

export default {
  name: 'App',
  methods: {

  },
  components: {
    // 引入需声明 两个兄弟间共享状态
    'counter': Counter,
    'Counter-Brother': CounterBrother
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
