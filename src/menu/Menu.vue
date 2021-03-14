<template>
    <div :style="menuStyle" class="menu">
        <div
            v-for="menu of menus"
            :key="menu.value"
            class="menu__item"
            @click.stop="clickMenu(menu)"
        >
            <div class="menu__name">{{ menu.name }}</div>
            <span
                class="menu__expand"
                :class="{ menu__expand_active: menu.expand }"
                @click="expand(menu)"
            ></span>
            <template v-if="menu.subMenus && menu.subMenus.length">
                <div
                    class="second-menu"
                    :style="{
                        height: menu.expand
                            ? menu.subMenus.length * 50 + 'px'
                            : '0px',
                    }"
                >
                    <div
                        v-for="secondMenu of menu.subMenus"
                        :key="secondMenu.value"
                        :style="{ paddingLeft: '20px' }"
                        class="menu__item"
                        @click.stop="clickMenu(secondMenu)"
                    >
                        <div class="menu__name">{{ secondMenu.name }}</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { Menus } from "./types";

export default defineComponent({
    name: "Menu",
    props: {
        menus: {
            type: Array as PropType<Menus>,
            required: true,
            default: () => {
                return [];
            },
        },
        width: {
            type: String,
            default: "200px",
        },
        height: {
            type: String,
            default: "600px",
        },
    },
    emits: ["menuActive"],
    setup(props) {
        const menuStyle = computed(() => {
            return {
                width: props.width,
                height: props.height,
            };
        });

        return {
            menuStyle,
        };
    },
    data() {
        return {
            name: "",
        };
    },
    methods: {
        clickMenu(menu) {
            this.$emit("menuActive", menu);
        },
        expand(menu) {
            menu.expand = !menu.expand;
        },
    },
});
</script>

<style scoped lang="less">
.menu {
    border: 1px solid #e0e0e0;

    &__name {
        padding-left: 20px;
        width: 100%;
        line-height: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__item {
        position: relative;
        cursor: pointer;
    }

    &__expand {
        position: absolute;
        right: 10px;
        top: 7px;

        display: inline-block;
        width: 32px;
        height: 32px;
        background: url("./images/expand.png") no-repeat center center;
        transform: rotateZ(90deg);
        transition: all linear 0.2s;

        &_active {
            transform: rotateZ(0);
        }
    }

    .second-menu {
        overflow: hidden;
        height: 0;
        transition: height linear 0.3s;
    }
}
</style>
