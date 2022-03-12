<template>
  <div
    id="projects"
    class="pt-20 bg-black-color 2xl:h-screen flex items-center flex-col justify-evenly 2xl:px-52 w-full"
  >
    <div class="flex items-start justify-start w-full flex-col">
      <h2
        class="text-3xl font-bold text-transparent m-5 md:m-0 bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="grid overflow-hidden 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-8 gap-4 md:px-10"
    >
      <div v-for="(project, i) in projects" :key="i">
        <project-item :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import projectItem from "./project-item.vue";
export default {
  components: { projectItem },
  props: {
    projects: Array,
  },
  data() {
    return {
      title: "Projects",
    };
  },
};
</script>
