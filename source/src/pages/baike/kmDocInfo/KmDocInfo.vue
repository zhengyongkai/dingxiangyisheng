<!--  -->
<template>
  <transition name="slide" mode="out-in">
    <div class="km-page">
      <div class="km-title">
        <dxHeader :titleName="showTitle?'李宗辉':''">
          <div slot="right">
            <afIcon
              class="iconfont icon-share rightIcon"
              style="font-size:18px"
            />
          </div>
        </dxHeader>
      </div>
      <div>
        <dxScroll class="km-body" :listenScroll='true' @scroll='scroll' :probeType='3'>
          <div class="km-info">
            <div class="km-info-top">
              <div>
                李宗辉
              </div>
              <div>
                <img src="https://picsum.photos/705" alt="" />
              </div>
            </div>
            <div class="km-info-middle">
              <div class="info-middle-left">
                <div>皮肤科 主治医师</div>
                <div>
                  <div class="km-tag km-gray">三甲</div>
                  <div>苏州大学附属第一医院</div>
                </div>
              </div>
              <div class="info-middle-right">
                <div>关注</div>
                <!-- <img src="https://picsum.photos/705" alt=""> -->
              </div>
            </div>
            <div class="km-info-person-info">
              <div>
                多年医院可医师，主要负责病房与门诊登记处皮肤科工作。完成数万里临床病人的治疗，并负责常见皮肤疾病的外科
              </div>
              <div>
                <afIcon class="iconfont icon-right " style="font-size:18px" />
              </div>
            </div>
            <div class="km-info-person-info-pingjia">
              <afIcon class="iconfont icon-star1" size="sIcon" />
              <span> 4.98</span>
              <div><span>9</span>分钟相应</div>
              <div><span>770</span>月回答</div>
              <div><span>558</span>月处方</div>
            </div>
            <div class="km-info-person-tab">
              <div class="doctor-tab">
                <div v-for="(tag, k) in tags" :key="k">
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
          <div class="km-info-price">
            <div class="km-titletext">问诊方式</div>
            <div>
              <div>图文 ￥79 电话 ￥95</div>
              <afIcon class="iconfont icon-right" size="sIcon" />
            </div>
          </div>
          <div class="km-info-major">
            <div class="km-titletext">擅长方向</div>
            <div class="major-tabs">
              <div v-for="(tab, k) in majorList" :key="k">{{ tab }}</div>
            </div>
            <div class="major-answer">
              <div class="answer-items">
                <div v-for="(v, i) in 2" :key="i">
                  <div>
                    <img src="https://picsum.photos/700" />
                    <div>来自星星的用户</div>
                  </div>
                  <div>
                    你好，医生，我有多囊阴曹综合征和桥本甲状腺炎。10月24日末次月经开始，检测拍暖强压为11月12日。提前复用又加了四分之一颗，11月30日检查出怀孕,细菌性阴道痒，总是外阴部瘙痒
                  </div>
                  <div>
                    12月12日 17:54
                  </div>
                </div>
              </div>
              <div class="answer-items-more">
                更多100个问题
              </div>
            </div>
          </div>
          <div class="km-info-comment">
            <div class="km-titletext">患者评价</div>
            <div class="comment-tabs">
              <div v-for="(tab, k) in commentList" :key="k">{{ tab }}</div>
            </div>
            <div class="comment-info">
              <div v-for="(v, i) in 2" :key="i">
                <div class="comment-top">
                  <div class="comment-name">J***{{i}}</div>
                  <div class="comment-star"> <afIcon v-for="(v1, i1) in v" :key="i1" class="iconfont icon-star1" size="sIcon" /></div>
                </div>
                <div class="comment-text">
                  谢谢李医生！
                </div>
                <div class="comment-time">
                  12月12日 17:54
                </div>
              </div>
            </div>
            <div class="comment-items-more">
              更多100个真实评价
            </div>
          </div>
        </dxScroll>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        "全国百强医院",
        "周好评前三",
        "快速响应",
        "专业性优秀",
        "开处方药"
      ],
      majorList: [
        "全部（7625）",
        "阴道炎（571）",
        "先兆流产（412）",
        "阴囊囊肿（138）",
        "月经不调（138）"
      ],
      commentList: [
        "全部（7625）",
        "很有耐心（123）",
        "详细清楚（120）",
        "感谢医生（1072）",
        "敬业负责（605）"
      ],
      showTitle:false
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  methods: {
    scroll(res){
        console.log(res)
        if(res.y <= -50){
          this.showTitle = true
        }else{
          this.showTitle = false
        }
    }
  }
};
</script>
<style lang="scss" scoped>
.km-body {
  position: absolute;
  padding: 0 16px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  right: 0;
  top: 46px;
  .km-info {
    padding-top: 46px;
    .km-info-top {
      display: flex;
      > :first-child {
        font-size: 28px;
        font-weight: 530;
      }
      > :last-child {
        margin-left: auto;
        img {
          width: 60px;
          height: 60px;
          border-radius: 5px;
        }
      }
    }
    .km-info-middle {
      font-size: 14px;
      display: flex;
      margin-bottom: 16px;
      color: #333;
      align-items: center;
      .info-middle-left {
        > :last-child {
          margin-top: 8px;
          display: flex;
          align-items: center;
          div {
            margin-right: 10px;
          }
        }
      }
      .info-middle-right {
        margin-left: auto;
        background-color: #f9f9f9;
        margin-right: 5px;
        text-decoration: solid;
        color: #31b794;
        text-decoration: underline;
        border-radius: 10px;
        padding: 3px 10px;
        font-size: 14px;
      }
    }
    .km-info-person-info {
      font-size: 14px;
      align-items: center;
      display: flex;
      > :first-child {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        margin-right: 3px;
        text-overflow: ellipsis;
        line-height: 24px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #333;
      }
      > :last-child i {
        color: #999;
        font-size: 14px !important;
        margin-left: auto;
      }
    }
    .km-info-person-info-pingjia {
      margin-top: 40px;
      display: flex;
      i {
        font-size: 16px !important;
        margin-right: 5px;
        color: #ea9107;
      }
      span {
        margin-right: 2px;
        font-size: 20px;
        color: #000;
      }
      > :nth-child(2) {
        color: #ea9107;
      }
      div {
        margin-left: 12px;
        font-size: 12px;
        color: #666;
      }
      > :nth-child(2) {
        font-size: 20px;
        font-weight: lighter;
        color: #ea9107;
      }
    }
    .km-info-person-tab {
      margin-top: 24px;
      .doctor-tab {
        display: flex;
        flex-wrap: wrap;
        div {
          margin-right: 5px;
          border-radius: 5px;
          background-color: #fff8dd;
          font-size: 12px;
          padding: 5px 5px;
          color: #ea9107;
        }
      }
    }
  }
  .km-info-price {
    display: flex;
    align-items: center;
    margin-top: 48px;
    > :first-child {
      @extend .km-titletext;
    }
    > :last-child {
      font-size: 16px;
      display: flex;
      align-items: center;
      color: #31b794;
      margin-left: auto;
      i {
        font-size: 12px !important;
      }
      div {
        text-decoration: underline;
      }
    }
  }
  .km-info-major {
    margin-top: 48px;
    > :first-child {
      margin-bottom: 24px;
    }
    .major-tabs {
      display: flex;
      flex-wrap: wrap;
      div {
        font-size: 14px;
        margin-right: 8px;
        height: 24px;
        margin-bottom: 12px;
        line-height: 24px;
        color: #666;
        padding: 5px 8px;
        border-radius: 5px;
        background-color: #f6f6f6;
      }
    }
    .major-answer {
      margin-top: 16px;
      .answer-items {
        > div {
          padding: 16px 0;
          position: relative;
          > :first-child {
            display: flex;
            font-size: 14px;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              border-radius: 50%;
            }
            div {
              font-weight: bold;
              letter-spacing: 1px;
              margin-left: 5px;
            }
          }
          > :nth-child(2) {
            margin-top: 10px;
            font-size: 14px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            line-height: 20px;
            margin-right: 3px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            color: #333;
          }
          > :last-child {
            font-size: 12px;
            font-weight: lighter;
            margin-top: 12px;
            color: #d0d0d0;
          }
        }
        > div::after {
          position: absolute;
          box-sizing: border-box;
          content: " ";
          pointer-events: none;
          right: 0;
          bottom: 0;
          left: 0;
          border-bottom: 1px solid #eee;
        }
      }
    }

    .answer-items-more {
      margin: 0 auto;
      background: #eee;
      color: #31b794;
      font-size: 14px;
      margin-top: 16px;
      width: 120px;
      border-radius: 10px;
      padding: 5px 8px;
      text-align: center;
      text-decoration: underline;
      font-family: "微软雅黑";
    }
  }
  .km-info-comment {
    margin: 36px 0;
    > :first-child {
      margin-bottom: 24px;
    }
    .comment-tabs {
      display: flex;
      flex-wrap: wrap;
      div {
        font-size: 14px;
        margin-right: 8px;
        height: 24px;
        margin-bottom: 12px;
        line-height: 24px;
        color: #666;
        padding: 5px 8px;
        border-radius: 5px;
        background-color: #f6f6f6;
      }
    }
    .comment-info {
      margin-top: 16px;
      .comment-top {
        display: flex;
        align-items: center;
        font-size: 18px;
        > :first-child {
          letter-spacing: 1px;
          font-weight: bold;
          margin-right: 10px;
        }
      }
      .comment-star{
        display: flex;
        i{
          font-size: 12px !important;
          color: #ea9107;;
          margin-right: 2px;
        }
      }
      > div {
        padding: 16px 0;
        position: relative;
      }
      .comment-text {
        padding: 10px 0;
        font-size: 16px;
        color: #333;
      }
      .comment-time {
        font-size: 12px;
        font-weight: lighter;
        margin-bottom: 10px;
        color: #d0d0d0;
      }
      > div::after {
        position: absolute;
        box-sizing: border-box;
        content: " ";
        pointer-events: none;
        right: 0;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #eee;
      }
     
    }
     .comment-items-more {
        margin: 0 auto;
        background: #eee;
        color: #31b794;
        font-size: 14px;
        margin-top: 16px;
        width: 130px;
        border-radius: 10px;
        padding: 5px 8px;
        text-align: center;
        text-decoration: underline;
        font-family: "微软雅黑";
        margin-bottom: 36px;
      }
  }
}
.km-tag {
  padding: 2px;
  font-size: 12px;
}
.km-gray {
  background-color: #eee;
}
.km-titletext {
  font-size: 20px;
}
</style>
