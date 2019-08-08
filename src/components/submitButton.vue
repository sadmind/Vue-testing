<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>No!</span>
    <button> 
      {{ msg }}
    </button>
  </div>
</template>

<script>
export default {
  name: "submitButton",

  props: {
    msg: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
