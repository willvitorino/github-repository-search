<template>
  <div id="app">
    <div v-if="loading" class="d-flex flex-row justify-content-center align-items-center container-spinner">
       <b-icon icon="three-dots" animation="cylon throb" font-scale="10"></b-icon>
    </div>
    <router-view v-show="!loading" />
  </div>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,300;1,400;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: white;

  overflow-x: hidden;
}

input[type=text], button {
  border-radius: 0px;
  border: solid black 2px;
  // height: 2rem;
  text-align: center;
}

button {
  background-color: black;
  color: white;
  height: 2.25rem;
  padding: 0px 1rem;
}
.container-spinner {
  height: 100%;
}
.pointer {
  cursor: pointer;
}
</style>
