<template>
  <div class="h-4/5 pt-20 w-full bg-black-color flex items-center justify-between px-52">
    <div>
      <img class="h-99" src="https://portfolio151100-dev.s3.amazonaws.com/public/info.webp" alt="About me" />
    </div>
    <div class="flex items-start justify-center h-1/4 w-1/2 flex-col">
      <h2
        class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
      >
        {{ title }}
      </h2>
      <h4 class="text-xl font-light space-x-10 text-white tracking-wider">
        {{ content }}
      </h4>
      <div class="text-white mt-10">
        <h2 class="font-semibold text-2xl">Stack</h2>
        <div class="mt-5 grid overflow-hidden grid-cols-8 grid-rows-8 gap-14">
          <StackItem v-for="item,i in stack" :key="i" :stack="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DataStore } from '@aws-amplify/datastore';
import { Stack } from '../src/models';
import StackItem from "./stack-item.vue";
export default {
  data() {
    return {
      title: "About",
      content: `I am a full-stack developer, I have
worked on a soccer team mobile application with Flutter and Laravel for the Rest API, and there is another, It is a delivery  application, one with the same stack , Currently, I'm working on a point of sell system for a company client that I work in
and a car parts e-commerce website with Nuxtjs/Vuejs and Laravel for the backend.
I'm currently available for freelance work if you are interested in working with please contact me.
`,
      stack: [

      ],
    };
  },
  components: { StackItem },
  fetch(){
    this.getStacks();
  },
  methods:{
    async getStacks(){
    var data  =    await DataStore.query(Stack);
    this.stack = data;
    }
  }
};
</script>

<style>
.width {
  width: 800px;
}
.h-99 {
  height: 700px;
}
.text-transparent {
  color: transparent;
}
</style>
