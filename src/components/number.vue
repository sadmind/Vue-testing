<template>
  <div>
    {{ numbers }}
  </div>
</template>

<script>
import { constants } from 'crypto';
  export default {
    name: "NumberRenderer",

    props: {
      even: {
        type: Boolean,
        required: true 
      },
    },

    computed: {
      numbers() {
        const evens = []
        const odds = []

        for (let i = 1; i < 10; i++) {
          if (i % 2 == 0) {
            evens.push(i)
          } else {
            odds.push(i)
          }
        }
        return this.even === true ? evens.join(', ') : odds.join(', ')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>