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
  </div>
</template>
<script>
import dxCoupon from "../../../components/dxElement/dxCoupon/dxCoupon.vue";
import { country } from "../../../mock/country";
import mixin from "@u/mixin";
export default {
  components: { dxCoupon },
  mixins: [mixin],
  data() {
    return {
      showMenuCover: false,
      temperData: 0,
      selectOne: 0,
      country: country,
      countrySelect: "",
      isLoading: false,
      doctorList: [],
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
      ],
      getTableURL: this.$api.getDoctorList()
    };
  },
  mounted() {
    this.getDoctorList();
  },
  methods: {
    getDoctorList() {
      this.$refs.scroll.refresh();
      this.getList(res => {
        for (let i of res) {
          this.doctorList.push(i);
        }
        this.$refs.scroll.refresh();
      });
    },
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
      this.form.project = i;
      this.doctorList = [];
      this.page.pageNum = 1;
      this.getDoctorList();
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
      this.getDoctorList();
      this.closeToast();
    },
    pullRefresh() {
      console.log("下拉了");
      this.page.pageNum += 1;

      this.getDoctorList();
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
  overflow-y: hidden;
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
          .doctor-hospital {
            font-size: 12px;
            margin-left: 10px;
            box-sizing: border-box;
            padding: 2px;
            background: #e6b76e;
            border-radius: 2px;
            color: #fff;
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
          color: #646566;
        }

        .doctor-pingjia {
          margin-top: 12px;
          .doctor-star {
            display: flex;
            align-items: center;
            font-size: 12px;
            i,
            span {
              color: #ea9107;
              margin-right: 5px;
            }
            div {
              color: #646566;
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
            color: #ea9107;
          }
        }
        .doctor-coupon {
          margin-top: 10px;
          //  transform: scale(0.9);
        }
        .doctor-price {
          display: flex;
          align-items: center;
          margin-top: 10px;
          div {
            margin-right: 12px;
            font-size: 14px;
          }
          span {
            margin-left: auto;
            background-color: #f9f9f9;
            text-decoration: solid;
            color: #31b794;
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
  color: #2fac8a;
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
  min-width: 40px;
  text-align: center;
  padding: 8px;
  border-radius: 2px;
  background-color: #fafafa;
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
.greenTab {
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
    width: 120px;
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
    left: 120px;
    padding: 0 10px;
    z-index: 999;
    top: 0;
    bottom: 0;
    overflow: scroll;
    background: #fff;
    flex: 1;
    .km-menu-items-right-item {
      display: flex;
      .km-city-check {
        margin-left: auto;
      }
    }
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
