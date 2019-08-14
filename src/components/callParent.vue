<template>
  <call-child />
</template>

<script>
  export default {
    components: {
      "call-child": require('@/components/callChild.vue').default
    }
  }
</script>

<style lang="scss" scoped>

</style>