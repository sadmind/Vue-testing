import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentGetters from "@/components/VuexState.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: 'Ben'
    }
})

describe('ComponentGetters', () => {
    it('renders a username using a real Vuex store', () => {
        const wrapper = shallowMount(ComponentGetters, {
            store,
            localVue
        })

        expect(wrapper.find(".username").text()).toBe("Ben")
    });

    it('renders a username using a mock store', () => {
        const wrapper = shallowMount(ComponentGetters, {
            mocks: {
                $store: {
                    state: {
                        username: 'Tom'
                    }
                }
            }
        })

        expect(wrapper.find(".username").text()).toBe('Tom')
    });  
});