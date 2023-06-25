<script setup lang="ts">
import { allFilmsQuery, AllFilms } from '~/graphql/allFilms.js'
const { data, pending } = useAsyncQuery<AllFilms>(allFilmsQuery)
</script>
<template>
  <div>
    <h1>Nuxt Apollo</h1>
    <div v-if="data">
      <div v-for="film in data?.allFilms?.films" :key="film?.title">
        {{ film?.title }}
      </div>
    </div>
    <div v-if="pending">Loading...</div>
  </div>
</template>