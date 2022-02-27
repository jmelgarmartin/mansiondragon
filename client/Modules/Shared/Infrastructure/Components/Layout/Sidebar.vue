<template>
  <div
    class="sidebar__off-canvas"
    :class="{
      'sidebar__off-canvas--hidden': !showInMobileResolution
    }"
  >
    <div
      class="sidebar__backdrop-wrapper"
    >
      <div
        class="sidebar__backdrop"
        :class="{
          'sidebar__backdrop--hidden': !showInMobileResolution
        }"
        @click="toggleMenu"
      />
    </div>

    <div
      class="sidebar__close-button-wrapper"
    >
      <button
        class="sidebar__close-button"
        :class="{
            'sidebar__close-button--hidden': !showInMobileResolution
          }"

        aria-label="Close sidebar"
        @click="toggleMenu"
      >
        <svg class="sidebar__close-button__icon" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="sidebar__menu">
      <div class="sidebar__brand-image-wrapper">
        <img
          class="sidebar__brand-image"
          src="/img/brand/icon.png"
          alt="Icono La Mansión del Dragón"
        >
      </div>

      <span
        class="sidebar__menu-body"
      >
        Home
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'SidebarLayout',
  props: {
    showInMobileResolution: {
      type: Boolean,
      required: false,
      default: false,
    } as PropOptions<boolean>,
  },
  methods: {
    toggleMenu () {
      this.$emit('on-toggle-menu')
    },
  },
})
</script>

<style scoped lang="scss">
.sidebar {
  &__off-canvas {
    @apply fixed inset-0 flex z-40 transition-visibility duration-200;

    &--hidden {
      @apply invisible;
    }

    @screen print {
      @apply hidden;
    }
  }

  &__menu {
    @apply relative flex-1 flex flex-col max-w-mobile-menu w-full pt-5 bg-base-25 border-r border-base-300
    transition-transform duration-200 transform translate-x-0;

    @screen md {
      @apply max-w-desktop-menu;
    }

    &--hidden {
      @apply -translate-x-full;

      @screen md {
        @apply translate-x-0 transition-none;
      }
    }
  }

  &__close-button-wrapper {
    @apply absolute top-0 right-0 -mr-0 p-2 z-10;
  }

  &__close-button {
    @apply flex items-center justify-center h-12 w-12 rounded-full transition duration-200;

    &:focus {
      @apply outline-none bg-base-600;
    }

    &--hidden {
      @apply opacity-0;
    }

    &__icon {
      @apply h-6 w-6 text-base-300;
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

  &__backdrop-wrapper {
    @apply fixed inset-0;

    @screen md {
      @apply w-desktop-menu;
    }
  }

  &__backdrop {
    @apply absolute inset-0 bg-base-600 opacity-75 transition-opacity duration-200;

    @screen md {
      @apply hidden;
    }

    &--hidden {
      @apply opacity-0;
    }
  }
}
</style>
