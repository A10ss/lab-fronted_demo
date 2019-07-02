<template>
  <el-page-header @back="goBack" content="论文巨著">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Thesis',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
