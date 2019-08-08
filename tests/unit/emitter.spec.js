import { shallowMount } from '@vue/test-utils'
import Emitter from '@/components/emitter.vue'

describe('Emitter', () => {
    it('emits an event with two arguments', () => {
        const wrapper = shallowMount(Emitter)

        wrapper.vm.emitEvent()
        wrapper.vm.emitEvent()

        expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
        // console.log(wrapper.emitted().myEvent[0][1])
    });

    it('emits an event without mounting the component', () => {
        const events = {}
        const $emit = (event, ...args) => {
            events[event] = [...args]
        }

        Emitter.methods.emitEvent.call({ $emit })

        expect(events.myEvent).toEqual(['name', 'password'])
    });
});