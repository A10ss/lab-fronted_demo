<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="18">
      <el-container style="margin: 0px;">
        <el-header height="auto"><my-header/></el-header>
        <el-main height="auto" ><RouterView></RouterView></el-main>
        <el-footer height="auto"><my-footer></my-footer></el-footer>
      </el-container>
      <!--    <img src="./assets/logo.png">-->
      <!--    <router-view/>-->
    </el-col>
  </el-row>
</template>

<script>

import MyHeader from '@/views/MyHeader'
import MyBody from '@/views/MyBody'
import MyFooter from '@/views/MyFooter'

export default {
  name: 'App',
  components: {
    'my-header': MyHeader,
    'my-body': MyBody,
    'my-footer': MyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
