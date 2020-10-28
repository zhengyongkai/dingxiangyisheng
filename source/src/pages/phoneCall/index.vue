<template>
  <div>
    <div class="km-title">
      <dxHeader :titleName="'电话急诊'"></dxHeader>
    </div>
    <dxScroll class="km-body" ref="scroll">
      <div>
        <div class="km-advise">
          <img src="@/assets/advise/dhjz.png" />
        </div>
        <div class="km-form">
          <div class="km-textarea">
            <textarea placeholder="请输入你的具体病症。"></textarea>
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
            <dxUpload @onChange="change"></dxUpload>
          </div>
          {{ a }}
        </div>
      </div>
    </dxScroll>
    <div class="km-footer">
      <div class="km-footer-submit" @click="takePhoto">
        下一步
      </div>
    </div>
  </div>
</template>
<script>
import { takePhoto } from "@u/android";
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
      ],
      a: "xx"
    };
  },
  components: {},
  watch: {},
  methods: {
    // takePhoto() {
    //   var cameraOptions = {
    //     quality: 75,
    //     destinationType: Camera.DestinationType.DATA_URL,
    //     sourceType: Camera.PictureSourceType.CAMERA, //照相机类型
    //     allowEdit: true,
    //     encodingType: Camera.EncodingType.JPEG,
    //     targetWdith: 100,
    //     targetHeight: 100,
    //     popoverOptions: CameraPopoverOptions,
    //     saveToPhotoAlbum: false
    //   };
    //   console.log("调用拍照接口");
    //   navigator.camera.getPicture(
    //     onCameraSuccess,
    //     onCameraError,
    //     cameraOptions
    //   );
    //   function onCameraSuccess(imageURL) {
    //     console.log("onCameraSuccess:" + imageURL);
    //     this.a = 'dddd';
    //   }
    //   function onCameraError(e) {
    //     this.a = e;
    //   }
    // },
    change() {
      console.log(this.$refs.scroll.refresh());
    },
  }
};
</script>
<style lang="scss" scoped>
.km-title {
  height: 46px;
}
.km-body {
  position: absolute;
  bottom: 50px;
  overflow: hidden;
  padding: 0;
  top: 46px;
  .km-advise {
    img {
      width: 100%;
      height: 100%;
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
.km-footer {
  position: fixed;
  border-top: 1px solid #eee;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 50px;
  .km-footer-submit {
    margin: 5px 12px;
    height: 40px;
    line-height: 40px;
    border-radius: 16px;
    color: #fff;
    background-color: #00ea70;
  }
}
</style>
