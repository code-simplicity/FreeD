import path from 'node:path'

const packagesDir = path.resolve(__dirname, "packages")

// 路径导入
const resolve = file => path.resolve(packagesDir, file)

// 生产环境的配置
const packagesConfigs = process.env.PROD_ONLY

/**
 * 输出配置，
 * 用于配置打包多个类型的包
 * @type {{}}
 */
const outputConfigs = {
    "esm-browser": {
        file: resolve(`dist/${name}.esm-bundler.js`),
        format: "es"
    }
}

export default {
    input: "",
    output: {
        file:" dist/*"
    }
}