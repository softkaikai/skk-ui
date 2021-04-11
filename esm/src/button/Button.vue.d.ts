import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"default" | "primary" | "danger">;
        default: string;
        validator: (val: string) => boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "default" | "primary" | "danger";
} & {}>, {
    type: "default" | "primary" | "danger";
}>;
export default _default;
