<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    const obj = reactive({
      msg: "HelloWord",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
