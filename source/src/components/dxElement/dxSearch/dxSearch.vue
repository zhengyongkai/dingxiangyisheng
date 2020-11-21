<template>
  <div class="wys-search">
    <div class="wx-index-search">
      <div class="icon">
        <img src="@/assets/icons/search.png" class="search-icon" />
      </div>
      <input v-model="search" placeholder="症状、医生、科室、医院、疾病" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'dxSearch',
  data(){
    return {
      search: ''
    }
  }
};
</script>
<style lang="scss" scoped>
.wx-index-search {
  display: flex;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  .icon {
    width: 30px;
    margin: 5px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    .search-icon {
      width: 20px;
      height: 20px;
      color: #e4e4e4;
    }
  }
  input {
    flex: 1;
    width: 100%;
    border: 0;
    outline: none; // 去除选中状态边框
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    background-color: transparent;
    cursor: text;
    margin: 0em;
    padding: 10px 0 10px 0;
    overflow: hidden;
  }
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #b8b7b7;
  text-decoration: underline;
  font-size: 16px;
}
</style>
