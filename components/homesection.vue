<template>
  <div class="h-4/5 w-full bg-black-color flex items-center   justify-between px-52">
    <div class="flex items-start justify-center h-1/4 flex-col">
      <h2
        class="text-3xl font-bold  text-white tracking-wider"
            >{{title}}</h2>
        <h2
        class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green"
            >{{user}}</h2>
             <h2
        class="text-5xl font-bold text-white tracking-wider"
            >{{subtitle}}</h2>
    </div>
    <div>
      <nuxt-img src="/assets/image.webp" />
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Hello !,",
            subtitle:"A full-stack Developer",
            user: "I'm Issam Elbouhati",
        }
    }
}
</script>


