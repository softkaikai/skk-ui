export interface Menu {
    name: string;
    value: string;
    expand?: false;
    subMenus?: Array<Menu>;
}
export declare type Menus = Array<Menu>;
