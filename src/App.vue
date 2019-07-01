<template>
  <div id="app">
    <el-container>
      <el-header><my-header/></el-header>
      <el-main><mybody/></el-main>
      <el-footer><myfooter></myfooter></el-footer>
    </el-container>
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
  </div>
</template>

<script>
import MyHeader from '@/views/MyHeader'
import Body from '@/views/Body'
import Footer from '@/views/Footer'

export default {
  name: 'App',
  components: {
    MyHeader,
    'mybody': Body,
    'myfooter': Footer
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
