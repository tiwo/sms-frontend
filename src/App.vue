<script setup>

import { reactive, ref, provide, unref } from 'vue'

/// global state: ///////////////////////////////////////////////////////////
const api_key = ref(null)
provide('api_key', api_key)
const api_key_is_valid = ref(false)
provide('api_key_is_valid', api_key_is_valid)
/////////////////////////////////////////////////////////////////////////////

</script>

<template>
  <div class=App>
  <RouterView />
  </div>
</template>

<style>
</style>
