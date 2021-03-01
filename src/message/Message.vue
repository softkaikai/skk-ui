<template>
    <transition name="skk-message__fade">
        <div v-show="visible" class="skk-message__box" :style="style">{{content}}</div>
    </transition>
</template>

<script>
    import { defineComponent, computed } from 'vue';
    export default defineComponent({
        name: 'Message',
        props: {
            content: {
                type: String,
                required: true
            },
            offsetTop: {
                type: Number,
                required: true
            },
            zIndex: {
                type: Number,
                default: 1000
            },
            duration: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                visible: false
            }
        },
        setup(props, context) {
            const style = computed(() => {
                return {
                    top: props.offsetTop + 'px',
                    zIndex: props.zIndex,
                }
            })

            return {
                style
            }
        },
        mounted() {
            this.visible = true;
            setTimeout(() => {
                this.visible = false;
            }, this.$props.duration - 500)
        },
        methods: {

        }
    })
</script>

<style scoped>
    .skk-message__box {
        position: fixed;
        left: 20px;
        top: 100px;

        width: 200px;
        height: 50px;
        border: 1px solid #e0e0e0;
        line-height: 48px;

        transition: all .5s;
    }
    .skk-message__fade {

    }
    .skk-message__fade-enter-active {
        transition: all .5s;
    }
    .skk-message__fade-leave-active {
        transition: all .5s;
    }
    .skk-message__fade-enter-from {
        opacity: 0;
    }
    .skk-message__fade-leave-to {
        opacity: 0;
        transform: translate(0, -50%);
    }
</style>
