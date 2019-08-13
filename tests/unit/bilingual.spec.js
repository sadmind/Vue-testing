import { shallowMount } from '@vue/test-utils'
import VueTestUtils from '@vue/test-utils'
import trans from '@/translate'
import Bilingual from '@/components/bilingual.vue'
import { wrap } from 'module';

const locale = "zh"

VueTestUtils.config.mocks["$t"] = (msg) => trans[locale][msg]

describe('Bilingual', () => {
    
    // it('renders successfully', () => {
    //     const wrapper = shallowMount(Bilingual, {
    //         mocks: {
    //             $t: (msg) => msg
    //         }
    //     })
    // });

    it('renders successfully', () => {
        const wrapper = shallowMount(Bilingual)

        expect(wrapper.text()).toBe("你好啊！世界")
    });


});