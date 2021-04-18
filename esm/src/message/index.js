import { defineComponent, computed, openBlock, createBlock, Transition, withDirectives, createVNode, toDisplayString, vShow, withScopeId, h, render as render$1, nextTick } from 'vue';

var script = defineComponent({
    name: "Message",
    props: {
        type: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        offsetTop: {
            type: Number,
            default: 100,
        },
        zIndex: {
            type: Number,
            default: 1000,
        },
        duration: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const style = computed(() => {
            return {
                top: props.offsetTop + "px",
                zIndex: props.zIndex,
            };
        });
        return {
            style,
        };
    },
    data() {
        return {
            visible: false,
        };
    },
    mounted() {
        this.visible = true;
        setTimeout(() => {
            this.visible = false;
        }, this.$props.duration - 500);
    },
    methods: {},
});

const _withId = /*#__PURE__*/withScopeId("data-v-063bb4d3");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock(Transition, { name: "skk-message__fade" }, {
    default: _withId(() => [
      withDirectives(createVNode("div", {
        style: _ctx.style,
        class: ["skk-message__box", [!_ctx.type ? '' : `skk-message__${_ctx.type}`]]
      }, toDisplayString(_ctx.content), 7), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 1
  }))
});

script.render = render;
script.__scopeId = "data-v-063bb4d3";

const instances = [];
const messageTypes = ["success", "warning", "info", "error"];
function getOffsetTop(index) {
    return 100 + index * 60;
}
function createMessage(options) {
    options.offsetTop = getOffsetTop(instances.length);
    options.zIndex = createMessage.zIndex++;
    const container = document.createElement("div");
    const vNode = h(script, options);
    render$1(vNode, container);
    const instance = {
        element: container,
        vNode,
    };
    instances.push(instance);
    document.body.appendChild(container);
    setTimeout(() => {
        close(instance);
    }, options.duration);
}
createMessage.zIndex = 1000;
function close(instance) {
    const instanceIndex = instances.findIndex((i) => i.element === instance.element);
    instances.splice(instanceIndex, 1);
    instances.forEach((i, index) => {
        instances[index].vNode
            .component.props.offsetTop = getOffsetTop(index);
    });
    render$1(null, instance.element);
    nextTick(() => {
        document.body.removeChild(instance.element);
    });
}
const MessageMap = {};
messageTypes.forEach((type) => {
    MessageMap[type] = function (message) {
        const options = {
            content: message,
            duration: 2500,
            type,
        };
        createMessage(options);
    };
});

const _Message = Object.assign(MessageMap, {
    install(app) {
        app.config.globalProperties.$message = MessageMap;
    },
});

export default _Message;
