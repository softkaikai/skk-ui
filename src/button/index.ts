import Button from "./Button.vue";
import { SFCWithInstall } from "@src/types";
import { App } from "vue";

const _Button: SFCWithInstall<typeof Button> = Object.assign(Button, {
    install(app: App) {
        app.component(Button.name, Button);
    },
});

export default _Button;
