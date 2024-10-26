const home = [
    {
        // casc component  thif taoj file trong client
        // casc trang wweb thi se tao file trong pages
        path: "",
        name: "home",
        component: ()=>import("../views/home.vue"),
        children: [
            {
                path: "",
                name: "client-home",
                component: ()=>import("../components/client/TheBanner.vue")
            },
            {
                path: "/product-detail",
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
