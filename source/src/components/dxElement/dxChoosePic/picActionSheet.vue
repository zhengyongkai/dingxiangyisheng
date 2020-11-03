<!-- 拍照封装  -->
<template>
  <van-action-sheet
    v-model="show.visable"
    :actions="actions"
    @select="onSelect"
    cancel-text="取消"
    close-on-click-action
  />
</template>

<script>
import { takePhoto, takefromgalery } from "@u/android.js";
export default {
  name: "picActionSheet",
  props: ["show"],
  data() {
    return {
      actions: [
        { name: "选取照片", index: 1 },
        { name: "拍照上传", index: 2 },
        { name: "选取相册", index: 3 }
      ]
    };
  },
  methods: {
    onSelect(item) {
      let that = this;
      switch (item.index) {
        case 1:
          this.$emit("change", item);
          break;
        case 2:
          takePhoto(res => {
            this.$emit("fileChangeSuccess", res);
          })
          break;
        case 3:
          takefromgalery(this);
          break;
      }
    },
    onCameraSuccess(item) {
      console.log(item);
      this.$toast(item);
      this.$emit("fileChangeSuccess", item);
    },
    onCameraError(item) {
      console.log(item);
      this.$toast(item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dx-header {
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
