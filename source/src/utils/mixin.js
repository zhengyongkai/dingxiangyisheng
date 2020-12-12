import $http from "@u/http";
export default {
  data() {
    return {
      form: {},
      tableData: [], //表格数据
      page: {
        //分页数据
        pageSize: 10,
        pageNum: 1
      },
      pullup: true,
      scrollText: 0 //加载状态，
    };
  },
  methods: {
    //获取数据

    async getList(callback) {
      if (!this.getTableURL) return; //需配置请求地址
      let that = this;
      this.scrollText = 1;
      await $http
        .get(that.getTableURL, {
          ...this.form,
          pageNo: that.page.pageNum
        })
        .then(res => {
          //    console.log(res)
          let lastPage =    parseInt(res.data.data.totalRecord / that.page.pageSize) + 1;
          if (res.data.code == "0000") {
            if (
              lastPage >= that.page.pageNum
            ) {
              if(lastPage == that.page.pageNum){
                that.scrollText = 2;
              }else{
                that.scrollText =  0
              }
              callback(res.data.data.list);
            } else {
              that.scrollText = 2;
            }
          } else {
            // callback(res.msg);
            that.scrollText = 2;
          }
        }).catch(()=>{
          that.scrollText = 2;
        });
    }
  }
};
