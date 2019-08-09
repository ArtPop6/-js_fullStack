<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{product.title}}
            <br/>
            <button @click="addProductToCart(product)">Add to Cart</button>
        </li>
    </ul>
</template>
<script>
// 从总部中央把状态接过来
import {mapState, mapActions} from 'vuex';
// import {mapAction}
export default {
    // 计算属性变成接口 
    computed: mapState({
        products: state => state.products.all
    }),
    // cart上的数据分开管理
    methods: mapActions('cart', [
        'addProductToCart'
    ]),
    // 生命周期函数是交给数据初始化最好的地方
    created() {
        this.$store.dispatch('products/getAllProducts');
    }

}
</script>