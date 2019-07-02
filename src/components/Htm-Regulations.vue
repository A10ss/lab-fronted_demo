<template>
  <el-page-header @back="goBack" content="规章制度">
  </el-page-header>
</template>

<script>
export default {
  name: 'Htm-Regulations',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style scoped>

</style>
