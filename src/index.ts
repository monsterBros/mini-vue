import { h } from "./h"
import { createApp } from "./runtime-core/render"
const App = {
	setup(){
		return{
			msg: 'hello'
		}
	},
	render(){
		h('div', '', 'nihao' + this.msg)
	},
}

createApp(App).mount('app')