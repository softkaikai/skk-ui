import { mount } from "@vue/test-utils";
import Message from "../Message.vue";

describe("Message component", () => {
    it("Message type", () => {
        const wrapper = mount(Message, {
            props: {
                type: "success",
                content: "message",
                offsetTop: 100,
                duration: 2500,
            },
        });

        expect(wrapper.find(".skk-message__success").exists()).toBe(true);
    });

    it("Message content", () => {
        const wrapper = mount(Message, {
            props: {
                type: "success",
                content: "message",
                offsetTop: 100,
                duration: 2500,
            },
        });

        const messageWrapper = wrapper.get(".skk-message__success");
        expect(messageWrapper.text()).toBe("message");
    });

    it("Message zIndex", () => {
        const zIndex = 1200;
        const wrapper = mount(Message, {
            props: {
                type: "success",
                content: "message",
                offsetTop: 100,
                duration: 2500,
                zIndex,
            },
        });

        expect(
            wrapper.vm.$el.querySelector(".skk-message__success").style.zIndex
        ).toBe(zIndex + "");
    });

    it("Message offsetTop", () => {
        const top = 100;
        const wrapper = mount(Message, {
            props: {
                type: "success",
                content: "message",
                offsetTop: top,
                duration: 2500,
            },
        });

        expect(
            wrapper.vm.$el.querySelector(".skk-message__success").style.top
        ).toBe(top + "px");
    });

    it("Message duration", async () => {
        const wrapper = mount(Message, {
            props: {
                type: "success",
                content: "message",
                offsetTop: 100,
                duration: 1000,
            },
        });
        const messageWrapper = wrapper.get(".skk-message__success");

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("");
            }, 200);
        });
        expect(messageWrapper.isVisible()).toBe(true);
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("");
            }, 1100);
        });
        expect(messageWrapper.isVisible()).toBe(false);
    });
});
