import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import App from "@/App.vue"
import VueRouter from 'vue-router'
import NestedRoute from '@/components/nestedRoute.vue'
import routes from '@/routes.js'

const localVue = createLocalVue()
localVue.use(VueRouter)

// jest.mock("@/components/NestedRoute.vue", () => ({
//     name: "NestedRoute",
//     render: h => h("div")
// }))

describe('App', () => {
    it('renders a child component via routing', () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, { localVue, router })

        router.push("/nested-route")

        expect(wrapper.find(NestedRoute).exists()).toBe(true)
    });
});

describe('NestedRoute', () => {
    it('renders a username from query string', () => {
        const username = 'ben'
        const wrapper = shallowMount(NestedRoute, {
            mocks: {
                $route: {
                    params: { username }
                }
            }
        })

        expect(wrapper.find(".username").text()).toBe(username)
    });
});