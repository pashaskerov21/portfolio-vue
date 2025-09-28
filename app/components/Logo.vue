<template>
    <div class="logo-wrapper" :style="{ color }" :class="{ infinite: infinite }">
        <div v-if="firstName">
            <span v-for="(letter, i) in getFirstNameLetters" :key="'first-' + i"
                :style="{ animationDelay: (i * animationDelay) + 's' }">
                {{ letter }}
            </span>
        </div>
        <div v-if="lastName">
            <span v-for="(letter, i) in getLastNameLetters" :key="'last-' + i" :style="{
                animationDelay: ((getFirstNameLetters.length * animationDelay) + (i * animationDelay)) + 's'
            }">
                {{ letter }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    firstName?: string,
    lastName?: string,
    color?: string,
    infinite?: boolean,
}

const props = defineProps<Props>();

const animationDelay = 0.08;

const getFirstNameLetters = computed(() =>
    props.firstName ? props.firstName.split("") : []
);

const getLastNameLetters = computed(() =>
    props.lastName ? props.lastName.split("") : []
);
</script>