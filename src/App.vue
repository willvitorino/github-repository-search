<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: white;
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
</style>
