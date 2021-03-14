<template>
    <div class="next-box" @click="boxClick">&gt;</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Next",
    props: {
        pageNo: {
            type: Number,
            required: true,
        },
        maxPageNo: {
            type: Number,
            required: true,
        },
    },
    emits: ["pageNoChange"],
    methods: {
        boxClick() {
            if (this.pageNo >= this.maxPageNo) return;
            this.$emit("pageNoChange", this.pageNo + 1);
        },
    },
});
</script>

<style scoped lang="less">
@import "./style.less";

.next-box {
    margin-left: 5px;
    .page-box();
}
</style>
