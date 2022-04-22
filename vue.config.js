const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3030',
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      entry: 'client/main.js'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client/')
      }
    }
  }
}
