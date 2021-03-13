import Menu from "../Menu.vue";
import { mount } from "@vue/test-utils";

describe("menu", () => {
    it("create menu succeed", () => {
        const wrapper = mount(Menu, {
            props: {
                width: "100px",
                height: "400px",
                menus: [{ name: "菜单2", value: "2" }],
            },
        });

        expect(wrapper.find(".menu").exists()).toBe(true);
    });
    it("menu width and height", () => {
        const wrapper = mount(Menu, {
            props: {
                width: "100px",
                height: "400px",
                menus: [{ name: "菜单2", value: "2" }],
            },
        });

        expect(wrapper.vm.$el.style.width).toBe("100px");
        expect(wrapper.vm.$el.style.height).toBe("400px");
    });
    it("first menu length", () => {
        const wrapper = mount(Menu, {
            props: {
                width: "100px",
                height: "400px",
                menus: [
                    { name: "菜单1", value: "1" },
                    { name: "菜单2", value: "2" },
                ],
            },
        });

        expect(wrapper.findAll(".menu__item")).toHaveLength(2);
    });
    it("second menu length", () => {
        const wrapper = mount(Menu, {
            props: {
                width: "100px",
                height: "400px",
                menus: [
                    {
                        name: "菜单1",
                        value: "1",
                        subMenus: [{ name: "菜单1-1", value: "1-1" }],
                    },
                    { name: "菜单2", value: "2" },
                ],
            },
        });

        expect(wrapper.findAll(".second-menu")).toHaveLength(1);
    });

    it("menu name", () => {
        const wrapper = mount(Menu, {
            props: {
                width: "100px",
                height: "400px",
                menus: [{ name: "菜单", value: "" }],
            },
        });

        expect(wrapper.get(".menu__name").text()).toBe("菜单");
    });

    it("menu expand", async () => {
        const wrapper = mount(Menu, {
            props: {
                width: "100px",
                height: "400px",
                menus: [
                    {
                        name: "菜单1",
                        value: "1",
                        subMenus: [
                            { name: "菜单1-1", value: "1-1" },
                            { name: "菜单1-2", value: "1-2" },
                        ],
                    },
                ],
            },
        });

        const expandWrapper = wrapper.find(".menu__expand");

        expect(wrapper.vm.$el.querySelector(".second-menu").style.height).toBe(
            "0px"
        );
        expandWrapper.trigger("click");

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 500);
        });
        expect(wrapper.vm.$el.querySelector(".second-menu").style.height).toBe(
            "100px"
        );
    });
});
