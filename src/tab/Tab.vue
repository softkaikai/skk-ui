<template>
    <div class="tab">
        <div
            v-for="tab of tabs"
            :key="tab.name"
            class="tab-item"
            :class="{ 'tab-item-active': tab.active }"
            @click="tabClick(tab)"
        >
            {{ tab.name }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TabInterFace } from "./types";
export default defineComponent({
    name: "Tab",
    props: {
        tabs: {
            type: Array as PropType<TabInterFace[]>,
            required: true,
            default: () => {
                return [];
            },
        },
    },
    emits: ["tabClick"],
    methods: {
        tabClick(tab: TabInterFace) {
            this.$emit("tabClick", tab);
        },
    },
});
</script>

<style scoped>
.tab {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #e0e0e0;
}
.tab-item {
    float: left;
    height: 100%;
    line-height: 40px;
    padding: 0 10px;
    text-align: center;
    min-width: 60px;
    cursor: pointer;
}
.tab-item-active {
    color: #07d;
    border-bottom: 2px solid #07d;
}
</style>
