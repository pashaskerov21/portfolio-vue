<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">404 - Səhifə tapılmadı</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Ana səhifəyə qayıt</NuxtLink>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>