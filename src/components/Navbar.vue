<template>
  <div id="nav">
    <router-link id="link" to="/">Home</router-link>
    <router-link id="link" to="/work">Work</router-link>
    <router-link id="link" to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isPressed: Boolean
  }
};
</script>

<style scoped>
#nav {
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ecf0f3;
  overflow-x: hidden;
  padding: 2em 2em 1em 2em;
  font-size: 10;
}

#nav a {
  padding: 25px 15px;
  margin-bottom: 1.5em;
  text-decoration: none;
  font-size: 1em;
  color: #89919c;
  display: block;
  border-radius: 0.6em;
  box-shadow: 3px 3px 5px 1px #d3dbe6, -1px -1px 5px 3px #ffffff;
  transition: transform 0.4s;
}

#nav a.router-link-exact-active {
  color: #489cc1;
  box-shadow: inset 3px 3px 6px 1px #d3dbe6, inset -1px -1px 7px 3px #ffffff;
  transform: scale(1.05);
}

#nav a:hover {
  color: #74a7bd;
}
</style>