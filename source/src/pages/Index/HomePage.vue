<template>
   <div class="body">
      <dxScroll class="wx-body" ref="scroll">
      <div>
        <div class="wx-tabbar">
          <div class="wx-tabbar-notice">
            <div class="wx-tabbar-icon">
              <img src="./image/26.png" alt="" />
            </div>
          </div>
          <div class="wx-login">
            <div class="wx-unlogin-text"><u>注册/</u><u>登录</u></div>
            <div class="wx-unlogin-icon">
              <img src="./image/28.png" alt="" />
            </div>
          </div>
          <div class="wx-card">
            <div class="wx-card-item" v-for="(i, v) in carditems" :key="v">
              <div class="wx-card-num">{{ i.num }}</div>
              <div class="wx-card-text">{{ i.text }}</div>
            </div>
          </div>
          <div class="wx-vip">
            <div class="wx-vip-content">
              <div class="vip-img"><img src="./image/vip.png" alt="" /></div>
              <div class="vip-text">丁香医生 优选医生免费问</div>
              <div class="vip-button">立即开通</div>
            </div>
          </div>
        </div>
        <div class="wx-tab-items">
          <div class="wx-tab-item" v-for="(i, v) in tabitems" :key="v">
            <div class="wx-tab-img"><img :src="i.img" alt="" /></div>
            <div class="wx-tab-text">{{ i.text }}</div>
          </div>
        </div>
        <div class="wx-cell">
          <div class="wx-cell-item">
            <dx-cell :desc="'兑换礼品和优惠券'">
              <div slot="title" class="cell-title">
                <div class="cell-title-text">丁香豆</div>
                <div class="cell-title-tag">免费送礼</div>
              </div>
            </dx-cell>
            <dx-cell :title="'私人医生'"> </dx-cell>
            <dx-cell :title="'患者信息'"> </dx-cell>
            <dx-cell :title="'设置'"> </dx-cell>
            <dx-cell :title="'联系客服'"> </dx-cell>
          </div>
        </div>
      </div>
    </dxScroll>
   </div>
</template>

<script>
import dxCell from "@/components/dxCell";
export default {
  name: "HelloWorld",
  data() {
    return {
      carditems: [
        { text: "关注医生", num: "0" },
        { text: "医生卡", num: "0" },
        { text: "优惠券", num: "0" },
        { text: "收藏医生", num: "0" }
      ],
      tabitems: [
        { text: "我的问诊", img: require("./image/27.png") },
        { text: "我的处方", img: require("./image/22.png") },
        { text: "药品订单", img: require("./image/23.png") },
        { text: "医师讲堂", img: require("./image/7.png") },
        { text: "成长测评", img: require("./image/24.png") }
      ]
    };
  },
  components: {
    [dxCell.name]: dxCell
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
overflow: hidden;
}
.wx-body {
  position: absolute;
  overflow: hidden;
  bottom: 60px;
  left: 0;
  right: 0;
  top: 0;
}

.wx-tabbar {
  background-image: linear-gradient(to bottom, #fff, #f6f6f6);
  border-bottom-left-radius: 30px;
  overflow: hidden;
  border-bottom-right-radius: 30px;

  // background-image: linear-gradient(to bottom, #edebeb, transparent);
  padding: 0 12px;
  .wx-tabbar-notice {
    height: 46px;
    line-height: 46px;
    .wx-tabbar-icon {
      line-height: 46px;
      text-align: right;
      img {
        width: 20px;
        vertical-align: middle;
      }
    }
  }
  .wx-login {
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    .wx-unlogin-text {
      font-weight: 530;
      font-size: 28px;
      text-decoration: #000;
      letter-spacing: 3px;
      color: #4c4a4a;
    }
    .wx-unlogin-icon {
      margin-left: auto;
      img {
      }
    }
  }
  .wx-card {
    margin-top: 5px;
    display: flex;
    align-items: center;
    height: 80px;
    .wx-card-item {
      width: 25%;
      text-align: center;
      .wx-card-num {
        height: 20px;
        line-height: 20px;
        font-size: 18px;
      }
      .wx-card-text {
        font-size: 12px;
        color: #b7b3b3;
      }
    }
  }
  .wx-vip {
    margin-top: 5px;
    .wx-vip-content {
      display: flex;
      align-items: center;
      background-image: linear-gradient(to right, #ecd19c, #e4c17d);
      height: 40px;
      padding: 2px 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      .vip-img {
        line-height: 20px;
        height: 20px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .vip-text {
        font-size: 14px;
        margin-left: 10px;
        color: #fff;
        letter-spacing: 1px;
      }
      .vip-button {
        margin-left: auto;
        font-size: 12px;
        color: #ba994a;
        background: #fffaec;
        padding: 6px 10px;
        border-radius: 16px;
      }
    }
  }
}
.wx-tab-items {
  margin-top: 36px;
  display: flex;
  align-items: center;
  .wx-tab-item {
    width: 25%;
    text-align: center;
  }
  .wx-tab-img {
    margin-bottom: 4px;
    img {
      width: 24px;
    }
  }
  .wx-tab-text {
    font-size: 12px;
  }
}

.wx-cell {
  position: relative;
  margin-top: 40px;
}
.wx-cell-item::before {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  right: 12px;
  top: 0;
  left: 12px;
  border-bottom: 1px solid #c9cbce;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.cell-title {
  display: flex;
  align-items: center;
  .cell-title-text {
    margin-bottom: 4px;
    letter-spacing: 1px;
    font-size: 16px;
  }
  .cell-title-tag {
    margin-left: 8px;
    font-size: 12px;
    color: #fff;
    background: #0bbd89;
    line-height: 18px;
    width: 60px;
    font-weight: lighter;
    text-align: center;
    height: 18px;
    border-radius: 2px;
  }
}
</style>
