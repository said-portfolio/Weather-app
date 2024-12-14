<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const currentLanguage = ref<string>();
interface LANGUAGE {
    id: number,
    language: string,
}
onMounted(() => {
    const defaultLanguage = localStorage.getItem('currentLanguage') ? localStorage.getItem('currentLanguage')! : 'en';
    if (defaultLanguage?.length) {
        currentLanguage.value = defaultLanguage;
        locale.value = defaultLanguage;
    }
});
const languages: LANGUAGE[] = [
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
const getCurrentLanguage = (selectedLanguage: string) => {
    currentLanguage.value = selectedLanguage;
    if (currentLanguage.value) {
        localStorage.setItem("currentLanguage", currentLanguage.value);
    }
    locale.value = localStorage.getItem('currentLanguage')!;
}
</script>

<template>
    <v-select :items="languages" item-title="language" item-value="language" v-model="currentLanguage"
        @update:modelValue="getCurrentLanguage"/>
</template>
