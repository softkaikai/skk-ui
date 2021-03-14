import { mount } from "@vue/test-utils";
import Pagination from "../index";
import { nextTick } from "vue";

describe("Pagination component", () => {
    it("pagination created successfully", () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 0,
                pageSize: 10,
                total: 40,
            },
        });

        expect(wrapper.find(".pre-box").exists()).toBe(true);
        expect(wrapper.find(".number-box").exists()).toBe(true);
        expect(wrapper.find(".next-box").exists()).toBe(true);
    });

    it("pagination pre click", async () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 1,
                pageSize: 10,
                total: 40,
            },
        });

        wrapper.find(".pre-box").trigger("click");
        expect(wrapper.emitted("pageNoChange")).toHaveLength(1);
        expect(wrapper.emitted("pageNoChange")).toEqual([[0]]);

        await wrapper.setProps({ pageNo: 0 });

        wrapper.find(".pre-box").trigger("click");
        expect(wrapper.emitted("pageNoChange")).toHaveLength(1);
        expect(wrapper.emitted("pageNoChange")).toEqual([[0]]);
    });

    it("pagination next click", async () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 2,
                pageSize: 10,
                total: 40,
            },
        });

        wrapper.find(".next-box").trigger("click");
        expect(wrapper.emitted("pageNoChange")).toHaveLength(1);
        expect(wrapper.emitted("pageNoChange")).toEqual([[3]]);

        await wrapper.setProps({ pageNo: 3 });
        wrapper.find(".next-box").trigger("click");
        expect(wrapper.emitted("pageNoChange")).toHaveLength(1);
        expect(wrapper.emitted("pageNoChange")).toEqual([[3]]);
    });

    it("pagination page click", async () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 0,
                pageSize: 10,
                total: 70,
            },
        });

        wrapper.findAll(".number-box")[1].trigger("click");
        expect(wrapper.emitted("pageNoChange")).toHaveLength(1);
        expect(wrapper.emitted("pageNoChange")).toEqual([[1]]);
    });

    it("pagination page box number type1", () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 0,
                pageSize: 10,
                total: 40,
            },
        });

        expect(wrapper.findAll(".number-box")).toHaveLength(4);
    });

    it("pagination page box number type2", () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 0,
                pageSize: 10,
                total: 70,
            },
        });

        expect(wrapper.findAll(".number-box")).toHaveLength(7);
    });

    it("pagination page box number type3", () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 0,
                pageSize: 10,
                total: 90,
            },
        });

        expect(wrapper.findAll(".number-box")).toHaveLength(5);
    });

    it("pagination page box number type4", () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 8,
                pageSize: 10,
                total: 90,
            },
        });

        expect(wrapper.findAll(".number-box")).toHaveLength(5);
    });

    it("pagination page box number type6", () => {
        const wrapper = mount(Pagination, {
            props: {
                pageNo: 4,
                pageSize: 10,
                total: 90,
            },
        });

        expect(wrapper.findAll(".number-box")).toHaveLength(7);
    });
});
