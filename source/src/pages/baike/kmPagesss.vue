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
    <div style="z-index:999;position: relative;background:#fff;">
      <div class="km-search">
        <dxSearch></dxSearch>
      </div>
      <!-- <div class="km-tabs">
        <div class="km-tab shadow" v-for="(i, v) in list" :key="v">
          {{ i.name }}
        </div>
      </div> -->
      <!-- <div class="km-advise">
        <img src="@/assets/advise/km.png" />
      </div> -->

      <div>
        <div class="km-menudown">
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
        </div>

        <transition name="fade">
          <div class="dx-dropdown" v-show="temperData != 0">
            <div
              @click="temperData = 0"
              class="dx-overlay"
              style="z-index: 2057; position: absolute; animation-duration: 0.2s;"
            ></div>
            <div
              class="dx-popup dx-popup--top dx-dropdown-item__content"
              style="transition-duration: 0.2s; z-index: 2058;"
            >
              <div v-show="temperData == 1">
                <div
                  @click="chooseOne(i, 'composite')"
                  v-for="(v, i) in lists"
                  :key="i"
                  :class="form.composite == i ? 'green' : ''"
                  class="  dx-cell dx-cell--clickable dx-dropdown-item__option dx-dropdown-item__option--active"
                >
                  <div class="dx-cell__title">
                    <span>{{ v }}</span>
                  </div>
                  <div class="dx-cell__value" v-if="form.composite == i">
                    <i
                      class="van-icon van-icon-success van-dropdown-item__icon"
                    ></i>
                  </div>
                </div>
              </div>
              <div v-show="temperData == 2">
                <div class="km-content-country">
                  <div class="km-menu-items-left">
                    <div
                      :key="v"
                      v-for="(i, v) in country"
                      @click="changeCity(v)"
                      class="area"
                      :class="v == countrySelect ? 'countrySelect' : ''"
                    >
                      {{ i.name }}
                    </div>
                  </div>
                  <div class="km-menu-items-right">
                    <div
                      :key="v"
                      v-for="(i, v) in city"
                      @click="areaSelect(i)"
                      :class="form.country == i ? 'green' : ''"
                    >
                      {{ i }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="temperData == 3">
                <div class="km-content" @click.stop>
                  <div class="km-content-tab">
                    <div
                      v-for="(i, v) in list"
                      :key="v"
                      :class="form.decrease == v ? 'greenTab' : ''"
                      @click="chooseOne(v, 'decrease')"
                    >
                      {{ i.name }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="temperData == 4">
                <div class="km-content" @click.stop>
                  <div class="preparationList-content">
                    <div
                      v-for="(i, v) in preparationList"
                      :key="v"
                      class="preparationList-item"
                    >
                      <div class="preparationList-title">
                        {{ i.name }}
                      </div>
                      <div class="km-content-tab">
                        <div
                          @click="choosePreparationList(i.pid, z)"
                          v-for="(k, z) in i.tag"
                          :key="z"
                          :class="form['preparation'][v] == z ? 'greenTab' : ''"
                        >
                          {{ k.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fixButton">
                  <div @click="reset">重置</div>
                  <div @click="submitPreparationList">完成</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="km-body">
        <dxScroll class="km-body">
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
        </dxScroll>
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
      selectOne: 0,
      country: country,
      countrySelect: "",
      isLoading: false,
      city: [],
      form: {
        composite: 0,
        country: "",
        decrease: null,
        preparation: {}
      },
      preparationList: [
        {
          name: "问诊方式",
          pid: 0,
          tag: [
            { name: "图文问诊", id: 0 },
            { name: "电话问诊", id: 1 }
          ]
        },
        {
          name: "价格区间",
          pid: 1,
          tag: [
            { name: "10-19", id: 0 },
            { name: "20-29", id: 1 },
            { name: "30-50", id: 0 },
            { name: "50以上", id: 0 }
          ]
        },
        {
          name: "热门标签",
          pid: 2,
          tag: [
            { name: "全国百强医院", id: 0 },
            { name: "耐心细致", id: 1 },
            { name: "快速响应", id: 0 },
            { name: "名院主任", id: 0 }
          ]
        },
        {
          name: "医生职称",
          pid: 3,
          tag: [
            { name: "医师", id: 0 },
            { name: "主治医师", id: 1 },
            { name: "副主任医师", id: 1 },
            { name: "主任医师", id: 1 }
          ]
        }
      ],
      list: [
        {
          name: "过敏"
        },
        {
          name: "肺炎"
        },
        {
          name: "湿疹"
        },
        {
          name: "黄疸"
        },
        {
          name: "消化不良"
        },
        {
          name: "腹泻"
        },
        {
          name: "发热"
        },
        {
          name: "鼻炎"
        },
        {
          name: "哮喘"
        },
        {
          name: "支气管炎"
        },
        {
          name: "幼儿急诊"
        },
        {
          name: "乳糖不耐受"
        },
        {
          name: "手足口病"
        }
      ],
      lists: [
        "综合排序",
        "回答次数",
        "星际评分",
        "响应时间",
        "价格从高到低",
        "价格从低到高"
      ]
    };
  },
  methods: {
    choosePreparationList(v, i) {
      if (this.form["preparation"][v] == i) {
        this.form["preparation"][v] = null;
      } else {
        this.form["preparation"][v] = i;
      }
      this.$forceUpdate();
    },
    closeToast() {
      this.temperData = 0;
    },
    chooseOne(i, type) {
      this.form[type] = i;
      this.closeToast();
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
      this.showMenuCover = false;
    },
    areaSelect(data) {
      this.form.country = data;
      this.temperData = 0;
    },
    reset() {
      this.form.preparation = {};
    },
    submitPreparationList() {
      this.closeToast();
    }
  }
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.km-body {
  -webkit-overflow-scrolling: auto;
  position: fixed;
  width: 100%;
  top: 161px;
  bottom: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
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
              color: #E7AF58;
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
            color: #E7AF58;
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
  padding: 0 12px;
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
    height: 40px;
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
  position: relative;
  right: 0;
  left: 0;
  height: 100%;
  //bottom: 50px;
  z-index: 10;
  overflow: hidden;
  overflow-y: auto;
}
.menuitem {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  position: absolute;
  width: 100%;
  top: 161px;
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
  padding: 15px 10px 0 10px;
  display: flex;
  flex-wrap: wrap;
}
.km-content-tab div {
  min-width: 50px;
  text-align: center;
  padding: 5px;
  border-radius: 2px;
  background-color: #FAFAFA;
  margin-right: 15px;
  margin-bottom: 15px;
  color: #000;
  font-size: 12px;
}

//将要提出去的
.font-middle-nomal {
  font-size: 14px;
}

.dx-dropdown {
  position: fixed;
  top: 161px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  .dx-overlay {
    z-index: 999;
    position: absolute;
    animation-duration: 0.2s;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .dx-dropdown-item__content {
    position: absolute;
    max-height: 80%;
  }
  .dx-popup--top {
    top: 0;
    left: 0;
    width: 100%;
  }
  .dx-popup {
    max-height: 100%;
    overflow-y: auto;
    background-color: #fff;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    -webkit-overflow-scrolling: touch;
  }
  .dx-dropdown-item__option {
    text-align: left;
  }

  .dx-cell--clickable {
    // cursor: pointer;
  }

  .dx-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 12px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
  }
  .dx-cell::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .dx-cell__value {
    margin-left: auto;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.green {
  color: #2fac8a !important;
}
.greenTab{
  color: #2fac8a !important;
  background: #ddf8ea !important;
}
.km-content-country {
  display: flex;
  height: calc(100vh - 161px);
  font-size: 14px;
  .km-menu-items-left {
    position: absolute;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 999;
    left: 0;
    padding: 0;
    overflow: scroll;
    width: 100px;
    background: #eee;
  }
  .km-menu-items-left div {
    height: 50px;
    text-align: left;
    line-height: 50px;
  }
  .km-menu-items-right {
    position: absolute;
    right: 0;
    left: 100px;
    padding: 0 10px;
    z-index: 999;
    top: 0;
    bottom: 0;
    overflow: scroll;
    background: #fff;
    flex: 1;
  }
  .km-menu-items-right div {
    height: 50px;
    line-height: 50px;
  }
}
.preparationList-content {
  padding: 20px 10px 80px 20px;
  .preparationList-item {
    margin-bottom: 10px;
    .preparationList-title {
      font-size: 12px;
    }
    .km-content-tab {
      margin-top: 16px;
      padding: 0;
      div {
        font-size: 12px;
      }
    }
  }
}
.fixButton {
  position: absolute;
  height: 50px;
  display: flex;
  font-size: 14px;
  bottom: 0;
  width: 100%;
  padding: 0 5px;
  line-height: 40px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  div {
    text-decoration: solid;
  }
  div:first-child {
    background: #eee;
    border-radius: 10px;
    color: #2fac8a;
    padding: 0 10px;

    width: 20%;

    text-align: center;
    margin: 5px 10px 5px 0;
    border-radius: 10px;
  }
  div:last-child {
    background: #eee;
    border-radius: 10px;
    color: #fff;
    background: #2fac8a;
    flex: 1;
    text-align: center;
    border-radius: 10px;
    margin: 5px 10px 5px 0;
  }
}
</style>
