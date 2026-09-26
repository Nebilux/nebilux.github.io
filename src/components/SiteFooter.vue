<script setup lang="ts">
import BrandMark from './BrandMark.vue'

defineEmits<{
  privacy: []
  pending: [message: string]
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="shell site-footer__main">
      <div class="site-footer__brand">
        <BrandMark small />
        <p>Illuminate the Unknown.</p>
        <p lang="zh-CN">照见未知，创造可能。</p>
      </div>

      <div class="site-footer__links">
        <div>
          <p>Explore</p>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#community">Community</a>
          <a href="#insights">Insights</a>
        </div>
        <div>
          <p>Connect</p>
          <a href="https://github.com/Nebilux" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <button
            type="button"
            @click="$emit('pending', 'A public contact channel will be shared here soon.')"
          >
            Contact
          </button>
        </div>
      </div>
    </div>

    <div class="shell site-footer__bottom">
      <p>© {{ year }} Nebilux · 星云曜光</p>
      <button type="button" @click="$emit('privacy')">Privacy</button>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
</template>
