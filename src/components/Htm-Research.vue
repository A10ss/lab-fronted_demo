<template>
  <el-page-header @back="goBack" content="研究方向">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Research',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
