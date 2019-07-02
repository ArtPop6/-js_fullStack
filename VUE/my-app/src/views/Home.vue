<template>
  <div class="home">
     
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Action } from 'vuex-class';
  export default class Home extends Vue {
    private cate: string = 'in_theaters'
    private active: number = 0;
    private loading: boolean = true;
    private movieListData = null;
    // @装饰器，让类成为本地方法  函数 es7装饰器   ！强制一定从外界映射过来成为本地方法
    @Action private movieList!: (cate: string) => any;

    private constructor() {
      super();
      this.movieList(this.cate)
        .then((res: any) => {
          this.movieListData = res.subjects;
          this.loading = false;
          console.log(res.subjects);
        })
    }
  }
</script>
