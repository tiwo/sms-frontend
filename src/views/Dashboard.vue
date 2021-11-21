<script setup>
import { inject } from 'vue'
import AskForKey from '../components/AskForKey.vue'
import HelpfulHackingDisplay from '../components/HelpfulHackingDisplay.vue'

const api_key = inject('api_key')
const api_key_is_valid = inject('api_key_is_valid')

const change_api_key = new_key => {
  api_key_is_valid.value = false
  api_key.value = new_key
}

</script>

<template>
<div class=Dashboard>
    <AskForKey @change_api_key=change_api_key />
    <HelpfulHackingDisplay />
</div>
</template>