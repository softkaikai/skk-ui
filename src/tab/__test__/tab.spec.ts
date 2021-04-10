import { mount } from "@vue/test-utils";
import Tab from "../index";

describe("Tab component", () => {
    it("show data", () => {
        const wrapper = mount(Tab, {
            props: {
                tabs: [
                    { name: "tab1", active: true },
                    { name: "tab2", active: false },
                ],
            },
        });

        expect(wrapper.find(".tab").exists()).toBe(true);
        expect(wrapper.find(".tab-item").exists()).toBe(true);
        expect(wrapper.find(".tab-item-active").exists()).toBe(true);
        expect(wrapper.find(".tab-item").text()).toBe("tab1");
    });

    it("tab click", () => {
        const wrapper = mount(Tab, {
            props: {
                tabs: [
                    { name: "tab1", active: false },
                    { name: "tab2", active: true },
                ],
            },
        });

        wrapper.find(".tab-item").trigger("click");

        const event = wrapper.emitted("tabClick");
        expect(event).toHaveLength(1);
        if (event) {
            expect(event[0]).toEqual([{ name: "tab1", active: false }]);
        }
    });

    it("render active", async () => {
        const wrapper = mount(Tab, {
            props: {
                tabs: [
                    { name: "tab1", active: false },
                    { name: "tab2", active: false },
                ],
            },
        });

        expect(wrapper.find(".tab-item-active").exists()).toBe(false);
        await wrapper.setProps({
            tabs: [
                { name: "tab1", active: true },
                { name: "tab2", active: true },
            ],
        });
        expect(wrapper.findAll(".tab-item-active")).toHaveLength(2);
    });
});
