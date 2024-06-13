<template>
  <div class="main-container">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  width: 100%;
  height: 100%;
}

.box {
  margin-left: 500px;
  margin-top: 200px;
  width: 200px;
  height: 200px;
  background-color: bisque;
}
</style>
