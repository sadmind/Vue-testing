import { shallowMount, mount } from '@vue/test-utils'
import callParent from '@/components/callParent.vue'
import callChild from '@/components/callChild.vue'

describe('callParent', () => {
    // it('renders with mount and does initialize API call', () => {
    //     const wrapper = mount(callParent)

    //     expect(wrapper.find(callChild).exists()).toBe(true)
    // });

    it('renders with mount and does initialize API call (stub)', () => {
        const wrapper = mount(callParent, {
            stubs: {
                callChild: true
            }
        })

        expect(wrapper.find(callChild).exists()).toBe(true)
    });

    it('renders with shallowMount and does not initialize API call ', () => {
        const wrapper = shallowMount(callParent)

        expect(wrapper.find(callChild).exists()).toBe(true)
    });
});