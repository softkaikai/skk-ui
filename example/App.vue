<template>
    <div>
        <message-demo></message-demo>
        <menu-demo></menu-demo>
        <button-demo></button-demo>
        <pagination-demo></pagination-demo>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageDemo from "./message/MessageDemo.vue";
import MenuDemo from "./menu/MenuDemo.vue";
import ButtonDemo from "./button/ButtonDemo.vue";
import PaginationDemo from "./pagination/PaginationDemo.vue";

export default defineComponent({
    name: "App",
    components: {
        MessageDemo,
        MenuDemo,
        ButtonDemo,
        PaginationDemo,
    },
});
</script>

<style scoped></style>
