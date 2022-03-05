<template>
  <div class="w-full bg-black-color flex flex-col pt-10 items-start justify-center px-52">
    <div class="flex items-start justify-center h-1/4 flex-col">
      <h2
        class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
      >
        {{ title }}
      </h2>
    </div>
    <div class="grid overflow-hidden grid-cols-3 grid-rows-8 gap-4">
      <div v-for="i in 5" :key="i">
        <project-item :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import projectItem from "./project-item.vue";
export default {
  components: { projectItem },
  data() {
    return {
        title: "Projects",
      project: {
        percentage: 80,
        title: "Project Title",
        description: "Description",
        link: "Link",
      },
    };
  },
};
</script>
