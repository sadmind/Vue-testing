export default {
    bulldogs: (state) => {
        return state.dogs.filter(dog => dog.breed === 'bulldog')
    },

    bulldogsAge: (state, getters) => (age) => {
        return getters.bulldogs.filter(dog => dog.age === age)
    }
}