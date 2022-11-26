const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    return {
      devServer: {
        proxy: {
          '/wp-json': {
            target: 'https://tdsfashiongroup.com',
            secure: false,
            changeOrigin: true
          }
        }
      }
    }
  }
})
