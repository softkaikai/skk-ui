<template>
    <div>
        <button @click="success">success</button>
        <button @click="warning">warning</button>
        <button @click="info">info</button>
        <button @click="error">error</button>
    </div>
</template>

<script>
    import Message from '@src/message/index'

    export default {
        name: "MessageDemo",
        mounted() {

        },
        methods: {
            success() {
                Message.success('success aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            },
            warning() {
                Message.warning('warning');
            },
            info() {
                Message.info('info');
            },
            error() {
                Message.error('error');
            },
        }
    }
</script>

<style scoped>

</style>
