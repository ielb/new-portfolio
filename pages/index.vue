<template>
  <div class="h-screen w-full bg-black-color">
    <navbar />
    <Homesection id="home" />
    <aboutsection id="about" />
    <Projectsection id="project" />
    <Contactsection id="contact" />
    <Footer />
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
import Contactsection from "~/components/contact/index.vue";
import Social from "~/components/social-item.vue";
import { DataStore } from '@aws-amplify/datastore';
import { SocialItem  } from '../src/models';
import Footer from "~/components/footer/index.vue";
export default {
  components: { navbar, Homesection, Aboutsection, Projectsection, Social, Contactsection, Footer },
  name: "IndexPage",
  data() {
    return {
      items: [

      ],
    };
  },
  fetch(){
this.getSocials();
  },
  methods:{
  async  getSocials()  {
       var models = await DataStore.query(SocialItem);
       this.items = models;
    }
  }
};
</script>

<style></style>
