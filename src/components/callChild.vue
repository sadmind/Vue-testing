<template>
  <div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    created() {
      this.makeApiCall()
    },

    methods: {
      async makeApiCall() {
        console.log('Makin api call')
        await axios.get("https://jsonplaceholder.typicode.com/posts/1")
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>