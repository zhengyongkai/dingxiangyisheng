<template>
  <div class="dx-header">
    <van-nav-bar
      :title="titleName"
      :left-arrow="back ? true : false"
      @click-left="onBack"
    >
      <span slot="left" v-if="!back"><slot name="left"></slot></span>
      <span slot="title" v-if="titleName == ''"
        ><slot name="title"></slot
      ></span>
      <span slot="right"><slot name="right"></slot></span>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "dxHeader",
  props: {
    titleName: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dx-header {
  position: fixed;
  width: 100%;
  z-index: 200;
}
</style>
