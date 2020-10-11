import Goods from "@/components/Goods-hzd"
import Detail from "@/components/Detail-hzd"
import Header from '@/components/Header'

export default [
    {
      path: '/header',
      component: Header
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/',
        redirect: '/goods'
    }
]
