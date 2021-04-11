import { VNode } from "vue";
export declare type MessageType = "success" | "warning" | "info" | "error";
export interface MessageOptions {
    type: MessageType;
    content: string;
    zIndex?: number;
    offsetTop?: number;
    duration: number;
}
export interface MessageInstance {
    vNode: VNode;
    element: HTMLElement;
}
export declare type Message = {
    [propName in MessageType]?: (message: string) => void;
};
