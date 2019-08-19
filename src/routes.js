import NestedRoute from "@/components/nestedRoute.vue"

export default [
    { 
        path: '/nested-route', 
        component: NestedRoute,
        meta: {
            shouldBustCache: true
        }
    }
]