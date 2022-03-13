<template>
  <div>
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="project.images"
      :index="indexx"
      @hide="hide"
    >
    </vue-easy-lightbox>
    <div
      class="w-[400px] md:w-[500px] mx-10 my-10 rounded-xl flex flex-col transform transition duration-500 hover:scale-105 bg-black-color"
    >
      <div class="my-5 cursor-pointer" @click="show">
        <img
          class="h-64 w-full bg-cover rounded-xl"
          :src="project.thumbnail"
          alt="img"
          height="260"
          width="360"
        />
      </div>
      <div v-show="project.url" class="cursor-pointer">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
        >
          <img
            height="30"
            width="30"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-9bded.appspot.com/o/assets%2Flink.svg?alt=media"
            :alt="project.title + ' Link'"
          />
        </a>
      </div>

      <div v-show="project.github" class="cursor-pointer">
        <a
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
        >
          <img
            height="30"
            width="30"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-9bded.appspot.com/o/social%2Fgithub.svg?alt=media"
            :alt="project.title + ' github'"
          />
        </a>
      </div>
      <div v-show="project.playstore" class="cursor-pointer">
        <a
          :href="project.playstore"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
        >
          <img
            height="30"
            width="30"
            src=" https://firebasestorage.googleapis.com/v0/b/portfolio-9bded.appspot.com/o/assets%2Fplay.svg?alt=media"
            :alt="project.title + ' github'"
          />
        </a>
      </div>
      <div v-show="project.applestore" class="cursor-pointer">
        <a
          :href="project.applestore"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
        >
          <img
            height="30"
            width="30"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-9bded.appspot.com/o/assets%2Fapplestore.svg?alt=media"
            :alt="project.title + ' github'"
          />
        </a>
      </div>
      <div class="project-box-content">
        <div class="project-box-content-title">
          <h3 class="text-xl font-bold text-white mb-2">
            {{ project.title }}
          </h3>
        </div>
        <div class="project-box-content-description">
          <p class="text-sm font-medium text-white mb-2">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
      visible: false,
    };
  },
  methods: {
    show() {
      this.index = 0;
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },
  computed: {
    indexx: {
      get() {
        return this.index;
      },
      set(index) {
        this.index = index;
      },
    },
  },
};
</script>

<style scoped>
.shadow {
  box-shadow: 0px 0px 10px rgba(248, 242, 242, 0.5);
}
</style>
