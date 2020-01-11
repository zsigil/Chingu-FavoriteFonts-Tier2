<template>

  <v-app>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app :dark="dark">
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

    <div v-if="showButton" class="scrollButton">
      <v-icon
         @click="scrollUp"
         :color="scrollButtonColor"
      >mdi-arrow-up-circle
      </v-icon>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  computed:{
    dark(){
      return this.$store.state.darkmode;
    }
  },
  methods:{
    showScrollButton(){
      window.onscroll = () => {
        if(document.documentElement.scrollTop < 230){
          this.showButton = false;
        }
        else{
          this.showButton = true;
        }
      }
    },
    scrollUp(){
      this.scrollButtonColor = 'black';
      this.$vuetify.goTo(0, {duration:800, easing: 'easeInOutCubic'});
      setTimeout(()=>{
        this.scrollButtonColor = 'grey';
      }, 800)
    }
  },
  data: () => ({
    showButton: false,
    scrollButtonColor: 'grey',
  }),
  mounted(){
    this.showScrollButton();
  }
};
</script>

<style lang="scss" scoped>
.container{
  padding: 0;
}
.footer__item{
  @media(min-width:960px){
    display: inline-block;
    padding: 0 3px;
  }
}

.scrollButton{
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
}
</style>
