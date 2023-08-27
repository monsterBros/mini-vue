export function createVNode(type, props?, children?){
    return{
        type: type,
        props,
        children
    }
}