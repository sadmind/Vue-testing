import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buttons from '@/components/buttons.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
    testMutation: jest.fn()
}

const store = new Vuex.Store({ mutations })

describe('Buttons', () => {
    it('commits a mutation when a button is clicked', () => {
        const wrapper = shallowMount(Buttons, {
            store,
            localVue
        })

        wrapper.find(".commit").trigger("click")

        expect(mutations.testMutation).toHaveBeenCalledWith(
            {},
            { msg: "Test commit" }
        )
    });

    it('dispatches an action when a button is clicked', () => {
        const mockStore = { dispatch: jest.fn() }
        const wrapper = shallowMount(Buttons, {
            mocks: {
                $store: mockStore
            }
        })

        wrapper.find(".dispatch").trigger('click')

        expect(mockStore.dispatch).toHaveBeenCalledWith(
            "testAction",
            { msg: "Test dispatch" }
        )
    });
    
    it('dispatch a namespaced action when button is clicked', () => {
        const store = new Vuex.Store()
        store.dispatch = jest.fn()

        const wrapper = shallowMount(Buttons, {
            store,
            localVue
        })

        wrapper.find(".namespaced-dispatch").trigger('click')

        expect(store.dispatch).toHaveBeenCalledWith(
            'namespaced/very/deeply/testAction',
            { msg: "Test namespaced dispatch"}
        )
    });
});