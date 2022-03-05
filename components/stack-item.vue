<template>
  <div class="flex flex-wrap">
    <div class="w-full text-center">
    <div ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()" class="cursor-pointer">
       <nuxt-img :title="title"  class="h-10 w-10" :src="img" />
    </div>
      <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}">
        <div>
          <div class=" bg-white text-black-color opacity-75 font-semibold p-2 rounded-t-lg">
            {{title}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { createPopper } from "@popperjs/core";

export default {
  name: "right-indigo-tooltip",
  props:{
    title: {
      type: String,
      default: "Vue js"
    },
    img:{
      type: String,
      default: "/stack/vue-js.svg"
    }
  },

  data() {
    return {
      tooltipShow: false
    }
  },
  methods: {
    toggleTooltip: function(){
      if(this.tooltipShow){
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "top"
        });
      }
    }
  }
}
</script>
