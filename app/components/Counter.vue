<template>
  <div class="counter-item" ref="counterItem">
    <span class="counter-value">
      {{ count }}<span v-if="title === 'experience'">+</span>
    </span>
    <span class="counter-title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  value: number
  title: string
  speed: number
}

const props = defineProps<Props>()

const count = ref(0)
const counterItem = ref<HTMLElement | null>(null)
let started = false

const startCounter = () => {
  if (started) return
  started = true

  let startValue = 0
  let endValue = props.value
  let remainder = 0
  let step = 1
  const countSecond = props.speed

  if (endValue <= 100) {
    step = 1
  } else if (endValue > 100 && endValue <= 1000) {
    step = 10
    remainder = props.value % 10
    endValue = props.value - remainder
  } else if (endValue > 1000 && endValue < 5000) {
    step = 25
    remainder = props.value % 25
    endValue = props.value - remainder
  } else if (endValue >= 5000) {
    step = 50
    remainder = props.value % 50
    endValue = props.value - remainder
  }

  const counter = setInterval(() => {
    startValue += step
    if (startValue >= endValue) {
      clearInterval(counter)
      count.value = props.value
    } else {
      count.value = startValue
    }
  }, countSecond)
}

const onScroll = () => {
  if (!counterItem.value || started) return

  const offsetTop = counterItem.value.offsetTop
  const triggerPoint = offsetTop - window.innerHeight + 200

  if (window.scrollY > triggerPoint) {
    startCounter()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>