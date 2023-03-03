<template>
  <q-dialog v-model="attrs">
    <q-card>
      <q-card-section>
        <p>Modal d'edition</p>
        <q-input v-model="title" label="title" outlined />
        {{ list }}
        <q-btn @click="handleSave" label="update list"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, useAttrs } from 'vue'

const title = ref('')
const attrs = useAttrs()

defineProps({
  list: {
    type: Object,
    default: () => ({}),
    required: true
  }
})

const handleSave = async () => {
  console.log('Save some data')
}
</script>
