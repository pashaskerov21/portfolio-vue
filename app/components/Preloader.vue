<template>
    <div v-if="loading" class="preloader">
        <div class="logo-item" :class="{ show: showLogo }">
            <Logo firstName="Alipasha" lastName="Askerov" />
        </div>
        <div class="percent" :class="{ complete: percent === 100, hide: showLogo }"
            :style="{ background: `conic-gradient(#42B883 ${percent}%, #fff ${percent}%)` }">
            <span>{{ percent }}%</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'

const loading = ref(true)
const percent = ref(0)
const showLogo = ref(false)
let counterInterval: number | null = null
let started = false

const router = useRouter()

const startPreloader = () => {
    loading.value = true
    percent.value = 0
    showLogo.value = false
    started = false

    if (counterInterval) clearInterval(counterInterval)
    percentCounter()
}

const percentCounter = () => {
    if (started) return
    started = true

    let start = 0
    const end = 100

    counterInterval = window.setInterval(() => {
        start += 1
        percent.value = start

        if (start >= end) {
            if (counterInterval) clearInterval(counterInterval)
            counterInterval = null

            setTimeout(() => {
                showLogo.value = true

                setTimeout(() => {
                    loading.value = false
                    started = false
                }, 1500)
            }, 300)
        }
    }, 10)
}

// Watch router changes to restart preloader
let stopWatch = router.afterEach(() => {
    startPreloader()
})

onMounted(() => {
    startPreloader()
})

onBeforeUnmount(() => {
    if (counterInterval) clearInterval(counterInterval)
    stopWatch() // stop the router watcher
})
</script>