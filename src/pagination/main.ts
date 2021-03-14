import { defineComponent, h, computed } from "vue";
import Pre from "./Pre.vue";
import Next from "./Next.vue";
import Pages from "./Pages.vue";

export default defineComponent({
    name: "Pagination",
    props: {
        total: {
            type: Number,
            required: true,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        pageNo: {
            type: Number,
            required: true,
        },
    },
    emits: ["pageNoChange"],
    setup(props, { emit }) {
        const maxPageNo = computed(() => {
            return Math.ceil(props.total / props.pageSize) - 1;
        });
        function pageNoChange(newPageNo) {
            if (props.pageNo !== newPageNo) {
                emit("pageNoChange", newPageNo);
            }
        }

        return {
            pageNoChange,
            maxPageNo,
        };
    },
    data() {
        return {};
    },
    render() {
        return h("div", { style: { padding: "10px 0 10px 20px" } }, [
            h(Pre, { pageNo: this.pageNo, onPageNoChange: this.pageNoChange }),
            h(Pages, {
                pageNo: this.pageNo,
                onPageNoChange: this.pageNoChange,
                maxPageNo: this.maxPageNo,
            }),
            h(Next, {
                pageNo: this.pageNo,
                onPageNoChange: this.pageNoChange,
                maxPageNo: this.maxPageNo,
            }),
        ]);
    },
});
