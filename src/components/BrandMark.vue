<script setup lang="ts">
withDefaults(
  defineProps<{
    small?: boolean
  }>(),
  { small: false },
)
</script>

<template>
  <a class="brand" :class="{ 'brand--small': small }" href="#top" aria-label="Nebilux home">
    <svg class="brand__mark" viewBox="0 0 42 42" aria-hidden="true">
      <defs>
        <linearGradient id="brand-light" x1="6" y1="34" x2="36" y2="7" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6674ff" />
          <stop offset="0.52" stop-color="#8bbcff" />
          <stop offset="1" stop-color="#f6fbff" />
        </linearGradient>
      </defs>
      <circle cx="21" cy="21" r="16.5" stroke="currentColor" stroke-opacity=".2" />
      <ellipse cx="21" cy="21" rx="18" ry="7.5" transform="rotate(-32 21 21)" stroke="url(#brand-light)" />
      <path d="M16.2 27.8 22 13.7l3.8 9.1" stroke="url(#brand-light)" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="30.9" cy="14" r="2" fill="#eaf5ff" />
    </svg>
    <span class="brand__word">Nebilux</span>
  </a>
</template>
