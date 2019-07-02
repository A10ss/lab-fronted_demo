<template>
  <el-page-header @back="goBack" content="学生培养">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Cultivation',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
