import { shallowMount } from '@vue/test-utils'
import VueTestUtils from '@vue/test-utils'
import chin from './src/chinese.js'
import Bilingual from '@/components/bilingual.vue'

const locale = 'zh'

VueTestUtils.config.mocks["$t"] = (msg) => chin[locale][msg]

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

        console.log(wrapper.html())
    });


});