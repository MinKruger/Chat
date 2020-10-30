<template>
  <li :class="['message', 'appeared', fromUser ? 'left' : 'right']">
    <div class="text_wrapper">
      <div class="text">
        {{ message.content }} <br><br>
        {{ message.user.login }}
        </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    message: Object
  },
  computed: {
    fromUser() {
      if(this.message.user) {
        return this.message.user._id === localStorage.getItem('user_id')
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>