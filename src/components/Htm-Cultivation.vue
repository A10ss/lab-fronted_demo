<template>
  <div>
    <el-page-header @back="goBack" content="学生培养">
    </el-page-header>
    <p v-html="msg" style="text-align: left"></p>
  </div>
</template>

<script>
export default {
  name: 'Htm-Cultivation',
  methods: {
    goBack () {
      console.log('go back')
    }
  },
  data: function () {
    return {
      msg: '<p>测<strong>适用<span style="text-decoration: underline;">的文本你<span style="font-size: 24pt;">和文<span style="font-size: 36pt;">字，<span style="font-size: 12pt;"><span style="color: #27ae60; text-decoration: underline;">还带颜色</span></span></span></span></span></strong></p> <p style="text-align: center;"><strong><span style="text-decoration: underline;"><span style="font-size: 24pt;"><span style="font-size: 36pt;"><span style="font-size: 12pt;"><span style="color: #27ae60; text-decoration: underline;">我居中了</span></span></span></span></span></strong></p> <p style="text-align: center;">&nbsp;</p>'
    }
  }
}
</script>

<style scoped>

</style>
