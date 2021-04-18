import { defineComponent, openBlock, createBlock, renderSlot, withScopeId } from 'vue';

var script = defineComponent({
    name: "Button",
    props: {
        type: {
            type: String,
            default: "default",
            validator: (val) => {
                return ["default", "primary", "danger"].includes(val);
            },
        },
    },
});

const _withId = /*#__PURE__*/withScopeId("data-v-3b92883e");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("button", {
    class: ["button", {
            button__primary: _ctx.type === 'primary',
            button__danger: _ctx.type === 'danger',
        }]
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2))
});

script.render = render;
script.__scopeId = "data-v-3b92883e";

const _Button = Object.assign(script, {
    install(app) {
        app.component(script.name, script);
    },
});

export default _Button;
