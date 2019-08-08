import { shallowMount } from '@vue/test-utils'
import NumberRenderer from '@/components/number.vue'

describe('NumberRenderer', () => {
    it('renders even', () => {
        const wrapper = shallowMount(NumberRenderer, {
            propsData: {
                even: true
            }
        })
        expect(wrapper.text()).toBe('2, 4, 6, 8')
    })
    
    it('renders odd', () => {
        const localThis = {even: false}

        expect(NumberRenderer.computed.numbers.call(localThis)). toBe("1, 3, 5, 7, 9")
        // vue 自動綁定 props 到 this ，但是如果沒有用 mount 去渲染的話，vue 則沒有綁定東西到 this。
        // 所以需要用 call 去綁定 this
    })
})