<template>
    <section class="experience-section" aria-labelledby="experience-title" id="experience">
        <div class="container">
            <h2 class="section-title" role="heading" id="experience-title">Experience</h2>
            <ul class="experience-wrapper">
                <li v-for="(exp,i) in personalData.experience" :key="i" class="experience-card">
                    <div class="left">
                        <div class="left-header">
                            <h3 class="position">{{ exp.position }}</h3>
                            <div class="date">
                                {{ exp.start }} - {{ exp.end }}
                            </div>
                        </div>
                        <div class="left-footer">
                            <h4 class="company">{{ exp.company }}</h4>
                            <div class="location">{{ exp.location }}</div>
                        </div>
                    </div>
                    <article class="card-body">
                        <p>{{ exp.description }}</p>
                        <ul>
                            <li v-for="(item,i) in exp.responsibilities" :key="i">
                                {{ item }}
                            </li>
                        </ul>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PersonalInformationDataType } from '~~/types';

const props = defineProps<{ personalData: PersonalInformationDataType }>();
</script>