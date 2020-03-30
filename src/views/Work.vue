<template>
  <div>
    <!-- <h1 class="title">See some of my work here</h1> -->
    <ul>
      <li v-for="work in works" :key="work.title">
        <div class="info">
          <span class="title">{{ work.title.split(': ')[0] }}</span>
          <span class="title-colon">{{ ' - ' + work.title.split(': ')[1] }}</span>
          <br />
          <span class="details">{{ work.details }}</span>
          <br />
          <span class="details">Built with {{ work.tools }}</span>
        </div>
        <img
          class="image"
          :src="require(`@/assets/images/${work.image}-screenshot.png`)"
          :alt="`@/assets/images/${work.image}-screenshot.png`"
        />
      </li>
    </ul>
    <p>... Many more projects on my Github</p>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    works: {
      type: Array,
      validator: function(values) {
        values.forEach(function(value) {
          if (
            !Object.keys(value).includes("title") ||
            !Object.keys(value).includes("details") ||
            !Object.keys(value).includes("tools") ||
            !Object.keys(value).includes("image")
          ) {
            return false;
          }
        });
        return true;
      },
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
ul {
  margin-left: 4em;
}

li {
  display: flex;
  text-align: left;
  padding: 0;
  margin-bottom: 3em;
}

p {
  margin-left: 4.5em;
  margin-right: 20%;
  padding-top: 2em;
  border-top: 1.5px solid #ced4da;
}

.title {
  color: #489cc1;
}

.details {
  font-family: "noto_sans";
  font-size: 0.85em;
  color: #46535f;
}

.info {
  text-align: left;
  width: 60%;
  display: inline-block;
}

.image {
  display: inline-block;
  width: 15%;
  height: 15%;
  border-radius: 50%;
  padding: 10px;
  margin-left: 10%;
  box-shadow: 6px 6px 10px 4px #c9d1db, -4px -4px 10px 7px #ffffff;
}
</style>