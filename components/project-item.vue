<template>
  <div
    class="project-box mx-10 my-10 cursor-pointer rounded-xl flex flex-col transform transition duration-500 hover:scale-105 p-5 bg-black-color"
  >
    <div class="my-5">
      <img
        class="h-full w-full bg-cover rounded-xl"
        src="https://vuejsexamples.com/content/images/2021/11/nuxt-portfolio-dev.jpg"
        alt="img"
      />
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
      <div class="project-box-content-link">
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
        >
          link
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    project: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style scoped>
.project-box {
  height: auto;
  width: 400px;
}
.shadow {
  box-shadow: 0px 0px 10px rgba(248, 242, 242, 0.5);
}
</style>
