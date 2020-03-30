<template>
  <div class="about">
    <h1>About</h1>
    <div class="quote-box">
      <blockquote>
        <p class="quotation">Simplicity is prerequisite for reliability.</p>
        <footer>— Edsger W. Dijkstra</footer>
      </blockquote>
    </div>
    <p>
      Computer Science student at UCD while learning on
      the side by completing my own projects & getting as much experience as possible.
      I am always looking out for opportunities to better prepare myself to embark on a
      fantastic career in software engineering.
    </p>
    <p>
      I have completed work experience with the
      Engineering Services team at Qualtrics & this summer I am looking forward to a 3 month
      internship with Calypso AI.
    </p>
    <p>
      I am also very involved in the community within UCD. I am a committee member for UCD Netsoc
      (2nd year on the committee), I mentor children learning to code for UCD CoderDojo & play ultimate
      frisbee with the UCD Mens Development squad.
    </p>
    <p>
      I strongly believe that there is always something you can learn about for your own self-improvement. Hence,
      I am always toying around with something new on the side, while practicing towards mastery in what I have learned so far.
    </p>
  </div>
</template>

<style scoped>
p {
  font-family: "noto_sans";
  text-align: left;
  text-indent: 50px;
  margin-left: 10%;
  margin-right: 10%;
}

h1 {
  color: #489cc1;
}

.quote-box {
  display: inline-block;
  border-radius: 0.6em;
  padding: 0em;
  margin-right: 8%;
  margin-left: 8%;
  margin-bottom: 5%;
  box-shadow: 3px 3px 5px 1px #d3dbe6, -1px -1px 5px 3px #ffffff;
}

.quotation {
  text-align: center;
  font-size: 20px;
  quotes: "\201C""\201D""\2018""\2019";
  line-height: 1.4;
}

.quotation:before,
.quotation:after {
  font-family: serif;
  display: inline;
  line-height: 0;
  position: relative;
  color: #489cc1;
  font-size: 4em;
}

.quotation:before {
  content: open-quote;
  left: -10px;
  top: 30px;
}
.quotation:after {
  content: close-quote;
  left: 10px;
  top: 35px;
}

footer {
  padding-top: 0.75em;
  text-align: right;
  font-size: 1em;
  color: #89919c;
}
</style>
