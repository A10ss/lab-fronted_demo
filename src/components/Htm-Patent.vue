<template>
  <el-page-header @back="goBack" content="专利成果">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Patent',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
