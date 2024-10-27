const admins = [
    {
        path: "/admin",
        name: "admin-layout",
        component: ()=> import("../views/dashboard.vue"),
        // meta: { css:[ '../resources/css/demo.css','../resources/css/plugins.css', '../resources/css/kaiadmin.css'] },
        children: [
            {
                path: "/admin",
                name:"admin-home",
                component: () => import("../components/admin/HomeAdmin.vue")
            },
            {
                path: "/admin/list-products",
                name: "admin-list-product",
                component: () => import("../components/admin/ListProductsAdmin.vue")
            },
            {
                path: "/admin/list-categories",
                name: "admin-list-categories",
                component: () => import("../components/admin/ListCategoriesAdmin.vue")
            },
            {
                path: "/admin/create-product",
                name: "admin-create-product",
                component: () =>import("../components/forms/CreateProduct.vue")
            },
            {
                path: "admin/update-product",
                name:"admin-update-product",
                component: () =>import("../components/forms/UpdateProduct.vue")
            }
        ]
    }
]
export default admins