<template>
  <div class="dx-coupon-body">
    <div>优惠券</div>
    <div>立减8元</div>
  </div>
</template>

<script>
export default {
  name: "dxCoupon"
};
</script>

<style lang="scss" scoped>
.dx-coupon-body {
  display: flex;
  font-size: 12px;
  border-radius: 5px;
  align-items: center;

  div {
    padding: 1px 2px;
  }
  div:first-child {
    background: red;
    color: #fff;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  div:last-child {
    background: #ffc9c9;
    color: red;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
}
</style>
