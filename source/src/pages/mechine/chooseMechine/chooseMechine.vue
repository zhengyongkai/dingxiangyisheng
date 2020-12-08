<template>
  <transition name="slide" mode="out-in">
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
      <dxScroll class="km-body" ref="scroll">
        <div style="min-height:80vh">
          <div class="km-renzheng">
            <div>安心购 保障用品</div>
            <div>国药堂大药房发货 药监认证</div>
            <div><AfIcon class="iconfont icon-right "></AfIcon></div>
          </div>
          <div class="km-mechine-items">
            <div class="km-mechine-content" v-for="(i, v) in goodList" :key="v">
              <div class="shop-item">
                <div class="img">
                  <img src="./img/img1.png" alt="" />
                </div>
                <div class="shop-info">
                  <div class="mechine-type-name">
                    <div class="mechine-type">{{ i.type }}</div>
                    <div class="mechine-name">{{ i.name }}</div>
                  </div>
                  <div class="mechine-specs">
                    {{ i.specs }}
                  </div>
                  <div class="mechine-info">
                    {{ i.info }}
                  </div>
                  <div class="mechine-price">
                    <div>{{ i.price }}</div>
                    <div
                      class="choose-price"
                      @click="chooseMechine(v, i)"
                      v-if="!list[v] && i.stock != 0"
                    >
                      选择该药
                    </div>
                    <div
                      class="choose-price-understock"
                      v-else-if="i.stock == 0"
                    >
                      暂无库存
                    </div>
                    <div v-else class="goods-num">
                      <div @click="goodsDecrease(v, i)">-</div>
                      <div>{{ list[v].num || 0 }}</div>
                      <div @click="goodsAdd(v, i)">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dxScroll>
      <cartBottom v-bind:showBottom.sync='showBottom'></cartBottom>
    </div>
  </transition>
</template>
<script>
import cartBottom from '../components/cart_Bottom.vue'
export default {
  name: "HelloWorld",
  watch: {},
  components:{
    cartBottom:cartBottom
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      search: "坐疮",
      isLoading: false,
      showBottom: false,
     list: {},
      total: 0,
      goodList: [
        {
          type: "处方药",
          name: "迪A 维a酸乳膏",
          specs: "0.025% ✖ 30 g/支",
          info:
            " 常用语治疗座舱等疾病，常用语治疗座舱等疾病，常用语治疗座舱等疾病常用语治疗座舱等疾病",
          price: "￥19.50",
          stock: 5
        },
        {
          type: "处方药",
          name: "迪A 维a酸乳膏",
          specs: "0.025% ✖ 30 g/支",
          info:
            " 常用语治疗座舱等疾病，常用语治疗座舱等疾病，常用语治疗座舱等疾病常用语治疗座舱等疾病",
          price: "￥19.50",
          stock: 20
        },
        {
          type: "处方药",
          name: "迪A 维a酸乳膏",
          specs: "0.025% ✖ 30 g/支",
          info:
            " 常用语治疗座舱等疾病，常用语治疗座舱等疾病，常用语治疗座舱等疾病常用语治疗座舱等疾病",
          price: "￥19.50",
          stock: 2
        },
        {
          type: "处方药",
          name: "迪A 维a酸乳膏",
          specs: "0.025% ✖ 30 g/支",
          info:
            " 常用语治疗座舱等疾病，常用语治疗座舱等疾病，常用语治疗座舱等疾病常用语治疗座舱等疾病",
          price: "￥19.50",
          stock: 0
        },
        {
          type: "处方药",
          name: "迪A 维a酸乳膏",
          specs: "0.025% ✖ 30 g/支",
          info:
            " 常用语治疗座舱等疾病，常用语治疗座舱等疾病，常用语治疗座舱等疾病常用语治疗座舱等疾病",
          price: "￥19.50",
          stock: 0
        }
      ]
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
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
}
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
  position: fixed;
  top: 125px;
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
    .km-mechine-content:after {
      content: "";
      height: 8px;
      display: block;
      width: 100%;
      border-bottom: 1px solid #eee;
    }
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
          color: #ee7474;
          margin-right: 10px;
        }
        .mechine-name {
          // font-size: 14px;
          font-weight: 550;
        }
      }
      .mechine-specs {
        font-size: 14px;
        margin: 8px 0;
      }
      .mechine-info {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        color: #646566;
        letter-spacing: 1px;
        margin-bottom: 20px;
      }
      .mechine-price {
        display: flex;
        height: 14px;
        align-items: center;
        div:first-child {
          // font-size: 14px;
          color: #1abb92;
        }
        .choose-price {
          font-size: 14px;
          margin-left: auto;
          box-sizing: border-box;
          background: #1abb92;
          color: #fff;
          padding: 5px 10px;
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
            box-sizing: border-box;
            border-radius: 50px;
            font-weight: 600;
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
            box-sizing: border-box;
            border-radius: 50px;
            font-weight: 600;
            color: #fff;
            font-size: 18px;
            line-height: 20px;
            text-align: center;
            background: #01c691;
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
