<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';

</script>

<template>
  <AppHeader />
  <v-main style="height: 500px;">
    <RouterView />
  </v-main>
</template>

<style lang="scss" scoped>
</style>
