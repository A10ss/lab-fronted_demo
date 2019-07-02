<template>
  <el-container>
    <el-header>
      <template>
        <el-carousel :interval="4000" type="card" height="360px">
          <el-carousel-item v-for="(img,index) in imgList" :key="index">
            <img v-bind:src="img.url">
          </el-carousel-item>
        </el-carousel>
      </template>
    </el-header>
    <el-main style="margin-top: 400px">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="11">
          <template>
            <el-table
              :data="NewsData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="新闻动态">
              </el-table-column>
              <el-table-column
                prop="name"
                label="">
              </el-table-column>
            </el-table>
          </template>
        </el-col>
        <el-col :span="11">
          <template>
            <el-table
              :data="NoticesData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="公式公告">
              </el-table-column>
              <el-table-column
                prop="name"
                label=""
              >
              </el-table-column>
            </el-table>
          </template>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HomePageTest',
  data () {
    return {
      NewsData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      NoticesData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      imgList: [
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562592677&di=e6118ed6269d409be511f9222fd1d4c6&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F54ebececeda0217648263cc944d6cfd413a17cdf2cc6-MGHS0y_fw658'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561997960834&di=c657bc2b6ba12824c932e15541cccaba&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5fdcbcac29b6266359fac43b45d67b7d4e1ea37717d8e-ZemOxt_fw658'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561997960834&di=677b91020ad46fd783f866b669bcd5b4&imgtype=0&src=http%3A%2F%2Fwww.chinapoesy.com%2FUploadFiles%2FPoesy%2F20141015_92b4978b-973a-472c-b4e8-33d89e01853f.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562069082126&di=f612147d7c720451e50bbfa60d5caa7f&imgtype=0&src=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F39900000%2F4k-wallpaper-animals-39982094-3840-2160.jpg'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
