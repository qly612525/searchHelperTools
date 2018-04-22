# searchHelperTools

## bundle 方式

1. 在根目录运行 `node bundle/pack.js` 完成项目打包。注意：如果要打包依赖需要将`.gitignore`和`.npmignore`中的\node_modules去掉
2. 拷贝到目标机器后，只用解压就行，或者使用`node bundle/unpack.js`