<template>
    <div class="lookOne">{{message}}
        <p>接受的参数: {{$route.params.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'LookOne',
    data () {
        return {
            message: '你瞅啥'
        }
    }
}
</script>