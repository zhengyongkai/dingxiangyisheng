<template>
  <div>
    <van-pull-refresh @refresh="onRefresh" v-model="isLoading">
      <div slot="loading">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "dxPullFresh",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      search: "坐疮",
      isLoading:  false
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  watch: {
    loading(val) {
      this.isLoading = val; //新增isVisible的watch，监听变更并同步到IsShowPage上
    }
  },
  methods: {
    onRefresh() {
      this.$emit("refresh");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spinner {
  margin: 0 auto;
  width: 30px;
  height: 15px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #67cf22;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
