<template>
  <div class="km-page">
    <div class="km-title">
      <dxHeader :titleName="'皮肤科'">
        <div slot="right">
          <afIcon
            class="iconfont icon-share rightIcon"
            style="font-size:18px"
          />
        </div>
      </dxHeader>
    </div>
    <div class="km-search">
      <dxSearch></dxSearch>
    </div>
    <div class="km-bottom" :style="temperData != 0 ? 'overflow:hidden' : ''">
      <div class="km-tabs">
        <div class="km-tab shadow" v-for="(i, v) in list" :key="v">
          {{ i.name }}
        </div>
      </div>
      <div
        class="km-menuArea"
        style="	position:sticky;
	      top:0px;"
      >
        <div class="km-menudown" ref="menu">
          <div class="km-menuItem" @click="showMenu(1)">
            <span
              :class="temperData == 1 ? 'km-menuTitle-show' : 'km-menuTitle'"
              >综合排序</span
            >
          </div>
          <div class="km-menuItem" @click="showMenu(2)">
            <span
              :class="temperData == 2 ? 'km-menuTitle-show' : 'km-menuTitle'"
              >全国</span
            >
          </div>
          <div class="km-menuItem" @click="showMenu(3)">
            <span
              :class="temperData == 3 ? 'km-menuTitle-show' : 'km-menuTitle'"
            >
              医生擅长</span
            >
          </div>
          <div class="km-menuItem" @click="showMenu(4)">
            <span
              :class="temperData == 4 ? 'km-menuTitle-show' : 'km-menuTitle'"
              >筛选</span
            >
          </div>
          <div
            class="menuitem"
            :style="'top:' + top + 'px'"
            v-show="temperData != 0"
            @click="unshowMenuCover"
          >
            <div class="km-content-item" v-if="temperData == 1">
              <div class="km-content" @click.stop>
                <div class="km-menu-items">
                  <div class="km-menu-item" @click="chooseOne(0)" :class="selectOne == 0 ? 'green' : ''">
                    <div>综合排序</div>
                    <div><afIcon class="iconfont icon-check" v-if="selectOne==0"></afIcon></div>
                  </div>
                  <div class="km-menu-item" @click="chooseOne(1)" :class="selectOne == 1? 'green' : ''">
                    <div>回答次数</div>
                      <div><afIcon class="iconfont icon-check" v-if="selectOne==1" ></afIcon></div>
                  </div>
                  <div class="km-menu-item" @click="chooseOne(2)" :class="selectOne == 2? 'green' : ''">
                    <div>星级评分</div>
                      <div><afIcon class="iconfont icon-check"  v-if="selectOne==2"></afIcon></div>
                  </div>
                  <div class="km-menu-item" @click="chooseOne(3)" :class="selectOne == 3? 'green' : ''">
                    <div>响应时间</div>
                      <div><afIcon class="iconfont icon-check"  v-if="selectOne==3"></afIcon></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="km-content-item" v-if="temperData == 2">
              <div class="km-content-city" @click.stop>
                <div class="km-content-country">
                  <div class="km-menu-items-left">
                    <div
                      :key="v"
                      v-for="(i, v) in country"
                      @click="changeCity(v)"
                      :class="
                        v == countrySelect ? 'countrySelect area' : 'area'
                      "
                    >
                      {{ i.name }}
                    </div>
                  </div>
                  <div class="km-menu-items-right">
                    <div :key="v" v-for="(i, v) in city" @click="areaSelect(i)">
                      {{ i }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="km-content-item" v-if="temperData == 3">
              <div class="km-content" @click.stop>
                <div class="km-content-tab">
                  <div v-for="(i, v) in list" :key="v">{{ i.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="km-body">
            <div class="doctor-content">
              <div v-for="(v, i) in 10" :key="i" class="doctor-items">
                <div class="doctor-item">
                  <div class="doctor-img">
                    <img src="@/assets/mockimg/zyk.jpg" alt="" />
                  </div>
                  <div class="doctor-info">
                    <div class="doctor-top">
                      <div class="doctor-name">
                        付国军
                      </div>
                      <div class="font-middle-nomal">
                        主任医生
                      </div>
                    </div>
                    <div class="doctor-ky">
                      <div class="font-middle-nomal">
                        皮肤性病科
                      </div>
                      <div class="font-middle-nomal">
                        沧州市任命医院
                      </div>
                    </div>
                    <div class="doctor-decrease">
                      擅长：坐疮，尖锐湿疣，甲癣，足癣，股癣，脂溢性皮炎，过敏
                    </div>
                    <div class="doctor-pingjia">
                      <div class="doctor-star">
                        <afIcon class="iconfont icon-star2" size="sIcon" />
                        <span>5.00</span>
                        <div>月回答 650</div>
                        <div>月处方 650</div>
                        <div>12分钟相应</div>
                      </div>
                    </div>
                    <div class="doctor-tab">
                      <div>
                        教授
                      </div>
                      <div>
                        快速相应
                      </div>
                      <div>
                        专业性优秀
                      </div>
                    </div>
                    <div class="doctor-price">
                      <div>
                        图文 ￥79
                      </div>
                      <div>
                        电话 ￥95
                      </div>
                      <span>问医生</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { country } from "../../mock/country";
export default {
  data() {
    return {
      showMenuCover: false,
      temperData: 0,
      selectOne:'',
      country: country,
      top: 0,
      countrySelect: "",
      isLoading: false,
      city: [],
      list: [
        {
          name: "痤疮痘痘"
        },
        {
          name: "湿疹"
        },
        {
          name: "过敏"
        },
        {
          name: "脚气"
        },
        {
          name: "麻疹"
        }
      ]
    };
  },
  methods: {
    chooseOne(i){
      this.selectOne = i
    },
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        // Toast("刷新成功");
        this.isLoading = false;
      }, 3000);
    },
    fixBool(ref) {
      console.log(ref);
      // if(ref.isFixed){
      //    document.getElementsByTagName("body")[0].classList.add("hidden");
      // }else{
      //    document.getElementsByTagName("body")[0].classList.add("hidden");
      // }
    },
    showMenu(index) {
      let refs = this.$refs.menu;
      // console.log(refs.getBoundingClientRect().top)
      this.top = refs.getBoundingClientRect().top + 52;
      this.showMenuCover = true;
      if (this.temperData == index) {
        this.showMenuCover = false;
        this.temperData = 0;
      } else {
        this.temperData = index;
      }
    },
    unshowMenuCover() {
      this.temperData = 0;
      this.showMenuCover = false;
    },
    changeCity(i) {
      // console.log(this.country[i].city[0].area);
      this.city = this.country[i].city[0].area;
      this.countrySelect = i;
    },
    areaSelect(data) {
      this.$notify(data);
    }
  }
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.km-body {
  width: 100%;

  // .doctor-content::after {
  //   content: "";
  //   border: 1px solid red;
  //   width: 100%;
  // }
  .doctor-content {
    padding: 12px;

    .doctor-item {
      border-bottom: 1px solid rgb(240, 240, 240);
      padding: 16px 0 24px 0;
      display: flex;
      .doctor-img {
        margin-right: 12px;
        img {
          border-radius: 5px;
          width: 64px;
          height: 64px;
        }
      }
      .doctor-info {
        .doctor-top {
          display: flex;
          align-items: center;
          .doctor-name {
            font-size: 18px;
            font-weight: 600;
            margin-right: 6px;
          }
        }
        .doctor-ky {
          display: flex;
          align-items: center;
          margin: 3px 0;
          div {
            margin-right: 5px;
          }
        }
        .doctor-decrease {
          margin-top: 12px;
          font-size: 12px;
          color: #999;
        }

        .doctor-pingjia {
          margin-top: 12px;
          .doctor-star {
            display: flex;
            font-size: 12px;
            i,
            span {
              color: #ffca00;
              margin-right: 5px;
            }
            div {
              color: #999;
              margin-right: 5px;
            }
          }
        }
        .doctor-tab {
          display: flex;
          margin-top: 10px;
          div {
            margin-right: 5px;
            border-radius: 5px;
            background-color: #fafafa;
            font-size: 12px;
            padding: 1px 5px;
            color: rgb(255, 205, 5);
          }
        }
        .doctor-price {
          display: flex;
          align-items: center;
          margin-top: 20px;
          div {
            margin-right: 12px;
            font-size: 14px;
          }
          span {
            margin-left: auto;
            background-color: #f9f9f9;
            text-decoration: solid;
            color: #00e96f;
            border-radius: 5px;
            padding: 3px 8px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.km-title {
  width: 100%;
  height: 46px;
  z-index: 999;
}

.km-page {
}
.km-search {
  background: #fff;
  padding: 12px 12px 10px 12px;
  //padding: 0 12px;
  z-index: 201;
}
.km-tabs {
  margin: 10px 0;
  padding: 12px 12px;
  z-index: 202;
  display: -webkit-box;
  overflow-x: auto;
  margin-right: 12px;
  -webkit-overflow-scrolling: auto;
  align-items: center;
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  .km-tab {
    height: 42px;
    box-sizing: border-box;
    padding: 10px;
    width: 80px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #eee;
    margin-right: 10px;
    font-weight: 600;
    border-radius: 5px;
  }
}
.km-advise {
  padding: 0 12px;
  img {
    width: 100%;
    border-radius: 4px;
  }
}
.km-menudown {
  display: -webkit-flex;
  display: flex;

  height: 50px;
  background-color: #fff;
  //box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
  border-bottom: 1px solid #eee;
  z-index: 202;
  background: #fff;
  .km-menuItem {
    display: flex;
    z-index: 203;
    -webkit-box-flex: 1;
    position: relative;
    -webkit-flex: 1;
    font-weight: 600;
    background-color: #fff;
    flex: 1;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    min-width: 0;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
  }
  .km-menuTitle,
  .km-menuTitle-show {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: 0 8px;
    color: #323233;
    font-size: 14px;
    line-height: 22px;
  }
  .km-menuTitle::after {
    position: absolute;
    top: 50%;
    right: -1px;
    margin-top: -5px;
    border: 3px solid;
    border-color: transparent transparent #dcdee0 #dcdee0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: 0.8;
    content: "";
    margin-right: -3px;
  }
  .km-menuTitle-show::after {
    position: absolute;
    top: 50%;
    right: -1px;
    margin-top: -1px;
    border: 3px solid;
    border-color: transparent transparent #dcdee0 #dcdee0;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    opacity: 0.8;
    content: "";
    margin-right: -3px;
  }
}

.km-menuArea {
}
.shadow {
  box-shadow: 0px 2px 8px #eee;
}
.km-content-city {
  height: 100%;
}
.km-content,
.km-content-city {
  padding: 0 12px;
  //position: absolute;
  overflow-x: hidden;
  width: 100%;
  left: 0;

  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  max-height: 100%;
  z-index: 999;
  background: #fff;
  .km-content-country {
    height: 100%;
    display: flex;
    .km-menu-items-left {
      position: absolute;
      height: 100%;
      top: 0;
      bottom: 0;
      z-index: 999;
      left: 0;
      padding: 0;
      overflow: scroll;
      width: 25%;
      background: #eee;
    }
    .km-menu-items-left div {
      font-size: 16px;
      height: 50px;
      text-align: left;
      line-height: 50px;
    }
    .km-menu-items-right {
      position: absolute;
      right: 0;
      left: 25%;
      height: 100%;
      padding: 0 10px;
      top: 0;
      z-index: 999;
      bottom: 0;
      overflow: scroll;
      background: #fff;
      flex: 1;
    }
    .km-menu-items-right div {
      font-size: 16px;
      height: 50px;
      line-height: 50px;
    }
  }
}
.km-content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #eee;
}
.km-content::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}
.km-menu-items {
  font-size: 14px;
  .km-menu-item {
    display: flex;
    padding: 16px 8px;
    border-bottom: 1px solid #eee;
    div:last-child{
      margin-left: auto;
    }
  }
}
.km-content-item {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.km-content-body {
  height: 800px;
}
.km-cover {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.menuitem {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  position: fixed;
  width: 100%;
  bottom: 0;
  overflow: scroll;
}
.countrySelect {
  background-color: #fff;
  color: #16dc16;
}
.area {
  padding: 0 10px;
}
.km-content-tab {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.km-content-tab div {
  min-width: 50px;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #eeeeee;
  margin-right: 30px;
  margin-bottom: 10px;
  color: #000;
  font-size: 14px;
}

//将要提出去的
.font-middle-nomal {
  font-size: 14px;
}
.fade-enter-active,
.fade-leave-active {
  transform: translate3d(0, -100%, 0);
}
.fade-enter,
.fade-leave-to {
  transform: translate3d(0, -100%, 0);
}
.km-bottom {
  z-index: 999;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  background: #fff;
  left: 0;
  right: 0;
  top: 105px;
  bottom: 0;
  overflow: scroll;
}
.green{
  color: #27d700;
}
</style>
