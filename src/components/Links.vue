<template>
  <ul id="connect">
    <div class="link">
      <a href="https://www.linkedin.com/in/loganczernel/" target="_blank">
        <i class="fab fa-linkedin-in" id="item"></i>
      </a>
    </div>
    <div class="link">
      <a href="https://github.com/logiczsniper" target="_blank">
        <i class="fab fa-github" id="item"></i>
      </a>
    </div>
    <div class="link">
      <a
        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=lczernel@gmail.com&su=Great Website&tf=1m"
        target="_blank"
      >
        <i class="fas fa-envelope" id="item"></i>
      </a>
    </div>
  </ul>
</template>

<script>
export default {
  name: "Links"
};
</script>

<style scoped>
#connect {
  margin-right: 1.5em;
}

#item {
  font-size: 1.5em;
}

.link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3.3em;
  height: 3.3em;
  padding-left: 2.5px;
  margin: 1.5em;
  font-size: 0.8em;
  border-radius: 50%;
  box-shadow: 3px 3px 5px 1px #d3dbe6, -1px -1px 5px 3px #ffffff;
  transition: transform 0.4s;
}

.link:hover {
  color: #489cc1;
  transform: scale(1.05);
}

i {
  color: #89919c;
}

i:hover,
i:active {
  color: #489cc1;
}
</style>