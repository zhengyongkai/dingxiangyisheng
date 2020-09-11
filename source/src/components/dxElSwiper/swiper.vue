<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="(v, i) in img" :key="i">
        <img :src="v" />
      </van-swipe-item>
      <template #indicator>
        <div class="banner-circle">
          <ul>
            <li
              v-for="(v, i) in img"
              :key="i"
              :class="i == n ? 'selected' : ''"
            ></li>
          </ul>
        </div>
      </template>
    </van-swipe>
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
      timer: 0,
      currentIndex: 0
    };
  },
  methods: {
    onChange(index) {
      this.n = index;
    },
  },
  mounted: function() {
  },
  created: function() {
  },
  destroyed: function() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  position: relative;
}

.banner-circle {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  color: #fff;
}
.banner-circle li {
  content: "";
  height: 2px;
  display: inline-block;
  width: 10px;
  background: #fff;
  border-radius: 20px;
  margin: 2px;
}
.banner-circle ul {
  text-align: center;
}
.banner-circle .selected {
  background: lightgreen;
}
</style>
