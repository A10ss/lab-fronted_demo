<template>
  <div>
    <el-container>
      <el-header height="107px" style="background: #e8ebec">
        <img style="margin-right: 100%" src="../assets/东油logo.png"/>
      </el-header>
      <el-main style="margin: 0 auto;height: auto;width: 1200px">
        <el-menu router
                 unique-opened
                 menu-trigger='click'
                 class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/" style="margin: 0px 20px 0px 80px">首页</el-menu-item>
          <el-menu-item index="/Cul" style="margin: 0px 35px 0px 20px">学生培养</el-menu-item>
          <el-menu-item index="/Reg" style="margin: 0px 35px 0px 20px">规章制度</el-menu-item>
          <el-menu-item index="/DataTable" style="margin: 0px 35px 0px 20px">团队成员</el-menu-item>
          <el-menu-item index="/Act" style="margin: 0px 35px 0px 20px">实验室风采</el-menu-item>
          <el-menu-item index="/Res" style="margin: 0px 35px 0px 20px">研究方向</el-menu-item>
          <el-submenu>
            <template slot="title" style="margin: 0px 20px 0px 20px">成果展示</template>
            <el-menu-item index="/Pro">研究项目</el-menu-item>
            <el-menu-item index="/Rew">获奖成果</el-menu-item>
            <el-menu-item index="/Pat">专利成果</el-menu-item>
            <el-menu-item index="/The">论文巨著</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
