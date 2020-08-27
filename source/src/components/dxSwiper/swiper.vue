<template>
  <div>
    <div class="index-content" id="my">
      <div
        class="banner"
        style="
          width:100%;overflow:hidden;
        "
      >
        <div
          :style="
            'position:relative;display:flex;transform: translate(' +
              x +
              'px, 0);transition-duration:0.5s;left:' +
              y +
              'px;'
          "
          ref="dom"
        >
          <img
            v-for="(v, i) in img"
            :key="i"
            :src="v"
            style="margin-right:10px;"
          />
        </div>
        <div class="banner-circle">
          <ul>
            <li
              v-for="(v, i) in img"
              :key="i"
              :class="i == n ? 'selected' : ''"
            ></li>
          </ul>
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
      img: [
        require("./textImage/banner1.jpg"),
        require("./textImage/banner2.png"),
        require("./textImage/banner1.jpg"),
        require("./textImage/banner2.png")
      ],
      msg: "Welcome to Your Vue.js App",
      n: 0,
      x: 0,
      scrollwidth: 0,
      start: false,
      y: 0,
      time: 0
    };
  },
  methods: {
    fun: function() {
      //setInterval(函数体,时间)
      setInterval(this.play, 3000);
    },
    play: function() {
      if (this.n + 1 == this.img.length) {
        //   this.y += this.scrollwidth * this.img.length;
        // this.x -= this.scrollwidth;
        this.x = 0;
        this.n = 0;
      } else {
        this.x -= this.scrollwidth + 10;
        this.n++;
      }
    },
    changeSize() {
      window.onresize = () => {
        console.log('change')
        console.log(this.$refs.dom.scrollWidth)
        this.scrollwidth = this.$refs.dom.scrollWidth;
      };
    }
  },
  mounted: function() {
    //生命周期  钩子函数   挂载完成
    if (this.img.length > 1) {
      this.fun();
    }
    this.$nextTick(() => {
      this.changeSize()
    })
  },
  created: function() {
    this.$nextTick(() => {
      this.scrollwidth = this.$refs.dom.scrollWidth;
      //this.x = -this.img.length * this.scrollWidth;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
body {
  font-size: 14px;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
}
html,
body {
  height: 100%;
  margin: 0 auto;
}

/*index*/
.index-content .banner {
  position: relative;
  img {
    width: 100%;
    position: relative;
  }
}
.index-content .banner .banner-circle {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  color: #fff;
}
.index-content .banner .banner-circle li {
  content: "";
  height: 2px;
  display: inline-block;
  width: 10px;
  background: #fff;
  border-radius: 20px;
  margin: 2px;
}
.index-content .banner .banner-circle ul {
  text-align: center;
}
.index-content .banner .banner-circle .selected {
  background: lightgreen;
}
.index-content .banner img {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
