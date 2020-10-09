import Home from "@/pages/Home";

export default [
    {
        path: "/home",
        component: Home,
      },

      { //重定向跳转地址
        path: "/",
        redirect: "/home",
      },
      
    
]