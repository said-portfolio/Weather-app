<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSelect from './LanguageSelect.vue';
import {useMainStore} from '@/stores/mainStore'

const drawer = ref(false);
const group = ref(null);
const mainStore = useMainStore();

watch(group, () => {
  drawer.value = false
})

</script>
<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" size="x-large"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title v-once> ClimaNova </v-app-bar-title>

        <v-spacer></v-spacer>

        <LanguageSelect />
      </v-app-bar>

      <v-container fluid>
        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary
          class="list-item bg-theme-blue flex justify-center align-center">
          <v-list lines="one">
            <v-list-item v-for="(page, id) in mainStore.pages" :key="id">
              <RouterLink :to="`/${page.pagePath}`" class="text-sm justify-center text-theme-neutral">{{ page.pageName
                }}
              </RouterLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-container>
    </v-layout>
  </v-card>
</template>

<style lang="scss" scoped>
:deep(.v-toolbar) {
  display: flex !important;
  height: 50px !important;
  align-items: baseline !important;
  justify-content: center !important;
}

.v-navigation-drawer {
  top: 51px !important;
}

.list-item {
  a {
    text-decoration: none;
  }
}
</style>
