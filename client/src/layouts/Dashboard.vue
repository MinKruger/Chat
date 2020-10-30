<template>
  <div class="dashboard">
    <navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  top: 47px;
  width: 100%;
  height: calc(100vh - 47px);
  background-color: white;
  padding: 10px;
  overflow: auto;
}
</style>
