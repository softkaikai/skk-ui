declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    content: {
        type: StringConstructor;
        required: true;
    };
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        required: true;
    };
}, {
    style: import("vue").ComputedRef<{
        top: string;
        zIndex: number;
    }>;
}, {
    visible: boolean;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
    content: string;
    offsetTop: number;
    zIndex: number;
    duration: number;
} & {}>, {
    offsetTop: number;
    zIndex: number;
}>;
export default _default;
