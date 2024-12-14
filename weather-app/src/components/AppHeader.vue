<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSelect from './LanguageSelect.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
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

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})

</script>

<template>
  <v-layout>
    <v-app-bar class="bg-theme-blue text-theme-neutral" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" size="x-large" />
      <v-toolbar-title class="text-xl">{{ t('Header.title') }}</v-toolbar-title>
      <v-spacer />
      <LanguageSelect />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary
      class="list-item bg-theme-blue">
      <v-list lines="one">
        <v-list-item v-for="(page, id) in pages" :key="id">
          <RouterLink :to="`/${page.pagePath}`" class="text-sm justify-center text-theme-neutral">{{ page.pageName }}
          </RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped>
:deep(.v-navigation-drawer__content) {
  display: inline-flex;
  justify-content: center;
}

.list-item {
  a {
    text-decoration: none;
  }
}
</style>
