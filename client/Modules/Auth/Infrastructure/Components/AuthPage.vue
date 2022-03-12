<template>
  <app-loader v-if="loading" />
  <div v-else>
    <div v-if="isUserConnected">
      {{ user }}
      Post login :D
    </div>
    <div v-else>
      AAAA
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AppLoader from '~/Modules/Shared/Infrastructure/Components/Layout/AppLoader'

export default Vue.extend({
  name: 'AuthPage',
  components: { AppLoader },
  data () {
    return {
      loading: false,
    }
  },
  computed: {
    user () {
      return this.$accessor.auth.user
    },
    isUserConnected () {
      return this.$accessor.auth.isUserConnected
    },
  },
  async created () {
    this.loading = true
    await this.$auth.fetchUser()
    this.$accessor.auth.fetchUser(this.$auth.user.id)
    if (!this.isUserConnected) {
      this.$accessor.auth.registerUser(this.$auth.user.id, this.$auth.user.username)
    }
    this.loading = false
  },
})
</script>

<style scoped>

</style>
