<script setup lang="ts">
import { principles } from '@/data/site'
</script>

<template>
  <section id="insights" class="section principles-section">
    <div class="shell">
      <div class="section-heading section-heading--row" data-reveal>
        <div>
          <p class="kicker"><span>02</span> Guiding Principles</p>
          <h2>How We Move<br />Through the <em>Unknown</em></h2>
        </div>
        <p class="section-intro">Four principles keep our work open, clear, generous, and built for the long horizon.</p>
      </div>

      <div class="principles-grid">
        <article v-for="principle in principles" :key="principle.number" class="principle-card" data-reveal>
          <div class="principle-card__top">
            <span class="principle-card__number">{{ principle.number }}</span>
            <span class="principle-glyph" :class="`principle-glyph--${principle.glyph}`" aria-hidden="true">
              <i />
            </span>
          </div>
          <h3>{{ principle.title }}</h3>
          <p class="principle-card__cn" lang="zh-CN">{{ principle.chinese }}</p>
          <p>{{ principle.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
