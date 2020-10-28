<template>
  <div>
    <div class="km-title">
      <dxHeader :titleName="'电话急诊'"></dxHeader>
    </div>
    <dxScroll class="km-body">
      <div>
        <div class="km-advise">
          <img src="@/assets/advise/dhjz.png" />
        </div>
        <div class="km-form">
          <div class="km-textarea">
            <textarea></textarea>
          </div>
          <div class="km-form-title">
            <div>快速描述常见疾病</div>
          </div>
          <div class="km-form-tabs">
            <div v-for="(v, i) in tab" :key="i" class="km-form-tab">
              {{ v }}
            </div>
          </div>
          <div class="km-form-upload">
            www
          </div>
        </div>
      </div>
    </dxScroll>
    <div class="km-footer">
      <div class="km-footer-submit">
        下一步
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      tab: [
        "孕期检查",
        "孕期疼痛",
        "新生儿黄疸",
        "小儿感冒",
        "小儿腹泻",
        "小儿湿疹",
        "产后恢复",
        "产后焦虑",
        "阴道炎"
      ]
    };
  },
  components: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.km-title {
  height: 46px;
}
.km-body {
  position: absolute;
  bottom: 0;
  overflow: hidden;
  padding: 0;
  top: 46px;
  overflow-x: hidden;
  overflow-y: hidden;
  .km-advise {
    img {
      width: 100%;
      height: 150px;
    }
  }
}
.km-form {
  margin: 0 12px;
  .km-textarea {
    border: transparent;
    textarea {
      width: 100%;
      border: 0;
      border-radius: 5px;
      background-color: #fff;
      height: 100px;
      letter-spacing: 2px;
      font-size: 18px;
      resize: none;
    }
  }
  .km-form-title {
    font-size: 12px;
    color: #999;
    margin-bottom: 16px;
  }
  .km-form-tabs {
    display: flex;
    flex-wrap: wrap;
    .km-form-tab {
      background-color: #f2f2f2;
      color: #000;
      padding: 5px 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      font-size: 12px;
      border-radius: 5px;
    }
  }
  .km-form-upload {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 20px;
    padding: 16px 0;
    width: 100%;
  }
}
.km-footer{
  position: fixed;
  border-top: 1px solid #eee;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 50px;
  .km-footer-submit{
    margin: 5px 12px ;
      height: 40px;
      line-height: 40px;
      border-radius: 16px;
      color: #fff;
    background-color: #00ea70;
  }
}
</style>
