<template>
  <el-page-header @back="goBack" content="实验室风采">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Activities',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
