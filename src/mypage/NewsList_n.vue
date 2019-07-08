<template>
  <div>
    <el-page-header @back="goBack" content="新闻动态">
    </el-page-header>
    <el-row type="flex" justify="center" style="margin-top: 2%">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-table
          @row-click="jumpToNewsDetails"
          :data="tableData"
          style="width: 100%"
          :show-header="false"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="490">
          </el-table-column>
          <el-table-column
            prop="title"
            label="姓名"
            width="490">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'NewsList-n'
  }
</script>

<style scoped>

</style>
