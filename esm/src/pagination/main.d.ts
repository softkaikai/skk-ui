declare const _default: import("vue").DefineComponent<{
    total: {
        type: NumberConstructor;
        required: true;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageNo: {
        type: NumberConstructor;
        required: true;
    };
}, {
    pageNoChange: (newPageNo: any) => void;
    maxPageNo: import("vue").ComputedRef<number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "pageNoChange"[], "pageNoChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    total: number;
    pageSize: number;
    pageNo: number;
} & {}>, {
    pageSize: number;
}>;
export default _default;
