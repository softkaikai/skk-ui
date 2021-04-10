<template>
    <tab :tabs="tabs" @tabClick="change"></tab>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "@src/tab/index";
import { TabInterFace } from "@src/tab/types";
export default defineComponent({
    name: "TabDemo",
    components: { Tab },
    data() {
        return {
            tabs: [
                { name: "tab1", active: true },
                { name: "tab2", active: false },
            ] as TabInterFace[],
        };
    },
    methods: {
        change(tab: TabInterFace) {
            this.tabs.forEach((i) => {
                i.active = tab.name === i.name;
            });
        },
    },
});
</script>

<style scoped></style>
