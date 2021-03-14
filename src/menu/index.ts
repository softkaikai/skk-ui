import Menu from "./Menu.vue";
import { App } from "vue";
import { SFCWithInstall } from "@src/types";

const _Menu: SFCWithInstall<typeof Menu> = Object.assign(Menu, {
    install(app: App) {
        app.component(Menu.name, Menu);
    },
});

export default _Menu;
