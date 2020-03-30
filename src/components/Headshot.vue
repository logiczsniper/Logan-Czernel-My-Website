<template>
  <div id="headshot-border">
    <img id="headshot" alt="My face." src="../assets/images/headshot-blue.png" />
  </div>
</template>

<script>
export default {
  name: "Headshot"
};
</script>

<style scoped>
#headshot {
  width: 20%;
  height: 20%;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 30px;
  box-shadow: 6px 6px 10px 4px #c9d1db, -4px -4px 10px 7px #ffffff;
}

/* #headshot-border {
  border-radius: 50%;
  padding: 40px;
  box-shadow: 5px 5px 6px 4px #d3dbe6, -3px -3px 6px 6px #ffffff,
    inset 5px 5px 3px 4px #d3dbe6, inset -3px -3px 6px 6px #ffffff;
} */
</style>