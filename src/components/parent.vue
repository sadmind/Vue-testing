<template>
  <div>
    <span v-show="showSpan">
      parent
    </span>
    <!-- <child v-if="showChild" /> -->
    <child 
      v-for="id in [1, 2 ,3]" 
      :key="id" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSpan: false,
        showChild: false
      }
    },
    components: {
      'child': require('@/components/child.vue').default
    }
  }
</script>

<style lang="scss" scoped>

</style>