<template>
  <li :class="['message', 'appeared', fromUser ? 'left' : 'right']">
    <div class="text_wrapper">
      <div class="text">{{ message.content }}</div>
      <div class="multi-button">
        <button @click="editMessage">Edit</button>
        <button @click="deleteMessage">Delete</button>
      </div>
    </div>
  </li>
</template>

<script>
import axios from "axios"

export default {
  props: {
    message: Object
  },
  computed: {
    fromUser() {
      if (this.message.user) {
        return this.message.user._id === localStorage.getItem("user_id")
      } else {
        return false
      }
    }
  },
  methods: {
    editMessage() {
      // axios.put("/message/" + this.message._id)
      this.$emit('editMessage', this.message)
    },
    deleteMessage() {
      axios.delete("/message/message/" + this.message._id)
      this.$emit('deleteMessage')
    }
  }
};
</script>

<style>
.multi-button {
  filter: drop-shadow(3px 10px 15px rgba(0, 0, 0, 0.45));
  float: right;
}
.multi-button button {
  height: 35px;
  width: 70px;
  background: linear-gradient(to bottom, #3b4caf, #30bdb1);
  font-weight: bold;
  color: rgb(231, 230, 230);
  font-size: 16px;
  border: none;
  margin: -5px;
  padding: 0;
  stroke: black;
  outline: none;
}
.multi-button :nth-child(1) {
  border-radius: 20px 0 0 20px;
}
.multi-button :nth-child(2) {
  border-radius: 0 20px 20px 0;
}
button:hover {
  cursor: pointer;
  filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.45));
}
button:active {
  filter: none;
  transform: scale(0.95);
}
</style>