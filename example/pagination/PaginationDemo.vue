<template>
    <div>
        this is pagination
        <div>
            <Pagination
                :page-no="pageNo"
                :page-size="pageSize"
                :total="total"
                @pageNoChange="pageChange"
            ></Pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@src/pagination/index";

export default defineComponent({
    name: "PaginationDemo",
    components: { Pagination },
    data() {
        return {
            pageNo: 0,
            pageSize: 10,
            total: 100,
        };
    },
    mounted() {

    },
    methods: {
        pageChange(newPage) {
            this.pageNo = newPage;
            console.log('37 newPage', newPage);
        },
    },
});
</script>

<style scoped></style>
