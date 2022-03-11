<template>
  <app-loader v-if="loading" />
  <div v-else>
    <div v-if="user">
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
      return this.$auth.user
    },
  },
  async created () {
    this.loading = true
    await this.$auth.fetchUser()
    this.$accessor.auth.fetchUser(this.$auth.user.id)

    this.loading = false
  },
})
</script>

<style scoped>

</style>
