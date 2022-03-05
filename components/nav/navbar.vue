<template>
  <div class="flex items-center justify-between  w-full bg-black-color h-20 px-52">
    <Logo />
    <navigation/>
    <buttonn/>
  </div>
</template>
<script>
import Logo from "~/components/nav/Logo.vue";
import Buttonn from './buttonn.vue';
import Navigation from './navigation.vue';
export default {
  name: "Navbar",
  components: { Logo, Navigation, Buttonn },
};
</script>

<style scoped>

</style>
