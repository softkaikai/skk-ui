<template>
    <div>
        <message-demo></message-demo>
        <menu-demo></menu-demo>
        <button-demo></button-demo>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageDemo from "./message/MessageDemo.vue";
import MenuDemo from "./menu/MenuDemo.vue";
import ButtonDemo from "./button/ButtonDemo.vue";

export default defineComponent({
    name: "App",
    components: {
        MessageDemo,
        MenuDemo,
        ButtonDemo,
    },
});
</script>

<style scoped></style>
