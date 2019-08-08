import flushPromises from 'flush-promises'
import { shallowMount } from '@vue/test-utils'
import FormSubmit from '@/components/formSubmit.vue'


let url = '',
    data = ''
const mockHttp = {
    get: (_url, _data) => {
    return new Promise((resolve, reject) => {
        url = _url
        data = _data
        resolve()
    })
    }
}
    
describe("ForSubmit", () => {
    it('reveals a notification when submitted', async () => {
        const wrapper = shallowMount(FormSubmit, {
            mocks: {
                $http: mockHttp
            }
        })

        wrapper.find("[data-name]").setValue('alice') 
        wrapper.find('form').trigger('submit.prevent')

        await flushPromises()

        expect(wrapper.find('.message').text()).toBe("Hey alice!")
        expect(url).toBe('/api/v1/register')
        expect(data).toEqual({username: "alice"})
    })
})