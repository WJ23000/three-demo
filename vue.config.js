module.exports = {
  publicPath: './', // 解决打包后找不到资源路径
  lintOnSave: false, // 关闭eslint语法检查
  devServer: {
    proxy: { // 解决跨域问题
        '/api': {           
            target: 'https://github.com/', // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/       
            changeOrigin: true, // 允许跨域
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
}