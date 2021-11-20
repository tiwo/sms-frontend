<script setup>
import { inject, unref } from 'vue'

/// injections: /////////////////////////////////////////////////////////////
const api_key = inject('api_key')
const api_key_is_valid = inject('api_key_is_valid')
/////////////////////////////////////////////////////////////////////////////

</script>

<template>
<div class="HelpfulHackingDisplay">
    <h3>Hacking Display</h3>
    <div>
        api_key: {{ JSON.stringify(unref(api_key)) }}
    </div>
    <div>
        api_key_is_valid: {{ JSON.stringify(unref(api_key_is_valid)) }}
    </div>
    <div>
        
    </div>
</div>
</template>

<style scoped>
.HelpfulHackingDisplay {
    background: #eff;
    border: 1px dashed greenyellow;
}
</style>