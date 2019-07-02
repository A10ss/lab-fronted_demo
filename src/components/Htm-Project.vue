<template>
  <el-page-header @back="goBack" content="研究项目">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Project',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
