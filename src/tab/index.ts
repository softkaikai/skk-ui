import Tab from "./Tab.vue";
import { App } from "vue";
import { SFCWithInstall } from "@src/types";

const _Tab: SFCWithInstall<typeof Tab> = Object.assign(Tab, {
    install(app: App) {
        app.component(Tab.name, Tab);
    },
});

export default _Tab;
