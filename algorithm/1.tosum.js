/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// https://leetcode.cn/problems/two-sum/description/
// 1.双重循环
// 2.哈希表/对象过滤。 时间复杂度on
function towSum(nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i]
		}
		map.set(nums[i], i)
	}
	return []
}