<template>
  <div class="common__menu">
    <div class="common__brand-image-wrapper">
      <img
        class="common__brand-image"
        src="/img/brand/icon.png"
        alt="Icono La Mansión del Dragón"
      >
    </div>

    <span
      class="common__menu-body"
    >
      Home
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommonMenu',
})
</script>

<style lang="scss" scoped>
.common {
  &__menu {
    @apply relative flex-1 flex flex-col max-w-mobile-menu w-full pt-5 bg-base-25 border-r border-base-300
    transition-transform duration-200 transform translate-x-0;

    @screen md {
      @apply flex-row max-w-desktop-menu;
    }

    &--hidden {
      @apply -translate-x-full;

      @screen md {
        @apply translate-x-0 transition-none;
      }
    }
  }

  &__brand-image-wrapper {
    @apply flex-shrink-0 flex items-center px-4;
  }

  &__brand-image {
    @apply h-6 w-auto;
  }

  &__menu-body {
    @apply mt-5 flex-1 p-4 h-0 overflow-y-auto;
  }
}
</style>
