<template>
  <div class="w-full bg-black-color">
    <Homesection id="home" class="w-full" />
    <Aboutsection id="about" class="w-full" />
    <Projectsection id="projects" class="w-full" />
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
import { SocialItem } from "../src/models";

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
    };
  },
  fetch() {
    this.getSocials();
  },
  methods: {
    async getSocials() {
      var models = await DataStore.query(SocialItem);
      this.items = models;
    },
  },
};
</script>

<style></style>
