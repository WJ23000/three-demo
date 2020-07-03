module.exports = {
  publicPath: './', // 解决打包后找不到资源路径
  lintOnSave: false, // 关闭eslint语法检查
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: { // 解决跨域问题
        '/api': {           
            target: 'http://www.webgl3d.cn', // 要访问的跨域的api的域名
            changeOrigin: true, // 允许跨域
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
}