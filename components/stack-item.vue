<template>
  <div class="flex flex-wrap">
    <div class="w-full text-center">
    <div ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()" class="cursor-pointer">
       <img :title="stack.title" class="h-20 w-20"  height="40" width="40" :src="stack.image" :alt="stack.title" />
    </div>
      <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}">
        <div>
          <div class=" bg-white text-black-color opacity-75 font-semibold p-2 rounded-t-lg">
            {{stack.title}}
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
    stack:{
      type: Object,
      required: true,
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
