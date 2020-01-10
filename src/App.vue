<template>

  <v-app>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <v-col class="text-center">
        <div class="footer__item">
          coded by IldikoZsigmond
        </div>
        <div class="footer__item d-none d-md-inline-block">
          |
        </div>
        <div class="footer__item">
          {{new Date().getFullYear()}}
        </div>
        <div class="footer__item d-none d-md-inline-block">
          |
        </div>
        <div class="footer__item">
          Chingu Pre-Work Project
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.footer__item{
  @media(min-width:960px){
    display: inline-block;
    padding: 0 3px;
  }
}
</style>
