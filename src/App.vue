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
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-auto-rows: 14rem;
  gap: 2rem;
  width: 90vw;
  margin: 2rem auto;

  .card {
    border-radius: 0.8rem;
    border-style: solid;
    border-color: #171717;
    margin: 1rem auto;
    display: grid;
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    padding: 1.5rem;

    p {
      font-size: 1.4rem;
      font-weight: 600;

      span {
        font-weight: 300;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
