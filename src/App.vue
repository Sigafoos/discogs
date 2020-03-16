<template>
  <div id="app">
    <h1>Discogs tracker</h1>
    <Discogs v-if="token" :token="token" />
    <TokenForm v-else @submitted="save" />

  </div>
</template>

<script>
import TokenForm from './components/TokenForm.vue'
import Discogs from './components/Discogs.vue'

export default {
  name: 'App',
  components: {
    Discogs,
    TokenForm
  },
  data: function () {
    return {
        token: undefined
    };
  },
  created: function () {
    this.token = localStorage.getItem('discogs_token')
  },
  methods: {
    save: function (token) {
    console.log(token);
        this.token = token;
        localStorage.setItem('discogs_token', token);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
