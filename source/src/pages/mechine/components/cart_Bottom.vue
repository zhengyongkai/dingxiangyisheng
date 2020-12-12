<template>
  <div>
    <div class="km-shop-bottom">
      <div class="icon" @click="hiddenBottom">
        <afIcon class="iconfont icon-cart"></afIcon>
        <div class="spot">{{ total }}</div>
      </div>
      <div class="text">
        <div>已选择{{ Object.keys(list).length }}件药品</div>
        <div>共{{ total }}件</div>
      </div>
      <div class="next">
        下一步
      </div>
    </div>
    <transition name="plus-icon">
      <div class="shopCart" v-if="showBottom">
        <div class="dx-overlay" @click="$emit('update:showBottom',false)"></div>
        <div
          class="shopCartContent"
          v-if="showBottom"
          @click.stop="handleCartShow"
        >
          <div class="content-top">
            <div>药品清单</div>
            <div @click="hiddenBottom">
              <!-- <van-icon name="cross" /> -->
              <afIcon class="iconfont icon-close"></afIcon>
            </div>
          </div>
          <div class="content">
            <div class="km-mechine-items" v-if="JSON.stringify(list) != '{}'">
              <div class="km-mechine-content" v-for="(i, v) in list" :key="v">
                <div class="shop-item">
                  <div class="img">
                    <img src="../chooseMechine/img/img1.png" alt="" />
                  </div>
                  <div class="shop-info">
                    <div class="mechine-type-name">
                      <div class="mechine-type">{{ i.info.type }}</div>
                      <div class="mechine-name">{{ i.info.name }}</div>
                      <div class="mechine-name">{{ i.info.name }}</div>
                    </div>
                    <div class="mechine-specs">
                      {{ i.info.specs }}
                    </div>
                    <div class="mechine-info">
                      {{ i.info.info }}
                    </div>
                    <div class="mechine-price">
                      <div>{{ i.info.price }}</div>
                      <div class="goods-num">
                        <div @click="goodsListDecrease(v, i)">-</div>
                        <div>{{ i.num || 0 }}</div>
                        <div @click="goodsListAdd(v, i)">+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="empty" v-else>
              <div><i class="iconfont icon-empty"></i></div>
              <div>暂无物品</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "cartBottom",
  watch: {},
  props:{
    showBottom:{
      type:Boolean,
      default:false
    }
  },
  components: {},
  data() {
    return {
      list: {},
      total: 0
    };
  },
  methods: {
    getTotal() {
      let total = 0;
      for (let key in this.list) {
        total += parseInt(this.list[key].num);
      }
      this.total = total;
    },
    hiddenBottom() {
      // this.showBottom = !this.showBottom
     this.$emit('update:showBottom',!this.showBottom)
    },
    handleCartShow() {
       this.$emit('update:showBottom',false)
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
    chooseMechine(index, value) {
      this.$toast("已加入药品清单");
      if (!this.list[index]) {
        this.list[index] = {};
      }
      this.list[index].num = 1;
      this.list[index].info = value;
      console.log(this.list);
      this.getTotal();
      this.$forceUpdate();
    },
    goodsDecrease(v, i) {
      if (this.list[v].num <= 1) {
        delete this.list[v];
      } else {
        this.list[v].num = this.list[v].num - 1;
      }
      this.getTotal();
      this.$forceUpdate();
    },
    goodsAdd(v, i) {
      if (this.list[v].num < i.stock) {
        this.list[v].num = this.list[v].num + 1;
      } else {
        this.$toast("购买达到上限(*^▽^*)");
      }
      this.getTotal();
      this.$forceUpdate();
    },
    goodsListDecrease(v, i) {
      if (i.num <= 1) {
        delete this.list[v];
      } else {
        this.list[v].num = this.list[v].num - 1;
      }
      this.getTotal();
      this.$forceUpdate();
    },
    goodsListAdd(v, i) {
      this.list[v].num = this.list[v].num + 1;
      this.$forceUpdate();
      this.getTotal();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
  top: 0;
  z-index: 201;
  left: 0;
  right: 0;
  bottom: 0;
  .dx-overlay {
    z-index: 100;
    position: absolute;
    animation-duration: 0.2s;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .shopCartContent {
    z-index: 2058;
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
      .empty {
        text-align: center;
        font-size: 12px;
        .iconfont {
          font-size: 64px;
          color: #eee;
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
              font-weight: 530;
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
            height: 20px;
            align-items: center;
            div:first-child {
              // font-size: 14px;
              color: #1abb92;
            }
            .choose-price {
              font-size: 14px;
              margin-left: auto;
              background: #1abb92;
              color: #fff;
              padding: 2px 10px;
              border-radius: 2px;
            }
            .choose-price-understock {
              font-size: 14px;
              margin-left: auto;
              background: #999;
              color: #fff;
              padding: 2px 10px;
              border-radius: 2px;
            }
            .goods-num {
              margin-left: auto;
              display: flex;
              padding: 2px 0;
              div:first-child {
                width: 20px;
                height: 20px;
                border-radius: 50px;
                line-height: 16px;
                font-weight: 600;
                color: #01c691;
                background: #fff;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #01c691;
              }
              div:nth-child(2) {
                line-height: 20px;
                margin: 0 10px;
              }
              div:last-child {
                width: 20px;
                height: 20px;
                border-radius: 50px;
                line-height: 16px;
                font-weight: 600;
                color: #fff;
                text-align: center;
                background: #01c691;
              }
            }
          }
        }
      }
    }
  }
}

// .plus-icon-enter {
//   //此处是动画进入时的css设置，如果有位置移动的话，不要使用position来控制，会没有效果的，使用 transform:translateY 或者 translateX来控制
//   transform: translate3d(0, 100%, 0);
// }
// .plus-icon-leave-avtive {
//   //此处地动画飞出时的设置
//   transform: translate3d(0, 100%, 0);
// }
// .plus-icon-enter-active,
// .plus-icon-leave-active {
//   //此处是过度过程中，一般不用设置
//   //该句的意思是 all表示所有的css变动  在 0.8s内完成  ease-out是一个速度曲线充置
//   transition: all 0.8s ease-out;
// }

.plus-icon-enter-active,
.plus-icon-leave-active {
  transition: all 0.2s;
}
.plus-icon-enter,
.plus-icon-leave-to {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
</style>
