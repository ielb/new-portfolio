<template>
  <div class="flex flex-wrap">
    <div class="text-center">
      <nuxt-img
        preload
        :title="stack.title"
        class="h-20 w-20 stack"
        height="40"
        width="40"
        :src="stack.image"
        :alt="stack.title"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stack: {
      type: Object,
      required: true,
    },
  },
}
</script>
