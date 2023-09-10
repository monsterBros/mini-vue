import{h} from '../lib/guide-mini-vue.esm.js'
export const App = {
    render(){
        return h(
            // 'div', 'hi' + this.msg
            "div",
            {
                id:'root',
                class: ["red", "hard"],
            },
            [h("p",{class: "red"}, "hi"),h("p",{class: 'blue'},"mini-vue")]
        )
    },
    setup(){
        return {
            msg: 'mini-vue'
        }
    }
}