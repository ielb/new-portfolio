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
import { DataStore } from "@aws-amplify/datastore";
import { SocialItem, Project, Stack } from "~/src/models";

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

  async mounted() {
    await DataStore.start();
    await this.getSocials();
    await this.getProjects();
  },
  methods: {
    async getSocials() {
      var models = await DataStore.query(SocialItem);
      this.items = models;
      console.log(this.items);
    },
    async getStacks() {
      this.stacks = await DataStore.query(Stack);
    },
    async getProjects() {
      this.projects = await DataStore.query(Project);
    },
  },
};
</script>

<style></style>
