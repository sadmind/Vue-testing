<template>
  <div class="username">
    {{ username }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: this.$store.state.username
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>