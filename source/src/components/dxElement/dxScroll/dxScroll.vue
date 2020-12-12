<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
      <!-- 加载显示，可以替换别的 -->
      <div class="scrollBottom" v-if="pullup">{{ showText[scrollText] }}</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import _ from "lodash";
export default {
  name: "dxScroll",
  data() {
    return {
      scrollY: 0,
      showText: ["上拉加载更多", "正在加载...", "暂无数据"]
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    //是否开启加载
    pullup: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    scrollText: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
      this.refresh();
    });
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });

      if (this.listenScroll) {
        let _this = this;
        this.scroll.on("scroll", pos => {
          _this.$emit("scroll", pos);
        });
      }
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            //发生上拉事件触发
            //实现上移显示
            //这个是为了防止连续滑动导致列表加载错误,防止如果只有一条数据会自动执行改函数
              if (this.scroll.maxScrollY == this.scrollY || this.scroll.maxScrollY == 0) {
                return;
              }
              this.scrollY = this.scroll.maxScrollY;
              this.$emit("scrollToEnd");
          }
        });
      }
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    refresh() {
      setTimeout(() => {
        this.scroll && this.scroll.refresh();
      }, 100);
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>

<style lang="scss" scoped>
.scrollBottom {
  color: #969799;
  line-height: 50px;
  height: 50px;
  text-align: center;
}
</style>
