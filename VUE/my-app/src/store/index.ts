import Vue from 'vue';
import Vuex from 'vuex';
import home from './home/index';

Vue.use(Vuex);

export default new Vuex.Store({
    // this.$store.home拿到状态
    modules: {
        home
    }
})