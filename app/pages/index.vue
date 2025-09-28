<template>
    <Banner v-if="personalData" :personal-data="personalData" />
    <About v-if="personalData" :personal-data="personalData" />
    <Services v-if="personalData" :personal-data="personalData" />
    <Experience v-if="personalData" :personal-data="personalData" />
    <Skills v-if="skillData.length > 0" :skill-data="skillData" />
    <Projects v-if="skillData.length > 0 && projectData.length > 0" :skill-data="skillData" :project-data="projectData" page="home" />
    <Education v-if="personalData" :personal-data="personalData" />
    <Contact/>
</template>

<script setup lang="ts">
import About from '~/sections/About.vue';
import Banner from '~/sections/Banner.vue';
import Contact from '~/sections/Contact.vue';
import Education from '~/sections/Education.vue';
import Experience from '~/sections/Experience.vue';
import Projects from '~/sections/Projects.vue';
import Services from '~/sections/Services.vue';
import Skills from '~/sections/Skills.vue';
import type { PersonalInformationDataType, ProjectDataType, SkillDataType } from '~~/types'


const props = defineProps<{
    personalData: PersonalInformationDataType,
    skillData: SkillDataType[],
    projectData: ProjectDataType[],
}>()
</script>