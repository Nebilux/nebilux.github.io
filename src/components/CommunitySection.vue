<script setup lang="ts">
import { communityRoles } from '@/data/site'

defineEmits<{
  pending: [message: string]
}>()
</script>

<template>
  <section id="community" class="section community-section">
    <div class="community-section__glow" aria-hidden="true" />
    <div class="shell community-grid">
      <div class="community-orbit" data-reveal aria-hidden="true">
        <div class="community-orbit__ring community-orbit__ring--outer">
          <span v-for="index in 5" :key="index" :class="`point-${index}`" />
        </div>
        <div class="community-orbit__ring community-orbit__ring--inner" />
        <div class="community-orbit__core">
          <svg viewBox="0 0 42 42">
            <ellipse cx="21" cy="21" rx="18" ry="7.5" transform="rotate(-32 21 21)" />
            <path d="M16.2 27.8 22 13.7l3.8 9.1" />
            <circle cx="30.9" cy="14" r="2" />
          </svg>
        </div>
      </div>

      <div class="community-copy" data-reveal>
        <p class="kicker"><span>04</span> The Community</p>
        <h2>Meet the<br /><em>Nebilians</em></h2>
        <p class="community-copy__cn" lang="zh-CN">曜光行者</p>
        <p class="community-copy__lead">
          Different backgrounds. A shared curiosity for what remains unseen—and a desire to make something meaningful
          from it.
        </p>
        <p>
          Nebilians are people who explore carefully, create generously, and value the long view. They meet across
          disciplines not because they already agree, but because distinct perspectives help difficult questions become
          clearer.
        </p>
        <div class="role-list" aria-label="Community backgrounds">
          <span v-for="role in communityRoles" :key="role">{{ role }}</span>
        </div>
        <button
          class="text-link"
          type="button"
          @click="$emit('pending', 'The Nebilian channel will open with our first public programme.')"
        >
          Discover the community <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </section>
</template>
