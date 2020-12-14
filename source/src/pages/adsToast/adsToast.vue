<template>
  <div class="adv-close">
    <div class="adv-cover"></div>
    <transition name="slide-fade">
      <div class="adv-body" v-show="show">
        <div>
          <div class="adv-top">
            <div class="adv-brand">
              丁香园
            </div>
            <div class="adv-person">新人有礼</div>
          </div>
          <div class="adv-bottom" style="background:#F25542">
            <div style=""></div>
          </div>
        </div>
        <div class="ling">
          领
        </div>
        <div>
          <afIcon
            class="iconfont icon-advclose"
            size="sIcon"
            @click="unshowAdv"
          />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "adsToast",
  data() {
    return {
      show: false
    };
  },
  props: ["showAdv"],
  components: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    unshowAdv() {
      // this.showBottom = !this.showBottom
      this.show = false;
      setTimeout(() => {
        this.$emit("update:showAdv", !this.showAdv);
      }, 500);
    }
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
    width: 300px;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;

    > div:first-child {
      background-color: #f45e4d;
      box-sizing: border-box;
      border-radius: 16px;
      height: 380px;
      display: flex;
      flex-direction: column; 
      .adv-top {
        padding: 10px 0;
        height: 60%;
        border: 2px solid #da4b3a;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom-left-radius: 160px 50px;
        border-bottom-right-radius: 160px 50px;
        overflow: hidden;
        .adv-brand {
          width: 80px;
          line-height: 80px;
          border-radius: 50%;
          height: 80px;
          font-weight: 550;
          font-size: 18px;
          background-color: #fff;
          color: #cd1e69;
          margin: 0 auto;
          text-align: center;
        }
        .adv-person {
          margin-top: 10px;
          text-align: center;
          letter-spacing: 2px;
          color: #fff;
        }
      }
      .adv-bottom {
        flex: 1;
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
     .ling {
        position: absolute;
        top: 48%;
        background: #ebcd99;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        left: 50%;
        margin-left: -40px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
      }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: scale(0.5);
  opacity: 0;
}
</style>
