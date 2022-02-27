<template>
  <div class="top-bar">
    <button
      class="top-bar__open-side-bar-button"
      aria-label="Open sidebar"
      @click="toggleMenu"
    >
      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>

    <common-menu class="top-bar__menu" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommonMenu from '~/Modules/Shared/Infrastructure/Components/Layout/CommonMenu.vue'

export default Vue.extend({
  name: 'TopBar',
  components: { CommonMenu },
  methods: {
    toggleMenu () {
      this.$emit('on-toggle-menu')
    },
  },
})
</script>

<style scoped lang="scss">
.top-bar {
  @apply relative z-10 flex-shrink-0 flex h-16 bg-base-25 border-b border-base-300;

  @screen print {
    @apply hidden;
  }

  &__open-side-bar-button {
    @apply px-4 border-r border-base-200 text-base-500;

    @screen md {
      @apply hidden;
    }

    &:focus {
      @apply outline-none bg-base-100 text-base-500;
    }
  }

  &__menu {
    @apply hidden;

    @screen md {
      @apply visible;
    }
  }
}
</style>
