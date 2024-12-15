<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import type { LANGUAGE_MODEL } from '@/models/LanguagesModel';
const { locale } = useI18n();

onMounted(() => {
    const defaultLanguage = localStorage.getItem('currentLanguage') ? localStorage.getItem('currentLanguage')! : 'en';
    if (defaultLanguage?.length) {
        currentLanguage.value = defaultLanguage;
        locale.value = defaultLanguage;
    }
});
const languages: LANGUAGE_MODEL[] = [
    {
        id: 0,
        language: 'fr',
    },
    {
        id: 1,
        language: 'en',
    },
    {
        id: 2,
        language: 'de',
    }
]

const menuVisible = ref(false);
const currentLanguage = ref("en");
const getCurrentLanguage = (selectedLanguage: string) => {
    currentLanguage.value = selectedLanguage;
    if (currentLanguage.value) {
        localStorage.setItem("currentLanguage", currentLanguage.value);
    }
    locale.value = localStorage.getItem('currentLanguage')!;
    menuVisible.value = false;
}
</script>

<template>
    <v-menu v-model="menuVisible">
        <template #activator="{ props }">
            <v-btn icon v-bind="props">
                <v-icon>mdi-translate</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="item in languages" :key="item.id" @click="getCurrentLanguage(item.language)"
                class="languages-list-item">
                <v-avatar class="width-30 height-30">
                    <v-img :src="`/${item.language}.png`" :alt="item.language" />
                </v-avatar>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<style lang="scss" scoped>
.languages-list-item {
    padding-inline: 10px !important;
}
</style>
