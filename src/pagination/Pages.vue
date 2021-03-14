<template>
    <div
        v-for="page of pages"
        :key="page.pageNo"
        class="number-box"
        :class="{ 'number-active': page.pageNo === pageNo }"
        @click="boxClick(page.pageNo)"
    >
        {{ page.pageName }}
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "Pages",
    props: {
        pageNo: {
            type: Number,
            required: true,
        },
        maxPageNo: {
            type: Number,
            required: true,
        },
    },
    emits: ["pageNoChange"],
    setup(props) {
        const pages = computed(() => {
            if (props.maxPageNo <= 6) {
                const pageArray: number[] = [];
                for (let i = 0; i <= props.maxPageNo; i++) {
                    pageArray.push(i + 1);
                }
                return pageArray.map((data) => {
                    return {
                        pageName: data + "",
                        pageNo: data - 1,
                    };
                });
            } else {
                if (props.pageNo <= 2) {
                    return [
                        { pageName: "1", pageNo: 0 },
                        { pageName: "2", pageNo: 1 },
                        { pageName: "3", pageNo: 2 },
                        { pageName: "...", pageNo: -1 },
                        {
                            pageName: props.maxPageNo + 1 + "",
                            pageNo: props.maxPageNo,
                        },
                    ];
                } else if (props.pageNo >= props.maxPageNo - 2) {
                    return [
                        { pageName: "1", pageNo: 0 },
                        { pageName: "...", pageNo: -1 },
                        {
                            pageName: props.maxPageNo - 1 + "",
                            pageNo: props.maxPageNo - 2,
                        },
                        {
                            pageName: props.maxPageNo + "",
                            pageNo: props.maxPageNo - 1,
                        },
                        {
                            pageName: props.maxPageNo + 1 + "",
                            pageNo: props.maxPageNo,
                        },
                    ];
                } else {
                    const middlePageNo = props.pageNo;

                    return [
                        { pageName: "1", pageNo: 0 },
                        { pageName: "...", pageNo: -1 },
                        {
                            pageName: middlePageNo + "",
                            pageNo: middlePageNo - 1,
                        },
                        {
                            pageName: middlePageNo + 1 + "",
                            pageNo: middlePageNo,
                        },
                        {
                            pageName: middlePageNo + 2 + "",
                            pageNo: middlePageNo + 1,
                        },
                        { pageName: "...", pageNo: -2 },
                        {
                            pageName: props.maxPageNo + 1 + "",
                            pageNo: props.maxPageNo,
                        },
                    ];
                }
            }
        });

        return {
            pages,
        };
    },
    methods: {
        boxClick(pageNo) {
            if (pageNo < 0) return;
            if (this.pageNo === pageNo) return;
            this.$emit("pageNoChange", pageNo);
        },
    },
});
</script>

<style scoped lang="less">
@import "./style.less";

.number-box {
    margin: 0 5px;
    .page-box();
}
.number-active {
    color: #fff;
    background: #07d;
    &:hover {
        color: #fff;
    }
}
</style>
