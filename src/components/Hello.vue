<template>
  <div id="box">
    <vue-typed-js
      :typeSpeed="110"
      :backDelay="950"
      :backSpeed="85"
      :strings="['learning', 'leading', 'Logan.']"
    >
      <h1>
        Hey there, I'm
        <div class="typing-box">
          <span class="typing"></span>
        </div>
      </h1>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String
  }
};
</script>

<style scoped>
#box {
  display: inline-block;
}

.typing-box {
  display: inline-block;
  border-radius: 0.6em;
  margin-top: 0.35em;
  padding: 0.35em;
  box-shadow: 3px 3px 5px 1px #d3dbe6, -1px -1px 5px 3px #ffffff;
}
</style>
