<script setup lang="ts">
defineEmits<{
  pending: [message: string]
}>()
</script>

<template>
  <section class="cta-section">
    <div class="cta-section__orb" aria-hidden="true" />
    <div class="cta-section__lines" aria-hidden="true" />
    <div class="shell cta-section__content" data-reveal>
      <p class="kicker kicker--center"><span>05</span> Begin Here</p>
      <h2>Find Your Light<br />in the <em>Unknown.</em></h2>
      <p>Bring your questions, your craft, and your willingness to build beyond the obvious.</p>
      <button
        class="button button--primary button--large"
        type="button"
        @click="$emit('pending', 'The Nebilian channel will open with our first public programme.')"
      >
        Become a Nebilian
        <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 9h10m-4-4 4 4-4 4" /></svg>
      </button>
    </div>
  </section>
</template>
