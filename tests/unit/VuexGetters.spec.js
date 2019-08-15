import Vuex from 'vuex'
import { shallowMount, createLocalVue} from '@vue/test-utils'
import VuexGetters from '@/components/VuexGetters.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        firstName: 'Joe',
        lastName: 'Doe'
    },

    getters: {
        fullname: (state) => state.firstName + " " + state.lastName
    }
})

describe('Component with getters', () => {
    it('renders a fullname using a real Vuex getter', () => {
        const wrapper = shallowMount(VuexGetters, {
            store,
            localVue
        })

        expect(wrapper.find('.fullname').text()).toBe('Joe Doe')
    });

    it('renders a fullname using mocks', () => {
        const wrapper = shallowMount(VuexGetters, {
            mocks: {
                $store: {
                    getters: {
                        fullname: "Janna"
                    }
                }
            }
        })

        expect(wrapper.find('.fullname').text()).toBe('Janna')
    })

    it('renders a fullname using computed mounting options', () => {
        const wrapper = shallowMount(VuexGetters, {
            computed: {
                fullname: () => 'Janna'
            }
        })

        expect(wrapper.find('.fullname').text()).toBe('Janna')
    })
});