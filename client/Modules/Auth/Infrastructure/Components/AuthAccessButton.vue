<template>
  <button v-if="!$auth.loggedIn" @click="loginWithDiscord">
    Acceder
  </button>
  <div v-else>
    {{ $auth.user.username }}
    <button @click="logout">
      Logout
    </button>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AuthAccessButton',
  methods: {
    loginWithDiscord (): void {
      this.$auth.loginWith('discord')
    },
    logout (): void {
      this.$auth.logout('discord')
      window.location.assign('/')
    },
  },
})
</script>

<style lang="scss" scoped>
</style>
