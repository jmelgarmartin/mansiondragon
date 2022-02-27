<template>
  <base-layout>
    <sidebar
      slot="sidebar"
      :show-in-mobile-resolution="showMenuInMobile"
      @on-toggle-menu="showMenuInMobile = !showMenuInMobile"
    />
    <top-bar
      slot="topbar"
      @on-toggle-menu="showMenuInMobile = !showMenuInMobile"
    />
    <div slot="content">
      <nuxt />
    </div>
  </base-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseLayout from '~/Modules/Shared/Infrastructure/Components/Layout/BaseLayout.vue'
import TopBar from '~/Modules/Shared/Infrastructure/Components/Layout/TopBar.vue'
import Sidebar from '~/Modules/Shared/Infrastructure/Components/Layout/Sidebar.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    BaseLayout,
    TopBar,
    Sidebar,
  },
  data () {
    return {
      showMenuInMobile: false,
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: 'es',
      },
    }
  },
})
</script>
