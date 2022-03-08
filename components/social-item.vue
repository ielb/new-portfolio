<template>
  <div class="my-5 transform transition duration-300 hover:scale-110">
    <a :href="item.url">
      <img  :src="item.image" height="30" width="30" :alt="item.title" />
    </a>
  </div>
</template>

<script>
export default {
  props:{
    item: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style>

</style>
