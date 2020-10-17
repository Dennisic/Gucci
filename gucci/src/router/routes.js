const Pay = () => import('../pages/Pay')
const Cart = () => import('../pages/Cart')
const Order = () => import('../pages/Order')
const Payment = () => import('../pages/Payment')
const Detail = () => import('../pages/Detail-hzd')
const Goods = () => import('../pages/Goods-hzd')

export default [
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/order',
    component: Order
  },
  {
    path:'/payment',
    component: Payment
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/goods',
    component: Goods
  }
]