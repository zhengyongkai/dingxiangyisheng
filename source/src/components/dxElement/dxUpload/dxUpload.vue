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
            <img :src="file.src" :title="file.name" class="thumb" />
            <span class="af-upload-list__item-actions" @click.stop="deleteImg(i)">
             x
            </span>
          </div>
        </slot>
      </template>
      <div class="add-file" key="addFile" @click="chooseFile" v-if="!disabled">
        <div>
          <afIcon
            class="iconfont icon-camera"
            style="font-size: 40px;margin-right:0px"
          ></afIcon>
          <div>图片</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "dxUpload",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    },
    type: {
      //显示的是button 还是显示的是可预览的样式
      type: String,
      default: () => "upload"
    },
    btnText: {
      //button显示的字
      type: String,
      default: () => "上传文件"
    },
    limit: {
      //上传数量
      type: Number,
      default: Infinity //默认无限制
    },
    allowType: {
      type: String,
      default: "img"
    },
    accept: {
      type: Array,
      default: () => []
    },
    maxSize: {
      //限制单个文件大小（单位：M）
      type: Number,
      default: Infinity
    },
    empty: {
      type: String,
      default: "暂无文件数据"
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      fileList: [] /* 文件列表 */,
      fileTypes: ["jpeg", "png", "jpg"],
      // upFileData: []
    };
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
          status: 0, //'0: 为上传 1: 已上传 2. pending 3. 上传失败 '
          size: element.size,
          fileSource: element
        });
        // console.log(processedFile);
      });
      this.$emit("onChange", fileFilterList);
    },
    deleteImg(key){
      this.fileList.splice(key,1)
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
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;
    border-radius: 6px;
  }
  .thumb {
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 6px;
    z-index: 200;
    // float: left;
  }
}
.add-file {
  width: 100px;
  height: 100px;
  background: #f1f1f1;
  text-align: center;
  font-size: 12px;
  padding: 20px 0;
  box-sizing: border-box;
  color: #999;
  cursor: pointer;
}
.af-upload-list__item-actions {
  position: absolute;
  z-index: 999;
  border-radius: 10px;
  width: 16px;
  height: 16px;
  left: -5px;
  top: -5px;
  text-align: center;
  border:3px solid #fff;
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
