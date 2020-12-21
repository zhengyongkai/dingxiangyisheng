<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
      <!-- 加载显示，可以替换别的 -->
      <div class="scrollBottom" v-if="pullup">
        <img
          style="width:20px;line-height:20px;margin-right:5px"
          v-if="scrollText == 1"
          src="@/assets/loading/loading.gif"
        />{{ showText[scrollText] }}
      </div>
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
      showText: ["上拉加载更多", "正在加载...", "暂无更多"]
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
    Debounce(fn, delay = 500) {
      let timeout = null;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    },
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        autoBlur: false,
        scrollX: false,
        stopPropagation: false
      });

      if (this.listenScroll) {
        let _this = this;
        this.scroll.on(
          "scroll",
          _.debounce(
            pos => {
              //实现上移
              _this.$emit("scroll", pos);
            },
            50,
            {
              leading: true,
              trailing: false
            }
          )
        );
      }
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            //发生上拉事件触发
            //实现上移显示
            //这个是为了防止连续滑动导致列表加载错误,防止如果只有一条数据会自动执行改函数
            if (
              this.scroll.maxScrollY == this.scrollY ||
              this.scroll.maxScrollY == 0
            ) {
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
  line-height: 40px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
