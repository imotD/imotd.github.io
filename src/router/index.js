import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Gallery from "../views/Gallery.vue";
// import Podcast from "../views/Podcast.vue";
// import Support from "../views/Support.vue";
import Project from "../views/Project.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/tentang",
  //   name: "About",
  //   component: About,
  // },
  // {
  //   path: "/karya",
  //   name: "Gallery",
  //   component: Gallery,
  // },
  // {
  //   path: "/podcast",
  //   name: "Podcast",
  //   component: Podcast,
  // },
  // {
  //   path: "/dukung",
  //   name: "Support",
  //   component: Support,
  // },
  {
    path: "/portofolio",
    name: "Project",
    component: Project,
  },
  {
    path: "/portofolio/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
