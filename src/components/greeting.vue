<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
export default {
  name: "greeting",
  
  data() {
    return {
      greeting: "Vue and TDD"
    }
  }
}
</script>
