const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue-todo-list/',
  outputDir: 'docs',
  filenameHashing: false,
  assetsDir: 'assets'
})
