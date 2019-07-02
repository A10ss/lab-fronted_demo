<template>
  <el-page-header @back="goBack" content="获奖成果">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Reward',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
