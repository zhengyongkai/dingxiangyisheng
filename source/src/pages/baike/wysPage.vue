<template>
  <div class="wys-page">
    <div class="wys-title">
      <dxHeader :titleName="'问医生'"></dxHeader>
    </div>
    <div class="wys-body">
      <div class="wys-search">
        <div class="wx-index-search">
          <div class="icon">
            <img src="../Index/image/search.png" class="search-icon" />
          </div>
          <input v-model="search" placeholder="症状、医生、科室、医院、疾病" />
        </div>
      </div>
      <div class="wx-pormise-tab">
        <div class="wx-promise-left">
          <div class="wx-promise-left-title">
            放心问 专业安全
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
      <div class="wys-top-tabs">
        <div class="wys-top-tab">
          <div class="wys-top-tab-img">
            <img src="../Index/image/2.png" alt="" />
          </div>
          <div>
            <div class="wys-top-tab-title">
              一元问医生
            </div>
            <div class="wys-top-tab-text">
              名额有限 先到先得
            </div>
          </div>
        </div>
        <div class="wys-top-tab">
          <div class="wys-top-tab-img">
            <img src="../Index/image/2.png" alt="" />
          </div>
          <div>
            <div class="wys-top-tab-title">
              快速问医生
            </div>
            <div class="wys-top-tab-text">
              无需选科 自动匹配
            </div>
          </div>
        </div>
      </div>
      <div class="wx-tk">
        <div class="wx-tk-title">
          常见科室
        </div>
        <div class="wx-tk-tabs">
          <div class="wx-tk-tab" v-for="(i, v) in keList" :key="v">
            <div><img :src="i.img" alt="" /></div>
            <div>{{ i.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keList: [
        {
          name: "皮肤科",
          img: require("@/assets/wysImg/pfk.png"),
          path: "/pfk"
        },
        {
          name: "儿科",
          img: require("@/assets/wysImg/ek.png"),
          path: "/ek"
        },
        {
          name: "妇产科",
          img: require("@/assets/wysImg/fck.png"),
          path: "/fck"
        },
        {
          name: "泌尿科",
          img: require("@/assets/wysImg/mnk.png"),
          path: "/mnk"
        },
        {
          name: "骨科",
          img: require("@/assets/wysImg/gk.png"),
          path: "/gk"
        },
        {
          name: "消化内科",
          img: require("@/assets/wysImg/xhk.png"),
          path: "/xhnk"
        },
        {
          name: "性病科",
          img: require("@/assets/wysImg/grk.png"),
          path: "/xbk"
        },
        {
          name: "口腔科",
          img: require("@/assets/wysImg/kqk.png"),
          path: "/kqk"
        },
        {
          name: "耳鼻咽喉科",
          img: require("@/assets/wysImg/ebyhk.png"),
          path: "/ebhyk"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.wys-body {
  position: relative;
  padding: 0 12px;
  top: 60px;
}
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
.wx-pormise-tab {
  margin-top: 16px;
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
.wys-top-tabs {
  margin-top: 16px;
  display: flex;
  .wys-top-tab {
    width: 50%;
    display: flex;
    background-color: #fafafa;
    align-items: center;
    padding: 10px 10px;
    // box-sizing: border-box;
    .wys-top-tab-img {
      img {
        border-radius: 20px;
        width: 40px;
      }
      margin-right: 10px;
    }
    .wys-top-tab-title {
      font-weight: 600;
    }
    .wys-top-tab-text {
      font-size: 11px;
      margin-top: 2px;
    }
    &:first-child {
      margin-right: 10px;
    }
  }
}
.wx-tk {
  margin-top: 16px;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: #656565;
  letter-spacing: 1px;
  .wx-tk-tabs {
    margin-top: 16px;
    display: grid;
    grid: 100px 100px 100px /1fr 1fr 1fr;
    grid-gap: 10px;
    box-sizing: border-box;
    place-items: center;
    justify-items: center;
    .wx-tk-tab {
      text-align: center;
      width: 100%;
      height: 100%;
      position: relative;
      padding: 25px;
      box-sizing: border-box;
      font-size: 12px;
      background: #fafafa;
      img {
        width: 30px;
      }
    }
  }
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}
</style>
