<template>
    <section v-if="personalData" class="banner-section" aria-labelledby="banner-title">
        <div class="container">
            <div class="banner-wrapper">
            <div class="content">
                <h1 class="title" id="banner-title">{{personalData.home.title}}</h1>
                <h2 class="subtitle" :data-title="personalData.home.animationTitle">
                    {{personalData.home.animationTitle}}
                </h2>
                <ul class="versions">
                    <li>
                        <a href="https://alipashaskerov.vercel.app/">Next JS</a>
                    </li>
                    <li>
                        <a href="https://alipashaskerov2.vercel.app/">Angular</a>
                    </li>
                    <li>
                        <a href="https://alipashaskerov3.vercel.app/" class="active">Vue</a>
                    </li>
                </ul>
            </div>
            <figure class="content-img">
                <img src="/design/vue-logo.png" alt="Alipasha Askerov - Portfolio Vue">
            </figure>
        </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PersonalInformationDataType } from '~~/types';

const props = defineProps < { personalData: PersonalInformationDataType } > ();
</script>