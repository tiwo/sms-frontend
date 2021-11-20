<script setup>
import { inject, unref, toRaw } from 'vue'

import { getBalance, getMessages } from '../backend/messagebird'

/// injections: /////////////////////////////////////////////////////////////
const api_key = inject('api_key')
const api_key_is_valid = inject('api_key_is_valid')
/////////////////////////////////////////////////////////////////////////////

const logBalance = async () => {
    const _api_key = unref(unref(api_key))
    console.log(await getBalance(_api_key))
}

const logMessages = async () => {
    const _api_key = unref(unref(api_key))
    console.log(await getMessages(_api_key))
}

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
        <q-btn label="fetch balance (to console)" @click=logBalance />
        <q-btn label="fetch message list (to console)" @click=logMessages />
    </div>
</div>
</template>

<style scoped>
.HelpfulHackingDisplay {
    background: #eff;
    border: 1px dashed greenyellow;
}
</style>