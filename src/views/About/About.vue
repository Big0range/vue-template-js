<template>
  <div class="about_wrap">
    {{ msg }}
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  name: "About",
  setup() {
    const obj = reactive({
      msg: "about",
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
