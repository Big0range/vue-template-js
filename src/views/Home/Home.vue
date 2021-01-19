<template>
  <div class="home_wrap">
    <h1><HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /></h1>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const obj = reactive({
      msg: "home",
      changeMsg(str) {
        this.msg = str;
      }
    });
    return {
      ...toRefs(obj)
    };
  }
};
</script>
