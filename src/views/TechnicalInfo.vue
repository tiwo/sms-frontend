<script setup>
import { ref } from 'vue';
import HelpfulHackingDisplay from '../components/HelpfulHackingDisplay.vue'

const tab = ref('buildinfo');

const build_info = JSON.stringify(import.meta.env, null, 2)

</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="state" label="state" />
          <q-tab name="buildinfo" label="build info" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated >

          <q-tab-panel name="state" >
            <div class="text-h6">App state:</div>
            <HelpfulHackingDisplay />
          </q-tab-panel>

          <q-tab-panel name="buildinfo">
            <div class="text-h6">Build information:</div>
            <pre>{{ build_info }}</pre>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>