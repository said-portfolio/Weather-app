<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';

</script>

<template>
  <v-container>
    <AppHeader />

    <v-layout>
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>

  </v-container>
</template>

<style lang="scss" scoped>
.v-main {
  height: 500px;
}
</style>
