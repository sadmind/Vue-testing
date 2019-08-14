import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/parent.vue'
import Child from '@/components/child.vue'

describe('Parent', () => {
    it('does not render a span', () => {
        const wrapper = shallowMount(Parent)

        expect(wrapper.find('span').isVisible()).toBe(false)
    });

    it('does render a span', () => {
        const wrapper = shallowMount(Parent, {
            data() {
                return {showSpan: true}
            }
        })

        expect(wrapper.find('span').isVisible()).toBe(true)
    });

    // it("does not render a child component", () => {
    //     const wrapper = shallowMount(Parent)

    //     expect(wrapper.find(Child).exists()).toBe(false)
    // })

    // it("render a child component", () => {
    //     const wrapper = shallowMount(Parent, {
    //         data() {
    //             return { showChild: true }
    //         }
    //     })

    //     expect(wrapper.find({name:'child'}).exists()).toBe(true)
    // })   找不到component child  

    it('renders many child', () => {
        const wrapper = shallowMount(Parent)

        expect(wrapper.findAll(Child).length).toBe(3)
    });

});
