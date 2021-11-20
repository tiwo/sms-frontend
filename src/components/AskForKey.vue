<script setup>
import { ref, inject, defineEmits  } from 'vue'

const emit = defineEmits(['change_api_key'])

const show = ref(true)

const valueEntered = ref(null)

const log_before = (ev) => { console.log('#before', ev) }

const submit = (ev) => {
    console.log('"submit":', ev, valueEntered)
    emit('change_api_key', valueEntered)
}

</script>


<template>
<div class="AskForKey">
    <q-dialog v-model="show" persistent @before-hide=submit>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Your Messagebird API key:</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input dense v-model=valueEntered autofocus @keyup.enter="show=false" />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="submit" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</div>
</template>