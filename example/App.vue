<template>
    <div>
        123
        <message-demo></message-demo>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import MessageDemo from './message/MessageDemo.vue';

    export default defineComponent({
        name: 'App',
        components: {
            MessageDemo
        }
    })
</script>

<style scoped>

</style>


