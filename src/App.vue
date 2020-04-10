<template>
  <div id="app">
    <button @click="createNotice">createNotice</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    createNotice (opts) {
      const instance = this.$noticeConstructor({
        content: Math.random().toString(16).toUpperCase().slice(-4),
        closed: Math.random().toString(16).toUpperCase().slice(-4)
      })
      instance.createDom()
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
