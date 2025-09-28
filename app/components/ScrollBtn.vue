<template>
  <button
    type="button"
    class="scroll-button"
    aria-label="Scroll top button"
    :class="{ visible: visible }"
    @click="scrollToTop"
  >
    <i class="pi pi-arrow-up"></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

const onWindowScroll = () => {
  const pos = document.documentElement.scrollTop
  visible.value = pos > 100
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onWindowScroll)
  window.addEventListener('load', onWindowScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onWindowScroll)
  window.removeEventListener('load', onWindowScroll)
})
</script>
