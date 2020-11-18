<template>
  <div class="body">
    <div class="wx-index">
      <div class="wx-index-search">
        <div class="icon">
          <img src="./image/search.png" class="search-icon" />
        </div>
        <input v-model="search" placeholder="口腔溃疡" />
      </div>
    </div>
    <div class="wx-body">
       <dxScroll class="wx-body" ref="scroll">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="wx-tab">
          <div class="wx-tab-item">
            <div class="wx-tab-img"><img src="./image/1.png" alt="" /></div>
            <div class="wx-tab-text">问医生</div>
            <div class="wx-tab-descrpation">按科室找医生</div>
          </div>
          <div class="wx-tab-line"></div>
          <div class="wx-tab-item" @click="goto('wyspage')">
            <div class="wx-tab-img"><img src="./image/2.png" alt="" /></div>
            <div class="wx-tab-text">1元问</div>
            <div class="wx-tab-descrpation">三甲名医</div>
          </div>
          <div class="wx-tab-line"></div>
          <div class="wx-tab-item" @click="goto('mechine')">
            <div class="wx-tab-img"><img src="./image/3.png" alt="" /></div>
            <div class="wx-tab-text">去开药</div>
            <div class="wx-tab-descrpation">快递送货上门</div>
          </div>
        </div>
        <div class="wx-nav">
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/4.png" alt="" /></div>
            <div class="wx-nav-text" @click="goto('phonecall')">电话急诊</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/5.png" alt="" /></div>
            <div class="wx-nav-text">医生年卡</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/6.png" alt="" /></div>
            <div class="wx-nav-text">儿童会员</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/7.png" alt="" /></div>
            <div class="wx-nav-text">医师讲堂</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/8.png" alt="" /></div>
            <div class="wx-nav-text">健康百科</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/9.png" alt="" /></div>
            <div class="wx-nav-text">查疾病</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/10.png" alt="" /></div>
            <div class="wx-nav-text">每日辟谣</div>
          </div>
          <div class="wx-nav-item">
            <div class="wx-nav-icon"><img src="./image/11.png" alt="" /></div>
            <div class="wx-nav-text">孕育管家</div>
          </div>
        </div>
        <div class="wx-pormise-tab">
          <div class="wx-promise-left">
            <div class="wx-promise-left-title">
              丁香医生承诺 专业安全
            </div>
            <div class="wx-promise-left-desc">
              <div>三甲主治医生</div>
              <div>专家团队双重审核</div>
              <div>6项监管措施</div>
            </div>
          </div>
          <div class="wx-promise-right">
            <van-icon name="arrow" color="#C6B7A2" />
          </div>
        </div>
        <div class="wx-swpier">
          <dx-swiper></dx-swiper>
        </div>
        <div class="wx-content-items">
          <dx-advise :item="item" :title="'今日推荐'">
            <div slot="timestamp" class="nowtime">
              <div class="twocircle">
                <div></div>
                <div></div>
              </div>
              <div class="timestamp">
                8月26日
              </div>
            </div>
          </dx-advise>
          <dx-advise :item="items" :title="'8月24日'"> </dx-advise>
        </div>
      </van-pull-refresh>
       </dxScroll>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
import Swiper from "../../components/dxElSwiper";
import dxAdvise from "../../components/dxAdvise";
export default {
  name: "IndexPage",
  data() {
    return {
      isLoading: true,
      search: "",
      item: [
        {
          name: "冷知识",
          desc: "关于手术室的6个冷门知识，看这里就够了",
          pic: require("./image/text4.png"),
          textColor: "rgba(127,127,127)",
          descColor: "#000"
        }
      ],
      items: [
        {
          name: "每日一讲",
          desc: "年级轻轻就顶着个眼袋？",
          pic: require("./image/text5.png"),
          textColor: "rgba(127,127,127)",
          descColor: "#000"
        }
      ]
    };
  },
  components: {
    "van-icon": Icon,
    "dx-swiper": Swiper,
    "dx-advise": dxAdvise
  },
  methods: {
    goto(path){
      this.$router.push('/'+path)
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  }
};
</script>

<style lang="scss" scoped>
.body {
  padding: 0 12px;
}
.wx-index {
  font-size: 16px;
  padding: 10px 10px;
  z-index: 200;
  left:0;
  right: 0;
  position: fixed;
  top: 0;
  background: #fff;
  .wx-index-search {
    display: flex;
    height: 40px;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0px 5px 5px #f5f5f5;
    -moz-box-shadow: 0px 5px 5px #f5f5f5;
    box-shadow: 0px 5px 5px #f5f5f5;
    border-radius: 20px;
    .icon {
      width: 30px;
      margin: 5px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      .search-icon {
        width: 20px;
        height: 20px;
        color: #e4e4e4;
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
      padding: 10px 0 10px 0;
      overflow: hidden;
    }
  }
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #e2e2e2;
  font-size: 16px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #e2e2e2;
  font-size: 16px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #e2e2e2;
  font-size: 16px;
}
.wx-body {
 position: fixed;
    left: 0;
    top: 0;
      padding: 0 10px;
    margin-bottom: 60px;
    top: 60px;
    right: 0;
    bottom: 60px;
}
.wx-tab {
  display: flex;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
 // padding:0 20px;
  .wx-tab-line {
    border: 0.3px solid #f2f2f2;
    content: "";
    height: 50px;
  }
  .wx-tab-item {
    width: 33%;
   text-align: center;
    .wx-tab-img {
      img {
        width: 48px;
        height: 48px;
      }
    }
    .wx-tab-text {
      font-weight: bold;
      margin-top: 4px;
      font-size: 15px;
    }

    .wx-tab-descrpation {
      margin-top: 4px;
      font-size: 12px;
      color: #999999;
    }
  }
  
}
.wx-nav {
  display: flex;
  margin-top: 32px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .wx-nav-item {
    width: 25%;
    text-align: center;
    margin-bottom: 24px;
    .wx-nav-icon {
      img {
        width: 24px;
        height: 24px;
      }
    }
    .wx-nav-text {
      color: #9a9393;
      font-size: 12px;
    }
  }
}
.wx-pormise-tab {
  background: #fafafa;
  align-items: center;
  border-radius: 6px;
  padding: 12px 12px;
  display: flex;
  .wx-promise-left-title {
    font-size: 14px;
    font-weight: bold;
    color: #b18b4c;
  }
  .wx-promise-left-desc {
    margin-top: 5px;
    font-size: 12px;
    display: flex;
    color: #b4a483;
    div {
      margin-right: 10px;
    }
  }
  .wx-promise-right {
    margin-left: auto;
  }
}
.wx-swpier {
  margin-top: 16px;
}
.wx-content-items {
  margin-top: 16px;
}
.nowtime {
  margin-left: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .twocircle {
    height: 10px;
    margin-right: 6px;
    content: "";
    display: flex;
    div:first-child {
      content: "";
      width: 10px;
      height: 10px;
      background: #00d99c;
      border-radius: 20px;
      z-index: 100;
    }
    div:last-child {
      content: "";
      width: 10px;
      height: 10px;
      margin-left: -3px;
      background: #f0bc8d;
      border-radius: 20px;
    }
  }
  .timestamp {
    color: #999999;
    font-size: 14px;
  }
}
</style>
