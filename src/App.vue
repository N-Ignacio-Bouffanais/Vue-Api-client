<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <header>
    <Navigation />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<style lang="scss">
* {
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #202020;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
}
.button-submit{
  border: none;
    margin: 1rem auto;
    width: 30rem;
    height: 3.4rem;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    background-color: springgreen;
    font-weight: 500;
}
</style>
