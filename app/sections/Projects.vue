<template>
    <section class="projects-section" id="projects" aria-labelledby="projects-title">
        <div class="container">
            <h2 class="section-title" id="projects-title">Projects</h2>
            <ul class="projects-wrapper">
                <li v-for="(project, i) in filteredProjects" :key="i" class="project-card">
                    <figure class="project-img">
                        <img :src="project.image" width="400" height="200" :alt="project.title + 'preview'">
                        <div class="layer">
                            <div class="badge">
                                {{ getCategoryName(project.category) }}
                            </div>
                            <ul class="project-skills">
                                <li v-for="(skill,i) in getProjectSkills(project.skills)" :key="i"
                                    class="skill-logo" :style="{ animationDelay: (i * 0.1 + 0.1) + 's' }">
                                    <img :src="skill.logo" width="20" height="20"
                                        :alt="project.title + ' ' + skill.title + 'logo'">
                                </li>
                            </ul>
                        </div>
                    </figure>
                    <div class="card-body">
                        <div class="heading">
                            <h3 class="title">{{ project.title }}</h3>
                            <div class="links">
                                <a v-if="project.previewLink" :href="project.previewLink"><i
                                        class="fa-solid fa-eye"></i></a>
                                <a v-if="project.githubLink" :href="project.githubLink"><i
                                        class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <NuxtLink to="/projects" v-if="page === 'home'" class="projects-link">See all projects</NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { ProjectDataType, SkillDataType } from '~~/types';

const props = defineProps<{ page: string, projectData: ProjectDataType[], skillData: SkillDataType[] }>();
const filteredProjects = ref<ProjectDataType[]>([]);
// project skills
const getProjectSkills = (skillNames: string[]) => {
    if (skillNames && skillNames.length > 0 && props.skillData.length > 0) {
        const matchedSkills = skillNames.map((item) => props.skillData.find((skill) => skill.title === item)).filter((matchedSkill) => matchedSkill !== undefined) as SkillDataType[];
        return matchedSkills;
    }
    return [];
}

//category name
const getCategoryName = (id: number): string => {
    switch (id) {
        case 1:
            return 'fullstack';
        case 2:
            return 'frontend';
        case 3:
            return 'backend';
        default:
            return 'frontend';
    }
}
onMounted(() => {
    if (props.projectData.length > 0) {
        filteredProjects.value = props.page === 'home' ? props.projectData.slice(0, 6) : props.projectData;
    }
})
</script>