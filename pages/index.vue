<template>
  <div class="w-full bg-black-color">
    <Homesection id="home" class="w-full" />
    <Aboutsection id="about" class="w-full" :stack="stacks" />
    <Projectsection id="projects" class="w-full" :projects="projects" />
    <Contactsection id="contact" class="w-full" />
    <div class="fixed top-2/3 left-8">
      <SocialItem v-for="(item, i) in items" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import Homesection from "~/components/homesection.vue";
import Aboutsection from "~/components/aboutsection.vue";
import Projectsection from "~/components/projectsection.vue";
import Contactsection from "~/components/contact/index.vue";
import Social from "~/components/social-item.vue";
import { db } from "~/plugins/firebase.js";
import { collection, getDocs } from "firebase/firestore";

export default {
  components: {
    Homesection,
    Aboutsection,
    Projectsection,
    Social,
    Contactsection,
  },
  name: "IndexPage",
  data() {
    return {
      items: [],
      stacks: [],
      projects: [],
    };
  },
  async fetch() {
    await this.getStacks();
    await this.getItems();
    await this.getProjects();
  },
  methods: {
    async getStacks() {
      const querySnapshot = await getDocs(collection(db, "stacks"));
      querySnapshot.forEach((doc) => {
        this.stacks.push(doc.data());
      });
    },
    async getProjects() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        this.projects.push(doc.data());
      });
    },
    async getItems() {
      const querySnapshot = await getDocs(collection(db, "socials"));
      querySnapshot.forEach((doc) => {
        this.items.push(doc.data());
      });
    },
  },
};
</script>

<style></style>
