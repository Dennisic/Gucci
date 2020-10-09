const Pay = () => import('../pages/Pay')
const Cart = () => import('../pages/Cart')
const Order = () => import('../pages/Order')

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
  }
]