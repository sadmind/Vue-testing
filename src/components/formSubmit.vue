<template>
  <div>
    <form @submit.prevent="formSubmit">
      <input v-model="username" data-name>
      <input type="submit">
    </form>

    <div
      class="message"
      v-if="submitted"
    >
      Hey {{ username }}!
    </div>
  </div>
</template>

<script>

export default {
    name: "formSubmit",

    data() {
      return {
        username: 0,
        submitted: false
      }
    },
    methods: {
      formSubmit() {
        
        return this.$http.get("/api/v1/register", { username: this.username })
          .then(() => {
            this.submitted = true
          })
          .catch((e) => {
            throw Error('damn it', e)
          })
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>