<template>
  <div
    class="py-20 md:mt-0 bg-black-color flex items-center lg:flex-row flex-col-reverse justify-center 2xl:h-screen lg:justify-between md:px-10 2xl:px-52"
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
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-9bded.appspot.com/o/assets%2Fhome.svg?alt=media&token=aa422ab2-4b34-4609-80d2-8e730d4d627f"
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
