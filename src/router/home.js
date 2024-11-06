const home = [
    {
        // casc component  thif taoj file trong client
        // casc trang wweb thi se tao file trong pages
        path: "",
        name: "home",
        component: ()=>import("../views/home.vue"),
        // meta: { css:[ '../resources/css/main.css','../resources/css/util.css', '../resources/css/vendor.css', '../resources/css/normalize.css', '../resources/css/style.css'] },
        children: [
            {
                path: "",
                name: "client-home",
                component: ()=>import("../components/pages/TheHomePage.vue")
            },
            {
                path:"/login",
                name: "login",
                component: ()=>import("../components/TheLogin.vue")
            },
            {
                path:"/register",
                name:"register",
                component: ()=>import("../components/TheRegister.vue")
            },
            {
                path: "/product-detail/:product_id",
                name: "product-detail",
                component:()=>import("../components/pages/Theproduct.vue")
            },
            {
                path: "/cart",
                name: "cart",
                component:()=>import("../components/pages/TheCart.vue")
            }
        ]
        
    
    }
]
export default home
