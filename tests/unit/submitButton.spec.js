import { shallowMount } from '@vue/test-utils'
import SubmitButton from '@/components/submitButton.vue'

const msg = 'submit'
const factory = (propsData) => {
    return shallowMount(SubmitButton, {
        propsData: {
            msg,
            ...propsData
        }
    })
}

describe('submitButton.vue', () => {
    describe('is authorized', () => {
        it('renders message', () => {
            const wrapper = factory({ isAdmin: true })

            expect(wrapper.find('span').text()).toBe("Admin Privileges")
            expect(wrapper.find('button').text()).toBe('submit')
        })
    }) 

    describe('not authorized', () => {
        it('renders message', () => {
            const wrapper = factory()

            expect(wrapper.find('span').text()).toBe("No!")
            expect(wrapper.find('button').text()).toBe('submit')
        })
    }) 
})