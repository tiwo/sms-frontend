<script setup>

import { reactive, ref, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelpfulHackingDisplay from './components/HelpfulHackingDisplay.vue'


/// global state: ///////////////////////////////////////////////////////////
const api_key = ref(null)
provide('api_key', api_key)
/////////////////////////////////////////////////////////////////////////////


</script>

<template>
  <HelpfulHackingDisplay />
  <hr />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

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
