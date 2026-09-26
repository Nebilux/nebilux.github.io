<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref<HTMLDialogElement | null>(null)

const open = () => dialog.value?.showModal()
const close = () => dialog.value?.close()
const closeFromBackdrop = (event: MouseEvent) => {
  if (event.target === dialog.value) close()
}

defineExpose({ open })
</script>

<template>
  <dialog ref="dialog" class="privacy-dialog" aria-labelledby="privacy-title" @click="closeFromBackdrop">
    <div class="privacy-dialog__inner">
      <button class="privacy-dialog__close" type="button" aria-label="Close privacy notice" @click="close">×</button>
      <p class="kicker"><span>Privacy</span> A quiet website</p>
      <h2 id="privacy-title">Built to respect your attention.</h2>
      <p>
        This website does not use analytics, advertising trackers, or marketing cookies. It does not collect personal
        information through forms.
      </p>
      <p>
        If those practices change as Nebilux grows, this notice will be updated clearly before new collection begins.
      </p>
      <button class="button button--ghost" type="button" @click="close">Understood</button>
    </div>
  </dialog>
</template>
