// 依赖收集

let data = {
	a: 1
}
let observeData = reactive(data)

function effect() {
	// document.body.innerText = observeData.a
}

effect()
setTimeout(() => {
	observeData.a = 2
})


let bucket = new WeakMap()

export function reactive(raw) {
	return new Proxy(raw, {
		get(target, key) {
			// 依赖收集
			let depsMap = bucket.get(target)
			if (!depsMap) {
				bucket.set(target, depsMap = new Map())
			}
			let deps = depsMap.get(key)
			if (!deps) {
				depsMap.set(key, deps = new Set())
			}
			deps.add(effect)
			return target[key];
		},
		set(target, key, value) {
			target[key] = value;
			// 派发通知
			let effects = null
			let depsMap = bucket.get(target)
			if (depsMap) {
				effects = depsMap.get(key)
			}
			effects && effects.forEach(effect => effect())
			return true;
		}
	})

}