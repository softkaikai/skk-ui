import { SFCWithInstall } from "@src/types";
import Pagination from "./main";
import { App } from "vue";

const _Pagination: SFCWithInstall<typeof Pagination> = Object.assign(
    Pagination,
    {
        install(app: App) {
            app.component(Pagination.name, Pagination);
        },
    }
);

export default _Pagination;
