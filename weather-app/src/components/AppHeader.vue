<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const pages = [
  {
    id: 0,
    pagePath: '',
    pageName: 'Home',
  },
  {
    id: 1,
    pagePath: 'about',
    pageName: 'About',
  },
]
const languages = [
  {
    id: 0,
    flag: './fr.png',
    value: 'fr',
  },
  {
    id: 1,
    flag: 'en.png',
    value: 'en',
  },
  {
    id: 2,
    flag: 'de.png',
    value: 'de',
  }
]

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})

</script>

<template>
  <v-layout>
    <v-app-bar class="bg-theme-blue text-theme-neutral" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="xl">{{ $t('Header.title') }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-translate" variant="text" v-bind="props" class="xs"/>
        </template>
        <v-list>
          <v-list-item v-for="lang in languages" :key="lang.id" :value="lang.value">
            <v-list-item-title>
              <v-img :src="lang.flag" width="25"/>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <v-list lines="one">
        <v-list-item v-for="(page, id) in pages" :key="id" class="list-item">
          <RouterLink :to="`/${page.pagePath}`">{{ page.pageName }}</RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: 500px;">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style lang="scss" scoped>
.list-item {
  a {
    text-decoration: none;
  }
}
</style>
