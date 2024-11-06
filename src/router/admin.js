const admins = [
    {
        path: "/admin",
        name: "admin-layout",
        component: ()=> import("../views/dashboard.vue"),
        meta: { requiresAuth: true, requiredRoles: [1] },
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
                path: "/admin/create-quantity/:product_id",
                name:"admin-create-quantity",
                component:() =>import("../components/forms/CreateProductDetail.vue")
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