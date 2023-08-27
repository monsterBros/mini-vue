import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
export default {
	input: "./src/runtime-core/index.ts",
	output: [
		// 1.cjs  common.js
		// 2.esm
		{
			format: "cjs",
			file: pkg.main
		},
		{
			format: "esm",
			file: pkg.module
		}
	],
	plugins: [
		typescript()
	]
};
