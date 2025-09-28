<template>
    <Banner v-if="personalData" :personal-data="personalData" />
    <About v-if="personalData" :personal-data="personalData" />
</template>

<script setup lang="ts">
import About from '~/sections/About.vue';
import Banner from '~/sections/Banner.vue';
import type { PersonalInformationDataType } from '~~/types'

const props = defineProps<{
    personalData: PersonalInformationDataType
}>()
</script>