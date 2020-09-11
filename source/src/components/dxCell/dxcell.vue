<template>
  <div class="dxCell">
    <div>
      <div class="text">
        <div class="cell-text">
          <slot name="title">{{title}}</slot>
        </div>
        <div class="cell-desc">
          <slot name="desc">{{desc}}</slot>
        </div>
      </div>
    </div>
    <div class="cell-right">
      <div class="cell-right-text"><slot name="icontext"></slot></div>
      <div><afIcon class="iconfont iconaui-icon-right" size='sIcon' /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dxCell",
  props: {
    title: String,
    desc: String,
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dxCell {
  position: relative;
  min-height: 60px;
  align-items: center;
  display: flex;
  padding: 10px 16px;
  box-sizing: border-box;
}
.cell-right {
  display: flex;
  margin-left: auto;
  .cell-right-text {
    font-size: 14px;
    letter-spacing: 1px;
    margin-right: 2px;
    color: #949292;
  }
}
.cell-text {
  margin-bottom: 4px;
  letter-spacing: 1px;
  font-size: 16px;
}
.cell-desc {
  font-size: 12px;
  color: #949292;
  letter-spacing: 1px;
}
.dxCell::after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  right: 12px;
  bottom: 0;
  left: 12px;
  border-bottom: 1px solid #c9cbce;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>
