<template>
    <div class="app-menu">
      <div class="header">
        <i class="material-icons">place</i>
        GeoBlog
      </div>
      <div class="user">
        <div class="info" v-if="user">
          <span class="picture" v-if="userPicture">
            <img :src="userPicture" alt="userImage" />
          </span>
          <span class="username">{{user.profile.displayName}}</span>
        </div>
        <a @click="centerOnUser">
          <i class="material-icons">my_location</i>
        </a>
        <a @click="logout">
          <i class="material-icons">power_setting_new</i>
        </a>
      </div>
    </div>

</template>

<script>
    export default {
        name: "AppMenu",
        computed: {
            user() {
              return this.$store.state.user
            },
            userPicture() {
              return null // TODO
            },
        },
        methods: {
            centerOnUser() {
              // TODO
            },
            logout() {
                // TODO
            },
        },
    }
</script>

<style scoped>

</style>
