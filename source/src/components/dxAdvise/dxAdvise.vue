<template>
  <div class="dxAdvise">
    <slot name="timestamp" />
    <div class="adviseTitle" >{{title}}</div>
    <div
      class="adviseCard"
      v-for="(v, i) in item"
      :key="i"
      :style="' background-image: url(' + v.pic + ')'"
    >
      <div class="adviseText" :style="'color:' + v.textColor + ';'">
        {{ v.name }}
      </div>
      <div :style="'color:' + v.descColor + ';'" class="adviseDesc">
        {{ v.desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dxAdvise",
  props: {
    item: Array,
    title: String
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dxAdvise{
    margin-bottom: 20px;
}
.adviseTitle {
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: #656565;
  // font-weight: lighter;
}
.adviseCard {
  box-shadow: 0px 7px 8px rgba(34, 25, 25, 0.2);
  height: 220px;

  background-size: 100% 100%;
  border-radius: 10px;
  padding: 15px 9px;
  .adviseText {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .adviseDesc {
    font-size: 20px;
    font-weight: 550;
    width: 95%;
  }
}
</style>
