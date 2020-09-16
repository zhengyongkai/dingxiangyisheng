<template>
  <div class="dx-header">
    <div><AfIcon
            class="iconfont iconback"
            size= '18'
            @click="edit(scope.row)"
          ></AfIcon></div>
    <div style="flex:1;text-align:center">问医生</div>

  <AfIcon
            class="iconfont iconfenxiang"
            size= '18'
            @click="edit(scope.row)"
          ></AfIcon>
  </div>
</template>

<script>
export default {
  name: "dxHeader",
  props: {
    title: String,
    desc: String
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dx-header {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 12px;
}
</style>
