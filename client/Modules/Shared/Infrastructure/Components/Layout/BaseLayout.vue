<template>
  <div class="base-layout">
    <slot name="sidebar" />

    <div class="base-layout__body">
      <slot name="topbar" />
      <main class="base-layout__content" tabindex="0">
        <slot name="content" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseLayout',
})
</script>

<style scoped lang="scss">
.base-layout {
  @apply h-screen flex overflow-hidden bg-base-50;

  @screen print {
    @apply h-auto overflow-visible m-0 bg-transparent;
  }

  &__body {
    @apply flex flex-col w-0 flex-1 overflow-hidden;

    @screen print {
      @apply overflow-visible;
    }
  }

  &__content {
    @apply flex-1 overflow-y-auto py-6 px-4;

    &:focus {
      @apply outline-none;
    }

    @screen print {
      @apply overflow-visible p-0;
    }
  }
}
</style>
