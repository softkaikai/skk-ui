<template>
    <div>
        this is button component
        <div>
            <Button @click="buttonClick">按钮</Button>
            <Button type="primary" @click="buttonClick">按钮</Button>
            <Button type="danger" @click="buttonClick">按钮</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@src/button/index";
// import Button from "../../esm/src/button/button";
// import "../../esm/src/button/button.css";
export default defineComponent({
    name: "ButtonDemo",
    components: { Button },
    methods: {
        buttonClick() {
            console.log("this is button click");
        },
    },
});
</script>

<style scoped></style>
