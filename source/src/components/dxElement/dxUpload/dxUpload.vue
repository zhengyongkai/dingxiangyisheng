<template>
  <div class="overflow:hidden">
    <input
      type="file"
      class="file-input"
      ref="file"
      @change="fileChangeHandler"
     
    />

    <transition-group class="af-upload-list flex" tag="div" name="el-list">
      <template v-for="(file, i) in fileList">
        <slot :file="file">
          <div :key="'1' + i" class="img-parent">
            <img :src="file.src" :title="file.name" class="thumb" />
            <span class="af-upload-list__item-actions">
              <i class="el-icon-zoom-in"></i>
              <i class="el-icon-download"></i>
              <i class="el-icon-delete"></i>
            </span>
          </div>
        </slot>
      </template>
      <div class="add-file" key="addFile" @click="uploadFile" v-if="!disabled">
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
    fileList: {
      type: Array,
      default: () => []
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
      fileTypes: ["jpeg", "png","jpg"],
      maxSize: 100
      // upFileData: []
    };
  },
  computed: {},
  methods: {
    uploadFile() {
      this.$refs.file.click();
    },
    FilerFile(file, fileTypes, maxSize) {
      let fileList = [];
      file.forEach(element => {
        let index = element.name.lastIndexOf(".");
        let ext = element.name.slice(index + 1);
        if (!this.fileTypes.includes(ext)) {
           this.$toast('文件格式不对');
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
      this.scroll && this.scroll.refresh();
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
  border: 1px dashed #999;
  text-align: center;
  font-size: 12px;
  padding: 20px 0;
  box-sizing: border-box;
  color: #666;
  cursor: pointer;
}
.af-upload-list__item-actions {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  cursor: default;
  text-align: center;
  opacity: 0;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > i {
    cursor: pointer;
    color: rgba(#fff, 0.9);
  }
  &:hover {
    opacity: 1;
  }
}
.empty {
  text-align: left;
  color: rgba(#fff, 0.3);
}
</style>
