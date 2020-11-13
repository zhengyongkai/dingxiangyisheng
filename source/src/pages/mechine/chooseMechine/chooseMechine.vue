<template>
  <div class="km-page">
    <div>
         <dxSearchTabbar></dxSearchTabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
     
    };
  },
  methods:{
    goto(path){
      this.$router.push('/'+path)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.km-content {
}

.search {
  position: fixed;
  top: 58px;
  right: 12px;
  left: 12px;
}

</style>
