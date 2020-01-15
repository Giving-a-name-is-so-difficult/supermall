/**
 * Created by john on 2020/1/15.
 */
module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@views'
      }
    }
  }
}