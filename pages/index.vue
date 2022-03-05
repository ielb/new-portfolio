<template>
  <div class="h-screen w-full bg-black-color">
    <navbar />
    <Homesection id="home" />
    <aboutsection id="about" />
    <Projectsection id="project" />
    <div class="fixed top-3/4 left-10">
      <SocialItem v-for="item,i in items" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import navbar from "~/components/nav/navbar.vue";
import Homesection from "~/components/homesection.vue";
import Aboutsection from "~/components/aboutsection.vue";
import Projectsection from "~/components/projectsection.vue";
import SocialItem from "~/components/social-item.vue";
export default {
  components: { navbar, Homesection, Aboutsection, Projectsection, SocialItem },
  name: "IndexPage",
  data() {
    return {
      items: [
        {
          title: "Github",
          link: "https://https://github.com/ielb",
          src: "/assets/github.svg",
        },

        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/ielb/",
          src: "/assets/linkedin.svg",
        },
        {
          title: "Showwcase",
          link: "https://ielb.showwcase.com/",
          src: "/assets/showwcase.svg",

        },
        {
          title: "Instagram",
          link: "https://www.instagram.com/ielb.dev",
          src: "/assets/instagram.svg",
        },
      ],
    };
  },
};
</script>

<style></style>
