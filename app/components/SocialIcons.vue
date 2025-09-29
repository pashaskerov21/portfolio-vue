<template>
  <ul v-if="personalData?.social" class="social-icons" :class="[className, { 'menu-active': menuOpen }]">
    <li>
      <a :href="personalData.social.github" target="_blank" rel="noopener noreferrer" aria-label="Github Account">
        <i class="fa-brands fa-github"></i>
      </a>
    </li>
    <li>
      <a :href="personalData.social.linkedin" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Account">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
    </li>
    <li>
      <a :href="personalData.social.whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp Number">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </li>
    <li>
      <a :href="`mailto:${personalData.social.mail}`" target="_blank" rel="noopener noreferrer" aria-label="Mail">
        <i class="fa-solid fa-at"></i>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PersonalInformationDataType } from '~/../types'

defineProps<{
  personalData: PersonalInformationDataType
  menuOpen?: boolean
  className?: string
}>()
</script>
