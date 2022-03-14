module.exports = {
  outputDir: 'docs',
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://xkcd.com',
        changeOrigin: true,
        pathRewrite: { 
          '^/api' : '/' 
        }
      },
    },
  }
}
