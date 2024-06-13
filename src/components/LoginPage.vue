<template>
  <div class="main-container">
    <nav class="nav-var">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>

    <div class="login-box">
      <header class="login-header">
        <h1>Login</h1>
      </header>
      <main class="login-body">
        <form action="#" @submit.prevent="">
          <p>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="E-Mail" required />
          </p>
          <p>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
            />
          </p>
          <p>
            <input type="submit" id="submit" @click="login" value="Login" />
          </p>
        </form>
      </main>

      <footer class="login-footer">
        <p>
          Don't have an Account?
          <a @click="redirectToSignup" href="">Register</a>
        </p>
      </footer>
    </div>
    <div class="circle c1"></div>
    <div class="circle c2"></div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  methods: {
    redirectToSignup() {
      this.$router.push({ name: "Signup" });
    },
    login() {
      this.$router.push({ name: "Chart" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid red; */
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: linear-gradient(to top, #ffffff33, #ffffffff);
}

.c1 {
  top: 100px;
  left: 40px;
}

.c1:hover {
  background: linear-gradient(to top, rgb(40, 173, 218), rgb(11, 71, 95));
}

.c2:hover {
  background: linear-gradient(to top, rgb(40, 173, 218), rgb(11, 71, 95));
}

.c2 {
  bottom: 100px;
  right: 40px;
}

p {
  padding-top: 20px;
}

h1 {
  width: 100%;
  display: block;
  margin-left: 55px;
  color: black;
}

li {
  display: inline;
  padding: 10px;
  cursor: pointer;
}

ul {
  z-index: 2;
  top: 0;
  width: 100%;
  position: sticky;
  padding: 30px;
  background-color: beige;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.main-container {
  width: 100%;
  height: 200%;
  /* background-color: lightblue; */
  background: linear-gradient(to top left, lightblue, skyblue);
}

.nav-bar {
  /* width: 100%; */
  background-color: beige;
}

.login-box {
  position: relative;
  top: 70px;
  margin-left: 476px;
  box-shadow: 2px 2px 5px lightblue;
  height: 340px;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: beige;
  padding: 20px 40px;
}

li:hover {
  color: blue;
}

.login-footer {
  color: #555;
  text-align: center;
}

.login-footer p a {
  color: #4190c5;
}

.login-body {
  margin-top: 10px;
  margin-left: 5px;
}

.login-body p label {
  display: block;
}

.login-body p input {
  margin-top: 2px;
  width: 100%;
  padding: 5px;
}

.login-body p input[type="submit"] {
  background-color: #4190c5;
  border: none;
  cursor: pointer;
}
.login-body p input[type="submit"]:hover {
  background-color: #0496f8;
}
</style>
