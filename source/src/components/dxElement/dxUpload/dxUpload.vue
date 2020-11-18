<template>
  <div class="overflow:hidden">
    <input
      type="file"
      class="file-input"
      ref="file"
      @change="fileChangeHandler"
      :accept="fileTypes"
    />

    <transition-group class="af-upload-list flex" tag="div" name="el-list">
      <template v-for="(file, i) in fileList">
        <slot :file="file">
          <div :key="'1' + i" class="img-parent">
            <img
              :src="file.src"
              :title="file.name"
              class="thumb"
              @click="imagePreviewShow = true"
            />
            <span
              class="af-upload-list__item-actions"
              @click.stop="deleteImg(i)"
            >
              <div>x</div>
            </span>
          </div>
        </slot>
      </template>
      <div class="add-file" key="addFile" @click="chooseFile" >
        <div class="filecontent">
          <afIcon
            class="iconfont icon-camera"
            style="font-size: 40px;maargin-right:0px"
          ></afIcon>
          <div>图片</div>
        </div>
      </div>
    </transition-group>
    <van-image-preview v-model="imagePreviewShow" :images="images">
    </van-image-preview>
  </div>
</template>
<script>
export default {
  name: "dxUpload",
  data() {
    return {
      dialogVisible: false,
      imagePreviewShow: false,
      dialogImageUrl: "",
      fileList: [] /* 文件列表 */,
      fileTypes: ["jpeg", "png", "jpg"],
      images: []
      // upFileData: []
    };
  },
  watch: {
    fileList: {
      deep: true, //深度监听
      handler: function() {
        this.images = []
        this.fileList.forEach(pic => {
            this.images.push(pic.src);
        });
      }
    }
  },
  computed: {},
  methods: {
    chooseFile() {
      this.$emit("chooseFile", "");
    },
    uploadFile() {
      this.$refs.file.click();
    },
    FilerFile(file, fileTypes, maxSize) {
      let fileList = [];
      file.forEach(element => {
        let index = element.name.lastIndexOf(".");
        let ext = element.name.slice(index + 1);
        if (!this.fileTypes.includes(ext)) {
          this.$toast("文件格式不对");
          return;
        }
        if (element.size > maxSize * 1024 * 1024) {
          this.$toast("文件太大");
          return;
        }
        fileList.push(element);
      });
      return fileList;
    },
    fileChangeHandler(e) {
      let fileFilterList = this.FilerFile(
        [...e.target.files],
        this.fileTypes,
        this.maxSize
      );
      console.error(JSON.stringify(fileFilterList));
      fileFilterList.map(element => {
        this.fileList.push({
          name: element.name,
          type: element.type,
          src: window.URL.createObjectURL(element),
          size: element.size,
          fileSource: element
        });

        // console.log(processedFile);
      });
      this.$emit("onChange", fileFilterList);
    },
    deleteImg(key) {
      this.fileList.splice(key, 1);
    }
  }
};
</script>
<style lang="scss" scope>
.file-input {
  display: none;
}
.af-upload-list {
  &.flex {
    display: flex;
    flex-wrap: wrap;
  }
  > div {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .img-parent {
    margin-bottom: 10px;
    position: relative;
    border-radius: 6px;
    width: 33%;
  }
  .thumb {
    width: 100px;
    display: block;
    margin: auto;

    height: 100px;
    cursor: pointer;
    border-radius: 6px;
    z-index: 200;
    // float: left;
  }
}
.add-file {
  width: 33%;

  text-align: center;
  font-size: 12px;

  box-sizing: border-box;
  color: #999;
  cursor: pointer;
  .filecontent {
    padding: 20px 0;
    box-sizing: border-box;
    height: 100px;
    background: #f1f1f1;
    width: 100px;
  }
}
.af-upload-list__item-actions {
  position: absolute;
  z-index: 999;
  border-radius: 10px;
  width: 16px;

  height: 16px;
  left: 0px;
  top: -5px;
  text-align: center;
  border: 3px solid #fff;
  background: #07c160;
  line-height: 15px;
  color: #fff;
  cursor: default;
  font-size: 16px;
}
.empty {
  text-align: left;
  color: rgba(#fff, 0.3);
}
</style>
