import MessageComponent from './Message.vue';
import { h, render, nextTick } from 'vue';
import { MessageOptions, MessageInstance, Message, MessageType } from './types';

const instances: Array<MessageInstance> = [];
const messageTypes: MessageType[] = ['success', 'warning', 'info', 'error'];

function getOffsetTop(index: number): number {
    return 100 + index * 60;
}

function createMessage(options: MessageOptions) {
    options.offsetTop = getOffsetTop(instances.length);
    options.zIndex = createMessage.zIndex++;

    const container = document.createElement('div');
    const vNode = h(MessageComponent, options);
    render(vNode, container);
    const instance: MessageInstance = {
        element: container,
        vNode
    }
    instances.push(instance);
    document.body.appendChild(container)

    setTimeout(() => {
        close(instance);
    }, options.duration);
}
createMessage.zIndex = 1000;

function close(instance: MessageInstance) {
    const instanceIndex = instances.findIndex(i => i.element === instance.element);
    instances.splice(instanceIndex, 1);
    instances.forEach((i, index) => {
        (instances[index].vNode.component as any).props.offsetTop = getOffsetTop(index);
    })

    render(null, instance.element);
    nextTick(() => {
        document.body.removeChild(instance.element);
    })
}


const MessageMap: Message = {};

messageTypes.forEach((type: MessageType) => {
    MessageMap[type] = function(message) {
        const options: MessageOptions = {
            content: message,
            duration: 25000,
            type
        }

        createMessage(options)
    }
})

export default MessageMap;


