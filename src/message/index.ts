import Message from "./message";
import { App } from "vue";

const _Message = Object.assign(Message, {
    install(app: App) {
        app.config.globalProperties.$message = Message;
    },
});

export default _Message;
