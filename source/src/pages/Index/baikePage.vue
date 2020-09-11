<template>
  <div class="body">
    <div class="wx-index">
      <div class="wx-index-search">
        <div class="icon">
          <img src="./image/search.png" class="search-icon" />
        </div>
        <input v-model="search" placeholder="搜索疾病/症状/医生" />
      </div>
    </div>
    <div class="wx-body">
      <div class="wx-body-item">
        <div class="wx-body-items" v-for="(item, key) in itemList" :key="key">
          <div class="wx-body-img"><img :src="item.img" /></div>
          <div class="wx-body-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <!-- <div class="wx-noticebar">
      <div class="wx-notice-items">
         <img src="./image/21.png" />
        <div class="wx-not">口腔溃疡是缺少维生素C？</div>
      </div>
      <div class="wx-notice-items">
        <img src="./image/21.png" />
        <div>口腔溃疡是缺少维生素D？</div>
      </div>
      <div class="wx-notice-items">
        <img src="./image/21.png" />口腔溃疡是缺少维生素E？
      </div> 
    </div> -->
    <div class="wx-tab">
      <div class="wx-tab-item">
        <div class="wx-tab-items">
          <img src="./image/23.jpg" alt="" />
        </div>
        <div class="wx-tab-items">
          <img src="./image/24.jpg" alt="" />
        </div>
        <div class="wx-tab-items">
          <img src="./image/25.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      search: "",
      itemList: [
        {
          img: require("./image/12.png"),
          text: "查疾病"
        },
        {
          img: require("./image/13.png"),
          text: "查药品"
        },
        {
          img: require("./image/14.png"),
          text: "查医院"
        },
        {
          img: require("./image/15.png"),
          text: "查疫苗"
        },
        {
          img: require("./image/16.png"),
          text: "手术检查"
        },
        {
          img: require("./image/18.png"),
          text: "急救指南"
        },
        {
          img: require("./image/19.png"),
          text: "夏季指南"
        },
        {
          img: require("./image/20.png"),
          text: "科普视频"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  padding: 0 12px;
}
.wx-index {
  font-size: 16px;
  padding: 10px 0;
  z-index: 200;
  position: fixed;
  left: 10px;
  right: 10px;
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
  position: relative;
  margin-bottom: 60px;
  top: 60px;
  .wx-body-item {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    .wx-body-items {
      width: 25%;
      text-align: center;
      margin-bottom: 30px;
      justify-content: center;
      img {
        width: 24px;
        height: 24px;
      }
      .wx-body-img {
        margin-bottom: 4px;
      }
      .wx-body-text {
        font-weight: 500;
        font-size: 12px;
      }
    }
  }
}
.wx-noticebar {
  overflow: hidden;
  height: 30px;
  background: #eee;
  padding: 4px 8px;
  line-height: 30px;
  border-radius: 20px;
  .wx-notice-items {
    display: flex;
    align-items: center;
    height: 40px;
    img {
      width: 80px;
      margin-right: 5px;
    }
  }
}
.wx-tab {
  .wx-tab-item {
    display: flex;
    .wx-tab-items {
      width: 33.333333334%;
      padding: 5px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
