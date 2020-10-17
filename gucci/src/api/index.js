//这个文件是所有的接口请求函数的文件
//每一个请求接口数据功能都给它定义成一个函数，以后哪里需要去请求数据，就调用对应的这个接口请求函数就好了
 //刚才暴露出去的instance
import Ajax from '../ajax/Ajax'

//请求购物车信息
export const reqShopCartList = () => {
  return Ajax({
    url: '/getCartList',
    method: 'get'
  })
}








