function createVNode(type, props, children) {
    return {
        type: type,
        props,
        children
    };
}

function createApp(rootComponent) {
    return {
        mount(container) {
            // component转换成vnode
            // vode再做render处理
            const vnode = createVNode(rootComponent);
            render(vnode);
        }
    };
}
function render(vnode, container) {
    patch(vnode);
}
function patch(vnode, container) {
    if (typeof vnode.type == 'object') {
        processComponent(vnode);
    }
}
function processComponent(vnode, container) {
    mountComponent(vnode);
}
function mountComponent(vnode, container) {
    const instance = createComponentInstance(vnode);
    setupComponent(instance);
    setupRenderEffect(instance);
}
function setupRenderEffect(instance, container) {
    const subTree = instance.render();
    patch(subTree);
}
function createComponentInstance(vnode) {
    const component = {
        vnode
    };
    return component;
}
function setupComponent(instance) {
    // init props
    // init slot
    setupStatefulComponent(instance);
}
function setupStatefulComponent(instance) {
    // init state
    const component = instance.vnode.type;
    const { setup } = component;
    if (setup) {
        const setupResult = setup();
        handleSetupResulu(instance, setupResult);
    }
}
function handleSetupResulu(instance, setupResult) {
    if (typeof setupResult == 'object') {
        instance.setupState = setupResult;
    }
    finishComponentSetup(instance);
}
function finishComponentSetup(instance) {
    const component = instance.vnode.type;
    // if(component.render){
    instance.render = component.render;
    // }
}

const h = (type, props = null, children = []) => {
    return createVNode(type, props, children);
};

export { createApp, h };
