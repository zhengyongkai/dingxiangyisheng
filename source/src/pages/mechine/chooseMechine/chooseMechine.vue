<template>
  <div class="km-page">
    <div>
      <dxHeader :titleName="'在线购药'"></dxHeader>
      <div class="search">
        <div class="wx-index-search">
          <div class="icon">
            <afIcon class="iconfont icon-search icon"></afIcon>
          </div>
          <input v-model="search" placeholder="搜索疾病、症状、医药名" />
        </div>
      </div>
    </div>
    <div class="km-content">
      <dxScroll class="km-body" ref="scroll">
        <dx-pull-fresh :loading="isLoading" @refresh="onRefresh">
          <div>
            <div class="km-renzheng">
              <div>安心购 保障用品</div>
              <div>国药堂大药房发货 药监认证</div>
              <div><AfIcon class="iconfont icon-right "></AfIcon></div>
            </div>
            <div class="km-mechine-items">
              <div class="km-mechine-content" v-for="(i, v) in 5" :key="v">
                <div class="shop-item">
                  <div class="img">
                    <img src="./img/img1.png" alt="" />
                  </div>
                  <div class="shop-info">
                    <div class="mechine-type-name">
                      <div class="mechine-type">处方药</div>
                      <div class="mechine-name">迪A 维a酸乳膏</div>
                    </div>
                    <div class="mechine-specs">
                      0.025% * 30 g/支
                    </div>
                    <div class="mechine-info">
                      常用语治疗座舱等疾病，常用语治疗座舱等疾病，常用语治疗座舱等疾病常用语治疗座舱等疾病
                    </div>
                    <div class="mechine-price">
                      <div>￥19.50</div>
                      <div @click="chooseMechine">选择规格</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dx-pull-fresh>
      </dxScroll>
    </div>
    <div class="km-shop-bottom">
      <div class="icon" @click="hiddenBottom">
        <afIcon class="iconfont icon-cart"></afIcon>
        <div class="spot">1</div>
      </div>
      <div class="text">
        <div>已选择0件药品</div>
        <div>共0件</div>
      </div>
      <div class="next">
        下一步
      </div>
    </div>
    <transition name="plus-icon">
      <div class="shopCart" v-if="showBottom" @click="handleCartShow">
        <div class="shopCartContent" @click.stop>
          <div class="content-top">
            <div>药品清单</div>
            <div @click="hiddenBottom">
              <!-- <van-icon name="cross" /> -->
              <afIcon class="iconfont icon-close"></afIcon>
            </div>
          </div>
          <div class="content">
            <div>sdasdasd</div>
            <div>sdasdasd</div>
            <div>sdasdasd</div>
            <div>sdasdasd</div>
            <div>sdasdasd</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import dxPullFresh from "../../../components/dxElement/dxPullFresh/dxPullFresh.vue";
export default {
  components: { dxPullFresh },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      search: "坐疮",
      isLoading: false,
      showBottom: false
    };
  },
  methods: {
    hiddenBottom() {
      this.showBottom = !this.showBottom;
    },
    handleCartShow() {
      this.showBottom = false;
    },
    goto(path) {
      this.$router.push("/" + path);
    },
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        // Toast("刷新成功");
        this.isLoading = false;
      }, 3000);
    },
    chooseMechine() {
      this.$toast("已加入药品清单");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
  position: fixed;
  top: 58px;
  right: 12px;
  left: 12px;
}
.wx-index-search {
  display: flex;
  height: 40px;
  background: #f3f3f3;
  border-radius: 5px;
  .icon {
    width: 30px;
    margin: 0 5px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #9d9b9b;
    margin-right: 10px;
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
    padding: 10px 0 10px 0;
    overflow: hidden;
  }
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #444;
  font-size: 14px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #444;
  font-size: 14px;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}
.km-body {
  right: 12px;
  left: 12px;
  position: absolute;
  top: 120px;
  overflow: hidden;
  bottom: 50px;
  .km-renzheng {
    display: flex;
    margin-bottom: 10px;
    div:first-child {
      font-size: 14px;
      line-height: 14px;
      color: #d29121;
      margin-right: 20px;
      font-weight: 600;
    }
    div:nth-child(2) {
      font-size: 12px;
      color: #e0903a;
      line-height: 14px;
    }
    div:last-child {
      font-size: 14px;
      color: #eee;
      line-height: 14px;
      margin-left: auto;
    }
  }
  .km-mechine-items {
    padding: 0 0 20px 0;
    .shop-item {
      display: flex;
      padding: 16px 0;
      .img {
        margin-right: 10px;
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
    // .km-mechine-content:after{
    //   content: '';
    //   height: 20px;
    //   width: 20px;
    //   border-bottom: 2px solid red;
    // }
    .km-mechine-content {
      padding: 5px 0 0 0;
    }

    .shop-info {
      .mechine-type-name {
        display: flex;
        align-items: center;
        .mechine-type {
          padding: 2px;
          font-size: 12px;
          box-sizing: border-box;
          background: #ffefef;
          color: #d38e87;
          margin-right: 10px;
        }
        .mechine-name {
          // font-size: 14px;
          font-weight: 550;
        }
      }
      .mechine-specs {
        font-size: 14px;
        margin: 5px 0;
      }
      .mechine-info {
        font-size: 12px;
        color: #bdbdbd;
        margin-bottom: 8px;
      }
      .mechine-price {
        display: flex;
        align-items: center;
        div:first-child {
          // font-size: 14px;
          color: #1abb92;
        }
        div:last-child {
          font-size: 14px;
          margin-left: auto;
          background: #1abb92;
          color: #fff;
          padding: 2px 10px;
          border-radius: 2px;
        }
      }
    }
  }
}
.km-shop-bottom {
  position: fixed;
  width: 100%;
  background: #fff;
  bottom: 0;
  z-index: 250;
  height: 50px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  align-items: center;
  display: flex;
  padding: 0 0 0 12px;
  .icon {
    position: relative;
    background: #389bff;
    width: 40px;
    height: 40px;
    margin-left: 0 auto;
    border-radius: 50%;
    text-align: center;
    .iconfont {
      font-size: 24px !important;
      color: #e3e3e3;
      line-height: 40px;
    }
    .spot {
      position: absolute;
      width: 16px;
      height: 16px;
      top: -2px;
      z-index: 260;
      font-size: 10px;
      right: -5px;
      color: #fff;
      text-align: center;
      border-radius: 50%;
      background: red;
    }
  }
  .text {
    z-index: 250;
    font-size: 16px;
    color: #9d9b9b;
    letter-spacing: 2px;
    margin-left: 10px;
    div:first-child {
      font-size: 14px;
    }
    div:last-child {
      font-size: 12px;
      color: #6d6969;
    }
  }
  .next {
    margin-left: auto;
    height: 100%;
    padding: 0 12px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    width: 60px;
    background: #bfbfbf;
  }
}
.shopCart {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  z-index: 201;
  left: 0;
  right: 0;
  bottom: 0;
  .shopCartContent {
    padding: 12px 0;
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    background: #fff;
    .content-top {
      padding: 0 12px;
      display: flex;
      border-bottom: 1px solid #eee;
      height: 30px;
      div:first-child {
        text-align: center;
        width: 100%;
      }
      div:last-child {
        width: 10px;
        margin-left: auto;
      }
    }
    .content {
      padding: 10px 12px;
      overflow-y: scroll;
      max-height: 50vh;
    }
  }
}
.plus-icon-enter-active {
  transition: all 0.5s;
}
.plus-icon-enter {
  opacity: 0;
}
.plus-icon-leave-active {
  transition: all 1s;
}
.plus-icon-leave-to {
  opacity: 0;
}
</style>
