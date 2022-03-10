<template>
  <div>
    
    <Navbar/>
     <nuxt  />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/nav/navbar.vue";
import Footer from "~/components/footer/index.vue";
export default {
 components: { Navbar, Footer },
}
</script>

<style>

</style>
