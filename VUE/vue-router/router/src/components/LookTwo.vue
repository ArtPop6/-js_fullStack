<template>
    <div class="lookTwo">{{message}}
        <p>接受的参数: {{$route.params.userId}}</p>
    </div>
</template>

<script>
export default {
    name: 'Look',
    data () {
        return {
            message: '看你好帅!'
        }
    }
}
</script>