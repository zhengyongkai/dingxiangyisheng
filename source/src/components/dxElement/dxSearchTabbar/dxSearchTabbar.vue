<template>
  <div class="dx-header">
    <div class="bar">
      <div class="bar-left">
        <van-icon name="arrow-left" @click="onBack"/>
      </div>
      <div class="wx-index-search">
        <div class="icon">
          <i class="iconfont icon-search"></i>
        </div>
        <input v-model="search" placeholder="症状、医生、科室、医院、疾病" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dxSearchTabbar",
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
  z-index: 999;
}

.bar {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 46px;
  line-height: 1.5;
  text-align: center;
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  .bar-left {
    left: 0;
  }
  .bar-left {
  }
  .van-icon {
    color: #1989fa;
    min-width: 1em;
    margin-right: 4px;
    font-size: 16px;
  }
  
  .bar-left,
  .bar-right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
    cursor: pointer;
  }
}
.bar:after {
  border-bottom-width: 1px;
}
.wx-index-search {
  display: flex;
  position: absolute;
  height: 35px;
  border: 1px solid #eaeaea;
  left: 48px;
  right: 12px;
  border-radius: 20px;
  .icon {
    width: 30px;
    margin: 0 5px 0 5px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    .iconfont {

      font-size: 16px;
      color: #bebebe;
    }
  }
  input {
    flex: 1;
    width: 100%;
    border: 0;
    outline: none; // 去除选中状态边框
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    background-color: transparent;
    cursor: text;
    margin: 0em;
    padding: 5px 0 5px 0;
    overflow: hidden;
  }
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 14px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 14px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 14px;
}
</style>
