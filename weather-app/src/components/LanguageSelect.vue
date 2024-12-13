<script setup lang="ts">
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
</script>

<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-translate" variant="text" v-bind="props" size="x-large" />
        </template>
        <v-list>
            <v-list-item v-for="lang in languages" :key="lang.id" :value="lang.value">
                <v-list-item-title>
                    <v-img :src="lang.flag" width="25" />
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
