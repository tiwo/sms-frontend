<script setup>

import { reactive, ref, provide, unref } from 'vue'

import HelpfulHackingDisplay from './components/HelpfulHackingDisplay.vue'
import AskForKey from './components/AskForKey.vue'


/// global state: ///////////////////////////////////////////////////////////
const api_key = ref(null)
provide('api_key', api_key)
const api_key_is_valid = ref(false)
provide('api_key_is_valid', api_key_is_valid)
/////////////////////////////////////////////////////////////////////////////

const change_api_key = new_key => {
  console.log('*cak*', JSON.stringify(unref(new_key)))
  api_key_is_valid.value = false
  api_key.value = new_key
}

</script>

<template>
  <AskForKey @change_api_key=change_api_key />
  <HelpfulHackingDisplay />
</template>

<style>
</style>
