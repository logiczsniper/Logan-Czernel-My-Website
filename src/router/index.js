import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../views/Work.vue"),
    props: {
      works: [
        {
          title: "Howth Golf Live: Competition Scoring",
          details:
            "App on both iOS & Android which facilitates live competition scoring for Howth Golf Club. Certain users can become admins with a special code, which enables them to create/modify/delete competitions. Other users can gain access to certain competitions. All other users can only view the data as it is changed in real time.",
          tools: "Dart & Flutter 💙.",
          image: "howthlive"
        },
        {
          title: "Hungeon: Haskell Adventure",
          details:
            "Explore randomly generated dungeons; dive as deep as possible before your flame runs out! Each level you pass, your torch loses fuel quicker. This was a fantastic project, so much fun to make & it introduced me to the world of functional programming.",
          tools: "Haskell & Gloss 💜.",
          image: "hungeon"
        },
        {
          title: "Take-Off 2: Fly Higher",
          details:
            "Control a space ship, dodging obstacles at various altitudes. Make it to space if you can! An updated version of my first ever project (Take-Off), featuring much cleaner code (& 180 lines less) & massive gameplay & graphics improvement.",
          tools: "Python & Pygame 💚.",
          image: "takeoff"
        },
        {
          title: "Naruto Jutsu Detection : Wear OS",
          details:
            "Tracks your wrist movements & plays the original Naruto jutsu audio when you make the correct hand seals! With the watch on the right hand, the user selects whichever jutsu they will attempt to perform. After moving to the starting position & tapping the screen, they begin the seals. The app listens to accelerometer data for the duration of the selected gesture. If the user was accurate enough, the appropriate jutsu sound is played.",
          tools: "Java & Gson 🧡.",
          image: "jutsu"
        }
      ]
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
