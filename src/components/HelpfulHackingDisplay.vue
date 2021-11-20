<script setup>
import { inject } from 'vue'

const api_key = inject('api_key')
</script>

<template>
<div class="HelpfulHackingDisplay">
    <h3>Hacking Display</h3>
    <div>
        {{api_key}}
    </div>
</div>
</template>

<style scoped>
.HelpfulHackingDisplay {
    background: #eff;
    border: 1px dashed greenyellow;
}
</style>