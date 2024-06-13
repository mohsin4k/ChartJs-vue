<template>
  <div>
    <!-- <BoxStyle /> -->
    <router-view> </router-view>
    <!-- <SignupPage /> -->
  </div>
</template>

<script>
// import BoxStyle from "./components/BoxStyle.vue";
// import SignupPage from "./components/SignupPage.vue";

export default {
  name: "App",
  components: {
    // BoxStyle,
    // SignupPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid red; */
}
</style>
