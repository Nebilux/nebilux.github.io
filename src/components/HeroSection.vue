<script setup lang="ts">
defineEmits<{
  pending: [message: string]
}>()
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__nebula" aria-hidden="true" />
    <div class="hero__vignette" aria-hidden="true" />
    <div class="hero__stars" aria-hidden="true" />

    <div class="hero__orbit hero__orbit--one" aria-hidden="true">
      <span />
    </div>
    <div class="hero__orbit hero__orbit--two" aria-hidden="true">
      <span />
    </div>

    <div class="hero__content shell">
      <div class="hero__eyebrow hero-enter">
        <span class="signal-dot" />
        An open organization for what comes next
      </div>
      <h1 class="hero__title hero-enter">
        Illuminate<br />
        <span>the Unknown.</span>
      </h1>
      <p class="hero__lead hero-enter">
        We explore emerging ideas, build enduring tools, and turn uncertainty into possibility.
      </p>
      <p class="hero__lead-cn hero-enter" lang="zh-CN">探索新思想，构建长期工具，让未知成为可能。</p>

      <div class="hero__actions hero-enter">
        <a class="button button--primary" href="#projects">
          Explore Our Work
          <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 9h10m-4-4 4 4-4 4" /></svg>
        </a>
        <button
          class="button button--ghost"
          type="button"
          @click="$emit('pending', 'The Nebilian channel will open with our first public programme.')"
        >
          Join the Nebilians
        </button>
      </div>
    </div>

    <a class="hero__scroll" href="#about" aria-label="Scroll to learn more">
      <span>Scroll to discover</span>
      <i aria-hidden="true" />
    </a>
  </section>
</template>
