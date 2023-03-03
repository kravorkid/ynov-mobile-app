<template>
  <q-page class="q-pa-lg">
    <q-btn
      @click="() => router.push({ name: 'list-view', params: { id: '1234567' } })"
      label="to list item"
    />
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
