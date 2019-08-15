<template>
  <div>
    <button
      class="commit"
      @click="handleCommit">
      commit
    </button>

    <button
      class="dispatch"
      @click="handleDispatch">
      dispatch
    </button>

    <button
      class="namespaced-dispatch"
      @click="handleNamespacedDispatch">
      namespaced dispatch
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCommit() {
        this.$store.commit("testMutation", { msg: "Test commit" })
      },
      handleDispatch() {
        this.$store.dispatch("testAction", { msg: "Test dispatch" })
      },
      handleNamespacedDispatch() {
        this.$store.dispatch("namespaced/very/deeply/testAction", { msg: "Test namespaced dispatch" })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>