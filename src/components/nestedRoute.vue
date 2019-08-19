<template>
  <div>
    Nested Route
    <div class="username">
      {{ $route.params.username}}
    </div>
  </div>
</template>

<script>
  import { bustCache } from "@/bust-cache.js"
  export default {
    beforeRouteLeave (to, from, next) {
      bustCache()
      next()
    }
  }
</script>

<style lang="scss" scoped>

</style>