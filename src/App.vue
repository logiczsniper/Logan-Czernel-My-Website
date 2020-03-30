<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view id="view" />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<style>
@font-face {
  font-family: "noto_sans";
  src: url("assets/fonts/NotoSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "gilroy";
  src: url("assets/fonts/Gilroy-ExtraBold.otf") format("truetype");
  font-weight: 800;
  font-style: normal;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 0.1em;
  color: #323d47;
  font-family: "gilroy", sans-serif;
}

#view {
  padding: 2em 0.5em 1em 2em;
  margin-left: 6.75em;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
