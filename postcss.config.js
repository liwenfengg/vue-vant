module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // 一般根据设计稿的 1/10来取值， 因为使用的是vant框架，推荐使用37.5，许多公司设计稿是750的，可以设置为75
      rootValue: 37.5,
      // 需要被转换的属性
      propList: ['*'],
      // 不进行px转换的选择器
      selectorBlackList: []
    }
  }
}
