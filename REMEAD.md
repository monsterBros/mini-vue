初始环境配置
步骤
1. 先安装typescript
2. npx tsc --init 初始化
3. 安装 jest @type/jest


支持esm 模块  官方文档 jestjs.io
1. 安装 npm install --save-dev babel-jest @babel/core @babel/preset-env
2. npm install --save-dev @babel/preset-typescript


rollup环境配置
<!-- 1. npm install --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-terser -->
1. npm install --save-dev rollup
2. 设置配置文件   
3. 安装插件 npm install @rollup/plugin-typescript --save-dev  tslib  tsconfig module 改成esnext
