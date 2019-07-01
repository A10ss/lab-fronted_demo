<template>
    <div>
      <span>hhhh</span>
      <button @click="getOne"></button>
    </div>
</template>

<script>
import {testAPI as getooo} from '../api/test'
export default {
  name: 'test',
  data() {
    reqbody: {
      age: 17;
      name: 'la'
    }
  }
  methods: {
    getOne: function (reqbody) {
      getooo(body)
    }
  }
}
</script>

<style scoped>

</style>
