<template>
    <transition name="skk-message__fade">
        <div
            v-show="visible"
            :style="style"
            class="skk-message__box"
            :class="[!type ? '' : `skk-message__${type}`]"
        >
            {{ content }}
        </div>
    </transition>
</template>

<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
    name: "Message",
    props: {
        type: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        offsetTop: {
            type: Number,
            required: true,
        },
        zIndex: {
            type: Number,
            default: 1000,
        },
        duration: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const style = computed(() => {
            return {
                top: props.offsetTop + "px",
                zIndex: props.zIndex,
            };
        });

        return {
            style,
        };
    },
    data() {
        return {
            visible: false,
        };
    },
    mounted() {
        this.visible = true;
        setTimeout(() => {
            this.visible = false;
        }, this.$props.duration - 500);
    },
    methods: {},
});
</script>

<style scoped lang="less">
@import "../style/color.less";
.skk-message__box {
    position: fixed;
    left: 20px;
    top: 100px;

    width: 250px;
    height: 40px;
    border: 1px solid #e0e0e0;
    line-height: 38px;
    text-align: center;
    padding: 0 20px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 4px;

    transition: all 0.5s;
}
.skk-message__success {
    color: @color-success;
    background: @bg-color-success;
    border: 1px solid @bd-color-success;
}
.skk-message__warning {
    color: @color-warning;
    background: @bg-color-warning;
    border: 1px solid @bd-color-warning;
}
.skk-message__info {
    color: @color-info;
    background: @bg-color-info;
    border: 1px solid @bd-color-info;
}
.skk-message__error {
    color: @color-error;
    background: @bg-color-error;
    border: 1px solid @bd-color-error;
}
.skk-message__fade {
}
.skk-message__fade-enter-active {
    transition: all 0.5s;
}
.skk-message__fade-leave-active {
    transition: all 0.5s;
}
.skk-message__fade-enter-from {
    opacity: 0;
}
.skk-message__fade-leave-to {
    opacity: 0;
    transform: translate(0, -50%);
}
</style>
