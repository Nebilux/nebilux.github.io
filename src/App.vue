<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AboutSection from '@/components/AboutSection.vue'
import CallToAction from '@/components/CallToAction.vue'
import CommunitySection from '@/components/CommunitySection.vue'
import HeroSection from '@/components/HeroSection.vue'
import PrinciplesSection from '@/components/PrinciplesSection.vue'
import PrivacyDialog from '@/components/PrivacyDialog.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'

document.documentElement.classList.add('js')

const privacyDialog = ref<{ open: () => void } | null>(null)
const toast = ref('')
let toastTimer: number | undefined
let observer: IntersectionObserver | undefined

const showToast = (message: string) => {
  toast.value = message
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => {
    toast.value = ''
  }, 4200)
}

onMounted(() => {
  const revealItems = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach((item) => item.classList.add('is-visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      })
    },
    { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
  )

  revealItems.forEach((item) => observer?.observe(item))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.clearTimeout(toastTimer)
})
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main>
      <HeroSection @pending="showToast" />
      <AboutSection />
      <PrinciplesSection />
      <ProjectsSection />
      <CommunitySection @pending="showToast" />
      <CallToAction @pending="showToast" />
    </main>
    <SiteFooter @pending="showToast" @privacy="privacyDialog?.open()" />
    <PrivacyDialog ref="privacyDialog" />

    <Transition name="toast">
      <div v-if="toast" class="site-toast" role="status">
        <span aria-hidden="true" />
        {{ toast }}
      </div>
    </Transition>
  </div>
</template>
