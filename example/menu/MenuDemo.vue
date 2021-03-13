<template>
    <div>
        <div>this is menu component</div>
        <div>
            <Menu width="300px" :menus="menus"></Menu>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@src/menu/Menu.vue";
export default defineComponent({
    name: "MenuDemo",
    components: { Menu },
    data() {
        return {
            menus: [
                {
                    name: "菜单1",
                    value: "1",
                    expand: false,
                    subMenus: [{ name: "菜单1-1", value: "1-1" }],
                },
                { name: "菜单2", value: "2" },
            ]
        }
    }
});
</script>

<style scoped></style>
