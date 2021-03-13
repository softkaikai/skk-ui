<template>
    <div>
        <message-demo></message-demo>
        <menu-demo></menu-demo>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageDemo from "./message/MessageDemo.vue";
import MenuDemo from "./menu/MenuDemo.vue";

export default defineComponent({
    name: "App",
    components: {
        MessageDemo,
        MenuDemo,
    },
});
</script>

<style scoped></style>
