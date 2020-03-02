<template>
  <div>
    {{ count }}
    <b-button variant="success" @click="increment">Increment</b-button>
    <div>
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>

<style>
  
</style>