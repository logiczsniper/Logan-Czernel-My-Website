<template>
  <div class="home">
    <Headshot />
    <Hello msg="Hey there. I am" />
    <Links />
  </div>
</template>

<script>
import Hello from "@/components/Hello.vue";
import Links from "@/components/Links.vue";
import Headshot from "@/components/Headshot.vue";

export default {
  name: "Home",
  components: {
    Hello,
    Links,
    Headshot
  }
};
</script>

<style scoped>
</style>
