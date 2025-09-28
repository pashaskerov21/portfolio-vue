<template>
  <ul v-if="personalData?.social" class="social-icons" :class="[className, { 'menu-active': menuOpen }]">
    <li>
      <a :href="personalData.social.github" target="_blank" rel="noopener noreferrer" aria-label="Github Account">
        <i class="pi pi-github"></i>
      </a>
    </li>
    <li>
      <a :href="personalData.social.linkedin" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Account">
        <i class="pi pi-linkedin"></i>
      </a>
    </li>
    <li>
      <a :href="personalData.social.whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp Number">
        <i class="pi pi-whatsapp"></i>
      </a>
    </li>
    <li>
      <a :href="`mailto:${personalData.social.mail}`" target="_blank" rel="noopener noreferrer" aria-label="Mail">
        <i class="pi pi-at"></i>
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
