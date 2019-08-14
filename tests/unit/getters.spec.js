import getters from '@/store/getters.js'

const dogs = [
    {name: 'first', breed: 'bulldog', age: 1},
    {name: 'second', breed: 'dalmatian', age: 11},
    {name: 'third', breed: 'bulldog', age: 4},
]
const state = { dogs }

describe('bulldogs', () => {
    it('returns bulldogs', () => {
        const actual = getters.bulldogs(state)
    
        expect(actual).toEqual([ dogs[0], dogs[2] ])
    });
});

describe('bulldogsAge', () => {
    it('returns bulldogs by age', () => {
        const bulldogs = [ dogs[0], dogs[2] ]
        const actual = getters.bulldogsAge(state, { bulldogs })(1)

        expect(actual).toEqual([ dogs[0] ])
    });
});