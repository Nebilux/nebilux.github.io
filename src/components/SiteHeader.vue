<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { navigation } from '@/data/site'
import BrandMark from './BrandMark.vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const updateScroll = () => {
  scrolled.value = window.scrollY > 24
}

const closeMenu = () => {
  menuOpen.value = false
}

watch(menuOpen, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'menu-is-open': menuOpen }">
    <div class="site-header__inner shell">
      <BrandMark />

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a
          class="nav-github"
          href="https://github.com/Nebilux"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <svg viewBox="0 0 14 14" aria-hidden="true">
            <path d="M3 11 11 3M5 3h6v6" />
          </svg>
        </a>
      </nav>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        @click="menuOpen = !menuOpen"
      >
        <span />
        <span />
      </button>
    </div>

    <Transition name="menu-fade">
      <div v-if="menuOpen" id="mobile-navigation" class="mobile-nav">
        <nav class="shell" aria-label="Mobile navigation">
          <a v-for="item in navigation" :key="item.href" :href="item.href" @click="closeMenu">
            {{ item.label }}
          </a>
          <a
            href="https://github.com/Nebilux"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
