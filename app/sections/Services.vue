<template>
    <section class="services-section" aria-labelledby="services-title" id="services">
        <div class="container">
            <h2 class="section-title" role="heading" id="services-title">Services</h2>
            <ul class="service-list">
                <li v-for="(service, i) in personalData.services" :key="i" class="service-card">
                    <i :class="'icon fa-solid fa-' + service.icon"></i>
                    <h3 class="title">{{ service.title }}</h3>
                    <p class="text">{{ service.text }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PersonalInformationDataType } from '~~/types';

const props = defineProps<{ personalData: PersonalInformationDataType }>();
</script>