<template>
  <div
    class="md:h-screen pt-40 md:mt-0 bg-black-color flex items-center lg:flex-row flex-col-reverse justify-center lg:justify-between md:px-52"
  >
    <div class="flex items-start justify-center flex-col">
      <h2 class="text-3xl font-bold text-white tracking-wider">{{ title }}</h2>
      <h2
        class="md:text-8xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green"
      >
        {{ user }}
      </h2>
      <h2 class="md:text-5xl text-3xl font-bold text-white tracking-wider">
        {{ subtitle }}
      </h2>
    </div>
    <div>
      <img
        class=""
        src="https://portfolio151100-dev.s3.amazonaws.com/public/image.webp"
        alt="Home  image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello !,",
      subtitle: "A full-stack Developer",
      user: "I'm Issam Elbouhati",
    };
  },
};
</script>
