import { reactive } from '../reactivity/index.js';

describe('reactivity/reactive', () => {
	test('Object', () => {
		const origin = { foo: 1 }
		const observed = reactive(origin)

		expect(observed.foo).toBe(1)

		observed.foo = 2
		expect(observed.foo).toBe(2)
	})
})