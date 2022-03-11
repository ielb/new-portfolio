<template>
  <div>
    <!-- Create a simple footer -->
    <footer class="bg-black-color">
      <div class="mx-auto px-6 py-8">
        <div class="flex flex-row justify-center items-center">
          <h3 class="text-white font-bold text-3xl">
            <a href="/" class="text-white">
              <Logo />
            </a>
          </h3>
          <p class="ml-5 text-gray-400 text-sm">
            Created by
            <a
              class="font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green"
              href="https://github.com/ielb"
              >Ielb</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "../nav/Logo.vue";
export default { components: { Logo } };
</script>

<style></style>
