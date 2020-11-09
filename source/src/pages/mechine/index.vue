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
        <div>
          <div class="km-renzheng">
            <div>安心购 保障用品</div>
            <div>国药堂大药房发货 药监认证</div>
            <div><AfIcon class="iconfont icon-right "></AfIcon></div>
          </div>
          <div class="km-items">
            <div class="km-title">
              常见症状
            </div>
            <div class="km-medcine-spec-items">
              <div class="km-medcine" v-for="(v, i) in list" :key="i">
                <div><img :src="v.img" /></div>
                <div>痤疮</div>
              </div>
            </div>
          </div>
          <div class="km-adsimg">
            <img src="@/assets/advise/yyw.png" />
          </div>
          <div class="km-items">
            <div class="km-title">
              呼吸系统
            </div>
            <div class="km-tabs">
              <div class="km-tab">上呼吸道感染</div>
              <div class="km-tab">过敏性鼻炎</div>
              <div class="km-tab">支气管哮喘</div>
            </div>
          </div>
          <div class="km-items">
            <div class="km-title">
              皮肤问题
            </div>
            <div class="km-tabs">
              <div class="km-tab">毛囊炎</div>
              <div class="km-tab">银屑病</div>
              <div class="km-tab">皮肤过敏</div>
              <div class="km-tab">脱发</div>
              <div class="km-tab">荨麻疹</div>
              <div class="km-tab">脂溢性皮炎</div>
              <div class="km-tab">手癣</div>
              <div class="km-tab">足癣</div>
              <div class="km-tab">带状疱疹</div>
            </div>
          </div>
           <div class="km-items">
            <div class="km-title">
              消化系统
            </div>
            <div class="km-tabs">
              <div class="km-tab">痔疮</div>
              <div class="km-tab">厌食症</div>
              <div class="km-tab">便血</div>
               <div class="km-tab">便秘</div>
              <div class="km-tab">腹泻</div>
              <div class="km-tab">胃溃疡</div>
            </div>
          </div>
        </div>
      </dxScroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      search:'',
      list: [
        { img: require("./img/1.png") },
        { img: require("./img/2.png") },
        { img: require("./img/3.png") },
        { img: require("./img/4.png") },
        { img: require("./img/5.png") },
        { img: require("./img/6.png") },
        { img: require("./img/7.png") },
        { img: require("./img/8.png") }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.km-content {
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
  position: absolute;
  top: 120px;
  overflow: hidden;
  bottom: 0;
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
  .km-items {
    color: #777;
    margin-bottom: 20px;
    .km-medcine-spec-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      :first-child {
      }
      .km-medcine {
        text-align: center;
        width: 20%;
        padding: 0 1px;
        font-size: 14px;
        margin-bottom: 5px;
        justify-content: space-between;
        div:first-child {
          margin: 0 auto;
          width: 60px;
          //    padding: 20px 2px;
          box-sizing: border-box;
          height: 60px;
          vertical-align: middle;
          border-radius: 50px;
          background: #f5f5f5;
          line-height: 60px;
          img {
            width: 40px;
            text-align: center;
            vertical-align: middle;
          }
        }
        div:last-child {
          margin-top: 10px;
        }
      }
    }
    .km-title {
      margin: 15px 0;
    }
  }
  .km-adsimg {
    margin: 8px 0;
    img {
      width: 100%;
    }
  }
  .km-tabs {
    display: flex;
    flex-wrap: wrap;
    padding:0;
    justify-content: space-between;
    .km-tab {
      background: #eee;
      margin-bottom: 10px;
      width: 30%;
      padding: 10px 1%;
      text-align: center;
      font-size: 14px;
      color: #000;
    }
  }
}
</style>
