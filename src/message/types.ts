import { VNode } from "vue";

export type MessageType = "success" | "warning" | "info" | "error";

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

export type Message = {
    [propName in MessageType]?: (message: string) => void;
};
