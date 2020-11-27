const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Vue3-ts-demo',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@views': path.resolve(__dirname, 'src/views'),
      },
    },
  },
}
