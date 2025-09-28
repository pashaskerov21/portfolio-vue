<template>
    <section class="education-section" id="education" aria-labelledby="education-title">
    <div class="container">
        <h2 class="section-title" id="education-title">Education</h2>
        <ul class="edu-wrapper">
            <li v-for="(edu,i) in personalData.education" :key="i" class="edu-card">
                <span class="score">{{edu.score}}</span>
                <div class="card-header">
                    <i class="fa-solid fa-building-columns"></i>
                    <h3 class="title">{{edu.univercity}}</h3>
                </div>
                <article class="card-text">
                    <p><span>Faculty</span>: {{edu.faculty}}</p>
                    <p><span>Field of study</span>: {{edu.field}}</p>
                </article>
                <div class="card-footer">
                    <span class="edu-degree">{{edu.degree}}</span>
                    <span class="edu-date">{{edu.start}} - {{edu.end}}</span>
                </div>
            </li>
        </ul>
    </div>
</section>
</template>

<script setup lang="ts">
import type { PersonalInformationDataType } from '~~/types';

const props = defineProps<{ personalData: PersonalInformationDataType }>();
</script>
