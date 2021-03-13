export interface Menu {
    name: string;
    value: string;
    expand?: false;
    subMenus?: Array<Menu>;
}

export type Menus = Array<Menu>;
