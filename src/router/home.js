const home = [
    {
        path: "",
        name: "home",
        component: ()=>import("../views/home.vue"),
        children: [
            {
                path: "",
                name: "client-home",
                component: ()=>import("../components/client/TheBanner.vue")
            }
        ]
        
    
    }
]
export default home