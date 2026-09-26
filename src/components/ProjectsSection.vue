<script setup lang="ts">
import { projects } from '@/data/site'
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="shell">
      <div class="section-heading section-heading--row" data-reveal>
        <div>
          <p class="kicker"><span>03</span> Selected Directions</p>
          <h2>Work Taking<br /><em>Shape</em></h2>
        </div>
        <p class="section-intro">
          Our project catalogue is forming. These spaces mark the kinds of enduring work Nebilux is here to pursue.
        </p>
      </div>

      <div class="projects-grid">
        <article v-for="(project, index) in projects" :key="project.title" class="project-card" data-reveal>
          <div class="project-card__visual" :class="`project-visual--${project.visual}`" aria-hidden="true">
            <div class="visual-grid" />
            <div class="visual-shape"><span /><i /><b /></div>
            <span class="project-card__index">0{{ index + 1 }}</span>
          </div>
          <div class="project-card__body">
            <p class="project-card__kind"><span />{{ project.kind }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-card__tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>

      <p class="projects-note" data-reveal>
        Details will be published as each initiative reaches a useful, shareable state.
      </p>
    </div>
  </section>
</template>
