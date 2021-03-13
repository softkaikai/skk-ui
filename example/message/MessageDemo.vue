<template>
    <div>
        <button @click="success">success</button>
        <button @click="warning">warning</button>
        <button @click="info">info</button>
        <button @click="error">error</button>
    </div>
</template>

<script lang="ts">
import Message from "@src/message/index";
import { defineComponent } from "vue";

export default defineComponent({
    name: "MessageDemo",
    methods: {
        success() {
            Message.success && Message.success("success");
        },
        warning() {
            // Message.warning && Message.warning("warning");
        },
        info() {
            // Message.info && Message.info("info");
        },
        error() {
            // Message.error && Message.error("error");
        },
    },
});
</script>

<style scoped></style>
