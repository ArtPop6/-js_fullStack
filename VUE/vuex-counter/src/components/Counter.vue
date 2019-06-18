<template>
    <div>
        {{$store.state.count}}  times,
        <button @click="increment">+</button>
    </div>
</template>
<script>
export default {

    methods: {
        // 不是内部的了。不能直接加
        increment () {
            // 报告上级请求修改并且更新别的兄弟的数据
           
        }
    }
}
</script>
<style>

</style>
