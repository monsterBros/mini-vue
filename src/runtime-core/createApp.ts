import { createVNode } from "./vnode"

export function createApp(rootComponent){


    return{
        mount(container){
            // component转换成vnode
            // vode再做render处理
            const vnode = createVNode(rootComponent)

            render(vnode,container)
        }
    }
}

function render(vnode, container){
    patch(vnode, container)
}


function patch(vnode, container){
    if(typeof vnode.type == 'object'){
        processComponent(vnode, container)
    }else{
        processElement(vnode,container)
    }
}

function processComponent(vnode, container){
    mountComponent(vnode, container)
}

function processElement(vnode, container){
    // init update
     mountElement(vnode, container)
}

function mountElement(vnode, container){
    const el = document.createElement(vnode.type)
    // string element  类型
    const {children} = vnode

    if(typeof children == 'string'){
        el.textContent = children
    }else if(Array.isArray(children)){
        children.forEach(v=>{
            patch(v,el)
        })
    }
    // props
    const {props}  = vnode
    for(const key in props){
        const val = props[key]
        el.setAttribute(key,val )
    }
    container.append(el)
}

function mountComponent(vnode, container){
    const instance = createComponentInstance(vnode)
    setupComponent(instance)
    setupRenderEffect(instance, container)
}

function setupRenderEffect(instance, container){
    const subTree = instance.render()
    patch(subTree, container)
}

function createComponentInstance(vnode){
    const component = {
        vnode,
        type: vnode.type
    }
    return component
}

function setupComponent(instance){
    // init props
    // init slot
    
    setupStatefulComponent(instance)
}

function setupStatefulComponent(instance){
    // init state
    const component = instance.vnode.type
    const {setup} = component
    if(setup){
        const setupResult = setup()
        handleSetupResulu(instance,setupResult)
    }


    


}

function handleSetupResulu(instance,setupResult){
    if(typeof  setupResult == 'object'){
        instance.setupState = setupResult
    }
    finishComponentSetup(instance)
}

function finishComponentSetup(instance){
    const component = instance.vnode.type
    // if(component.render){
        instance.render = component.render
    // }
}