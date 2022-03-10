<template>
  <div
    id="projects"
    class="md:h-screen bg-black-color flex flex-col pt-10 items-center justify-center 2xl:px-40"
  >
    <div class="flex items-start justify-start w-full flex-col">
      <h2
        class="text-3xl font-bold text-transparent m-5 md:m-0 bg-clip-text bg-gradient-to-r from-yellow to-green mb-5"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="grid overflow-hidden 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-8 gap-4"
    >
      <div v-for="(project, i) in projects" :key="i">
        <project-item :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import { DataStore } from "@aws-amplify/datastore";
import projectItem from "./project-item.vue";
import { Project } from "~/src/models";
export default {
  components: { projectItem },
  data() {
    return {
      title: "Projects",
      projects: [],
    };
  },
  methods: {
    async getProjects() {
      this.projects = await DataStore.query(Project);
    },
  },
  fetch() {
    this.getProjects();
  },
};
</script>
