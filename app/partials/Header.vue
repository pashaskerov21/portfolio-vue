<template>
  <header>
    <nav class="general-nav" :class="{ fixed: fixedTop }">
      <div class="container">
        <div class="inner">
          <NuxtLink to="/">
            <Logo first-name="Alipasha" />
          </NuxtLink>
          <ul class="links-wrapper desktop d-none d-lg-flex">
            <li v-for="(menu, i) in menuData" :key="i" :style="{ animationDelay: i * 0.1 + 0.3 + 's' }">
              <a :href="'#' + menu.name" @click="scrollTo(`#${menu.name}`, $event)">{{ menu.name }}</a>
            </li>
          </ul>
          <div class="right">
            <a :href="personalData.cv" target="_blank" rel="noopener noreferrer" class="link-btn"
              aria-label="Alipasha Askerov CV">
              CV
            </a>

            <!-- Version Dropdown -->
            <div class="version-dropdown">
              <div class="active-version">
                <img src="/design/vue-logo.png" width="16" height="16" alt="Version Vue">
              </div>
              <ul class="version-menu">
                <li><a href="https://alipashaskerov.vercel.app/"><img
                      :src="currentTheme === 'dark' ? '/design/next-js-2.svg' : '/design/next-js.svg'" width="16"
                      height="16" alt="Version Next"></a></li>
                <li class="angular"><a href="https://alipashaskerov2.vercel.app/"><img src="/design/angular-logo.png"
                      width="16" height="16" alt="Version Angular"></a></li>
              </ul>
            </div>
            <!-- Theme Button -->
            <button class="theme-button" @click="toggleTheme" aria-label="Theme toggle button" type="button">
              <i v-if="currentTheme === 'dark'" class="pi pi-sun"></i>
              <i v-else class="pi pi-moon"></i>
            </button>


            <!-- Mobile Menu Button -->
            <button class="menu-button d-lg-none" @click="toggleMenu" :class="{ active: menuState !== 'closed' }"
              aria-label="Mobile Menu toggle button" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div class="header-progress" v-if="fixedTop" :style="{ width: scrollValue + '%' }"></div>
    </nav>
    <!-- Mobile Menu -->
    <div class="mobile-menu d-lg-none" :class="{
      active: menuState === 'half',
      'full-height': menuState === 'full',
      hide: menuState === 'closed'
    }" @touchstart="onDragStart" @touchmove="onDragMove" @touchend="onDragEnd">
      <div class="drag-indigator"></div>
      <div class="menu-inner">
        <div class="inner-top">
          <ul class="links-wrapper mobile">
            <li v-for="(menu, i) in menuData" :key="i" :style="{ animationDelay: i * 0.1 + 0.3 + 's' }">
              <a :href="'#' + menu.name" class="menu-link" @click="toggleMenu; scrollTo(`#${menu.name}`, $event)">
                {{ menu.name }}
              </a>
            </li>
          </ul>

          <SocialIcons v-if="personalData.social" class="menu-icons" :menuOpen="menuState !== 'closed'"
            :personalData="personalData" />
        </div>

        <div class="menu-footer">
          <div class="footer-row">
            <NuxtLink to="/">
              <Logo firstName="ALIPASHA" color="#fff" />
            </NuxtLink>
            <div class="right">
              <a :href="personalData.cv" target="_blank" rel="noopener noreferrer" class="link-btn"
                aria-label="Alipasha Askerov CV">
                CV
              </a>
              <button class="theme-button" @click="toggleTheme(); toggleMenu()" aria-label="Theme toggle button"
                type="button">
                <i v-if="currentTheme === 'dark'" class="pi pi-sun"></i>
                <i v-else class="pi pi-moon"></i>
              </button>
            </div>
          </div>

          <ul class="versions">
            <li><a href="https://alipashaskerov.vercel.app/">Next JS</a></li>
            <li><a href="https://alipashaskerov2.vercel.app/">Angular</a></li>
            <li><a href="https://alipashaskerov3.vercel.app/" class="active">Vue</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

import { useTheme } from '~/../composables/useTheme'
import Logo from '~/components/Logo.vue';
import type { MenuDataType, PersonalInformationDataType } from '~~/types';
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useScrollTo } from '~/../composables/useScrollTo'

const { scrollTo } = useScrollTo()
const props = defineProps<{
  personalData: PersonalInformationDataType;
  menuData: MenuDataType[];
}>();
const { currentTheme, toggleTheme } = useTheme()


// Menu State
const menuState = ref<"closed" | "half" | "full">("closed");
const startY = ref(0);
const currentY = ref(0);
const dragging = ref(false);

const toggleMenu = () => {
  menuState.value = menuState.value === "closed" ? "half" : "closed";
};

const onDragStart = (e: TouchEvent | MouseEvent) => {
  dragging.value = true;
  startY.value = getY(e);
};

const onDragMove = (e: TouchEvent | MouseEvent) => {
  if (!dragging.value) return;
  currentY.value = getY(e);
  const diff = startY.value - currentY.value;

  if (diff > 50) menuState.value = "full";
  if (diff < -50) menuState.value = "closed";
};

const onDragEnd = () => {
  dragging.value = false;
};

const getY = (e: TouchEvent | MouseEvent): number => {
  return e instanceof TouchEvent ? e.touches?.[0]?.clientY ?? 0 : (e as MouseEvent).clientY
}

// Click outside to close
const onClickOutside = (event: MouseEvent) => {
  const menu = document.querySelector(".mobile-menu");
  const button = document.querySelector(".menu-button");
  if (
    menuState.value !== "closed" &&
    menu &&
    !menu.contains(event.target as Node) &&
    button &&
    !button.contains(event.target as Node)
  ) {
    menuState.value = "closed";
  }
};

// Fixed header on scroll
const fixedTop = ref(false);
const scrollValue = ref(0);

const onScroll = () => {
  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollValue.value = Math.round((pos * 100) / calcHeight);
  fixedTop.value = pos > 100;
};

onMounted(() => {
  document.addEventListener("pointerdown", onClickOutside);
  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", onScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onClickOutside);
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("load", onScroll);
});

</script>