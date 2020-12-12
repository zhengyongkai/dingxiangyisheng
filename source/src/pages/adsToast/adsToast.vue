<template>
  <div class="adv-close">
    <div class="adv-cover"></div>
    <div class="adv-body">
      <div>
        <div
          style="
         "
        >
          <div class="adv-brand">
            唯品会
          </div>
          <!-- <div class="" style="height:100px">22</div> -->
        </div>
        <!-- <div style="background:#F25542"><div style="">xxx</div></div> -->
      </div>
      <div>
        <afIcon class="iconfont icon-advclose" size="sIcon" @click="unshowAdv"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adsToast",
  data() {
    return {};
  },
  props: ['showAdv'],
  components: {},
  created() {},
  mounted() {},
  methods: {
    unshowAdv() {
      // this.showBottom = !this.showBottom
     this.$emit('update:showAdv',!this.showAdv)
  },
  }
};
</script>
<style lang="scss" scoped>
.adv-close {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  bottom: 0;
  right: 0;
  .adv-cover {
    position: absolute;
    background: #000;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .adv-body {
    position: absolute;
    top: 140px;
    width: 260px;
    left: 50%;
    margin-left: -130px;
    overflow: hidden;

    > div:first-child {
      padding: 10px 0;
      background-color: #f45e4d;
      box-sizing: border-box;
      border-radius: 8px;
      height: 340px;
      .adv-brand {
        width: 60px;
        line-height: 60px;
        border-radius: 50%;
        height: 60px;
        background-color: #fff;
        color: #cd1e69;
        margin: 0 auto;
        text-align: center;
      }
    }
    > div:last-child {
      margin-top: 20px;
      text-align: center;
      i {
        font-size: 32px !important;
        color: #fff;
      }
    }
  }
}
</style>
