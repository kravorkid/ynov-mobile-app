<template>
  <div class="q-pa-md">
    <h1>List page</h1>
    <p class="text-bold">Identifiant: {{ id }}</p>
    <q-btn label="to homepage" @click="() => router.push({ name: 'home' })"/>
    <div v-for="(list, index) in lists" :key="index">
      <q-card>
        <q-card-section>
          <p class="text-bold">{{ list.title }}</p>
          <q-btn label="Show list" @click="() => router.push({ name: 'list-view', params: { id: list._id } })"/>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useListStore } from 'stores/list-store'
import { onMounted, computed } from 'vue'
const route = useRoute()
const router = useRouter()
const listStore = useListStore()
const lists = computed(() => listStore.lists)

onMounted(async () => {
  await listStore.getLists()
})

const id = computed(() => route.params.id)
console.log({ route, router })
</script>
