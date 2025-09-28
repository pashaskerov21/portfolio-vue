<template>
    <section class="about-section" aria-labelledby="about-title" id="about">
        <div class="container">
            <h2 class="section-title" role="heading" id="about-title">About me</h2>
            <div class="about-wrapper">
                <figure>
                    <img :src="personalData.image" alt='Alipasha Askerov - Full stack Developer'></img>
                </figure>
                <div class="wrapper-right">
                    <article aria-labelledby="about-title" v-html="personalData.aboutText"></article>
                    <ul class="reports">
                        <li>
                            <Counter :value="2" title="experience" :speed="700" />
                        </li>
                        <li>
                            <Counter :value="25" title="projects" :speed="100" />
                        </li>
                    </ul>
                    <div class="about-content-items">
                        <a :href="personalData.cv" target="_blank" rel="noopener noreferrer" class="cv-button">
                            Review CV
                        </a>
                        <SocialIcons v-if="personalData.social" :personal-data="personalData" class-name="about-icons" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Counter from '~/components/Counter.vue';
import SocialIcons from '~/components/SocialIcons.vue';
import type { PersonalInformationDataType } from '~~/types';

const props = defineProps<{ personalData: PersonalInformationDataType }>();
</script>
