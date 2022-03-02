<template>
  <div class="common__menu">
    <div class="common__brand-image-wrapper">
      <nuxt-link :to="homeRoute">
        <img
          class="common__brand-image"
          src="/img/brand/icon.png"
          alt="Icono La Mansión del Dragón"
        >
      </nuxt-link>
    </div>

    <div
      class="common__menu-body"
    >
      <div class="common__menu-body-links">
        <nuxt-link :to="homeRoute">
          Home
        </nuxt-link>
      </div>
      <div>
        <nuxt-link class="common__login" :to="authRoute">
          Acceder
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommonMenu',
  computed: {
    homeRoute (): string {
      return '/'
    },
    authRoute (): string {
      return '/auth'
    },
  },
})
</script>

<style lang="scss" scoped>
.common {
  &__menu {
    @apply relative flex-1 flex flex-col max-w-mobile-menu w-full pt-5 bg-base-25 border-r border-base-300
    transition-transform duration-200 transform translate-x-0;

    @screen md {
      @apply flex flex-row max-w-full border-none p-0;
    }
  }

  &__brand-image-wrapper {
    @apply flex-shrink-0 flex items-center px-4;
  }

  &__brand-image {
    @apply h-6 w-auto;
  }

  &__menu-body {
    @apply mt-5 flex-1 flex p-4 h-0 overflow-y-auto flex-col justify-between;

    @screen md {
      @apply gap-5 mt-0 p-5 h-auto flex-row;
    }
  }

  &__menu-body-links {
    @apply flex flex-col;

    @screen md {
      @apply flex-row gap-5;
    }
  }
}
</style>
