<template>
  <Preloader />
  <ScrollBtn />
  <SocialIcons v-if="personalData" class-name="fixed-icons" :personal-data="personalData"></SocialIcons>
  <Header v-if="personalData && menuData" :personalData="personalData" :menuData="menuData"></Header>
  <main v-if="personalData && menuData">
    <NuxtPage :personalData="personalData" :skillData="skillData" :projectData="projectData" />
  </main>
  <Footer v-if="personalData && menuData"></Footer>
</template>

<script setup lang="ts">
import Header from '~/partials/Header.vue'
import Footer from '~/partials/Footer.vue'
import { useApi } from '~/../composables/useApi'
import type { MenuDataType, PersonalInformationDataType, ProjectDataType, SkillDataType } from '~/../types'
import Preloader from '~/components/Preloader.vue'
import ScrollBtn from '~/components/ScrollBtn.vue'

const { getInformation, getMenu, getSkills, getProjects } = useApi()

// SSR friendly data fetch
const { data: personalData } = await useAsyncData<PersonalInformationDataType>('personal', getInformation)
const { data: menuData } = await useAsyncData<MenuDataType[]>('menu', getMenu)
const { data: skillData } = await useAsyncData<SkillDataType[]>('skills', getSkills)
const { data: projectData } = await useAsyncData<ProjectDataType[]>('projects', getProjects)
// SEO və Meta Tag-lar
watchEffect(() => {
  if (personalData.value) {
    useHead({
      title: personalData.value.title,
      meta: [
        { name: 'description', content: personalData.value.description },
        { name: 'keywords', content: personalData.value.keywords },
        { name: 'author', content: personalData.value.author_name },

        // Open Graph
        { property: 'og:title', content: personalData.value.title },
        { property: 'og:description', content: personalData.value.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: personalData.value.image },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: personalData.value.title },
        { name: 'twitter:description', content: personalData.value.description },
        { name: 'twitter:image', content: personalData.value.image },
        { name: 'twitter:creator', content: personalData.value.author_name }
      ],
      link: [
        { rel: 'canonical', href: personalData.value.author_url },
        { rel: 'author', href: personalData.value.author_url },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        }
      ]
    })
  }
})
</script>