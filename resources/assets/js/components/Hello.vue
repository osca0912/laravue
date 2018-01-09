<template>
    <div>
        <h1>Hello, OscarMx!</h1>
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog :visible.sync="visible" title="Hello OscarMx">
          <p>欢迎使用 Element</p>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    mounted: function() {
        //测试vue-resource 调用接口示例
        //豆瓣api示例，跨域请求
         this.$http.jsonp('https://api.douban.com//v2/movie/top250', {},{ 
              headers: {},
              emulateJSON: true }).then((response) => {
                this.movie = response.data;
                console.log(this.movie);
              });
        /*this.$http.get('url').then((response) => {
              var data = response.data
              console.log(data);
            }, (response) => {
              // error callback
            })
        this.$http.post('url').then((response) => {
          var data = response.data
          console.log(data);
        }, (response) => {
          // error callback
        })*/
    }
}
</script>

<style>
.hello {
    font-size: 2em;
    color: green;
}
</style>