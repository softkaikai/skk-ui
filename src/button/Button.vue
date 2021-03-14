<template>
    <button
        class="button"
        :class="{
            button__primary: type === 'primary',
            button__danger: type === 'danger',
        }"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
    name: "Button",
    props: {
        type: {
            type: String as PropType<"default" | "primary" | "danger">,
            default: "default",
            validator: (val: string) => {
                return ["default", "primary", "danger"].includes(val);
            },
        },
    },
});
</script>

<style scoped lang="less">
.button {
    width: 80px;
    height: 30px;
    border: 1px solid #e0e0e0;
    color: #333;
    border-radius: 4px;

    text-align: center;
    line-height: 28px;
    outline: none;

    cursor: pointer;
    background: #fff;

    &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }

    &__primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;

        &:hover {
            color: #fff;
            background: #66b1ff;
            border-color: #66b1ff;
        }
    }

    &__danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;

        &:hover {
            color: #fff;
            background: #f78989;
            border-color: #f78989;
        }
    }
}
</style>
