<template>
    <div>
        <div>this is menu component</div>
        <div>
            <Menu
                width="200px"
                height="200px"
                :menus="menus"
                @menuActive="menuChange"
            ></Menu>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@src/menu/index";
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
            ],
        };
    },
    methods: {
        menuChange(menu) {
            console.log("this is menu change", menu);
        },
    },
});
</script>

<style scoped></style>
