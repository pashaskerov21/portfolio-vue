<template>
    <Projects v-if="skillData.length > 0 && projectData.length > 0" :skill-data="skillData" :project-data="projectData" page="projects" />
    <Services v-if="personalData" :personal-data="personalData" />
    <Contact/>
</template>

<script setup lang="ts">
import Contact from '~/sections/Contact.vue';
import Projects from '~/sections/Projects.vue';
import Services from '~/sections/Services.vue';
import type { PersonalInformationDataType, ProjectDataType, SkillDataType } from '~~/types'


const props = defineProps<{
    personalData: PersonalInformationDataType,
    skillData: SkillDataType[],
    projectData: ProjectDataType[],
}>()
</script>