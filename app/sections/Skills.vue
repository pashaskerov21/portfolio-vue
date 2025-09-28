<template>
    <section class="skills-section" id="skills" aria-labelledby="skills-title">
        <div class="container">
            <h2 class="section-title" id="skills-title">Skills</h2>
            <ul class="skills-wrapper">
                <li v-for="(skill, i) in skillData" :key="i" class="skill-card">
                    <img :src="skill.logo" width="70" height="70" :alt="skill.title + 'logo'">
                    <h3 class="title">{{ skill.title }}</h3>
                    <div class="border">
                        <span :style="{ backgroundColor: skill.color }"></span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { SkillDataType } from '~~/types';

const props = defineProps<{ skillData: SkillDataType[] }>();
</script>