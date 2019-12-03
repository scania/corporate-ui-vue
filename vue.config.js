module.exports = {
  publicPath: 'corporate-ui-vue',
  // this is used to make npm link works
  chainWebpack: config => config.resolve.symlinks(false) 
}
