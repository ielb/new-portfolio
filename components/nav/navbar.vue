<template>
  <div>
    <div
      class="fixed hidden md:flex z-20 items-center justify-between w-full bg-black-color h-20 md:px-52"
    >
      <Logo />
      <navigation />
      <div @click="toContact"><buttonn /></div>
    </div>
    <div
      class="fixed flex md:hidden z-50 items-center justify-between w-full bg-black-color h-20 px-5"
    >
      <button class="mr-2" aria-label="Open Menu" @click="isOpen = true">
        <svg
          fill="#fff"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8 text-white"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <Logo @click="isOpen = true" />
    </div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-30 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-black-color fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center justify-center p-4 border-b border-green"
      >
        <Logo />
      </span>
      <div
        @click="toHome"
        class="flex items-center p-4 hover:bg-indigo-500 text-white hover:text-green"
      >
        <span>Home</span>
      </div>
      <div
        @click="toAbout"
        class="flex items-center p-4 hover:bg-indigo-500 text-white hover:text-green"
      >
        <span>About</span>
      </div>
      <div
        @click="toProject"
        class="flex items-center p-4 hover:bg-indigo-500 text-white hover:text-green"
      >
        <span>Projects</span>
      </div>
      <div class="fixed bottom-3 left-5" @click="toContact"><buttonn /></div>
    </aside>
  </div>
</template>
<script>
import Logo from "~/components/nav/Logo.vue";
import Buttonn from "./buttonn.vue";
import Navigation from "./navigation.vue";
export default {
  name: "Navbar",
  components: { Logo, Navigation, Buttonn },
  data() {
    return {
      isOpen: false,
    };
  },
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

<style scoped></style>
