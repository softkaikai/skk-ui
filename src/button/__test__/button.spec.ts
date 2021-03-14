import { mount } from "@vue/test-utils";
import Button from "../index";

describe("Button component", () => {
    it("button created successfully", () => {
        const wrapper = mount(Button, {
            slots: {
                default: "button",
            },
        });

        expect(wrapper.find(".button").exists()).toBe(true);
    });
    it("button text", () => {
        const wrapper = mount(Button, {
            slots: {
                default: "button",
            },
        });

        expect(wrapper.find(".button").text()).toEqual("button");
    });

    it("button type", () => {
        const wrapper = mount(Button, {
            props: {
                type: "primary",
            },
            slots: {
                default: "button",
            },
        });
        expect(wrapper.find(".button__primary").exists()).toBe(true);
    });
});
