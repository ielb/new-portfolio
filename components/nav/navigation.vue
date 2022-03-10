<template>
  <div class="flex items-center justify-evenly">
    <div
      @click="toHome"
      class="cursor-pointer mr-8 transform transition duration-500 hover:scale-110"
    >
      <h3 class="text-white text-xl">Home</h3>
    </div>
    <div
      @click="toAbout"
      class="mr-8 transform cursor-pointer transition duration-500 hover:scale-110"
    >
      <h3 class="text-white text-xl">About</h3>
    </div>
    <!-- <a href="#skills" class="mr-8 transform transition duration-500 hover:scale-110">
      <h3 class="text-white text-xl">Skills</h3>
    </a> -->
    <div
      @click="toProject"
      class="transform cursor-pointer transition duration-500 hover:scale-110"
    >
      <h3 class="text-white text-xl">Projects</h3>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toContact() {
      this.isOpen = false;
      document
        .getElementById("contactme")
        .scrollIntoView({ block: "end", behavior: "smooth" });
    },
    toHome() {
      this.isOpen = false;
      document
        .getElementById("home")
        .scrollIntoView({ block: "end", behavior: "smooth" });
    },
    toAbout() {
      this.isOpen = false;
      document
        .getElementById("about")
        .scrollIntoView({ block: "end", behavior: "smooth" });
    },
    toProject() {
      this.isOpen = false;
      document
        .getElementById("projects")
        .scrollIntoView({ block: "end", behavior: "smooth" });
    },
  },
};
</script>

<style></style>
