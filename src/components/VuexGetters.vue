<template>
  <div class="fullname">
    {{ fullname }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(["fullname"])
    }
  }
</script>

<style lang="scss" scoped>

</style>