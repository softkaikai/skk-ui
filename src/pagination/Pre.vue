<template>
    <div class="pre-box" @click="boxClick">&lt;</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Pre",
    props: {
        pageNo: {
            type: Number,
            required: true,
        },
    },
    emits: ["pageNoChange"],
    methods: {
        boxClick() {
            if (this.pageNo <= 0) return;
            this.$emit("pageNoChange", this.pageNo - 1);
        },
    },
});
</script>

<style scoped lang="less">
@import "./style.less";

.pre-box {
    margin-right: 5px;
    .page-box();
}
</style>
