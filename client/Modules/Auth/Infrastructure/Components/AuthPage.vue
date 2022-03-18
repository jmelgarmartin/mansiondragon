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
      return this.$accessor.user.user
    },
    isUserConnected () {
      return this.$accessor.user.isUserConnected
    },
  },
  async created () {
    this.loading = true
    await this.$auth.fetchUser()
    await this.$accessor.user.fetchUser(this.$auth.user.id)
    if (!this.isUserConnected) {
      await this.$accessor.user.registerUser({ userId: this.$auth.user.id, name: this.$auth.user.username })
    }
    this.loading = false

    window.location = '/'
  },
})
</script>

<style scoped>

</style>
