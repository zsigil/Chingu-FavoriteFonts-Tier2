<template>

  <v-app>

    <v-content>
      <v-container fluid>
        <Header />
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>

    <v-footer app :dark="dark" padless>
      <v-col class="text-center">
        <div class="footer__item">
          coded by <router-link :to="{name: 'about'}">IldikoZsigmond</router-link>
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
import Header from '@/components/Header.vue'

export default {
  name: 'App',

  components: {
    Header,
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
  created(){
    this.$store.dispatch('loadFonts');
    this.$store.dispatch('checkLocalStorage');
  },
  mounted(){
    this.showScrollButton();
  }
};
</script>

<style lang="scss" scoped>
.container{
  padding: 0;
  max-width: 1500px;
}
.footer__item{

  a{
    text-decoration: none;
  }

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

.fade{
  &-enter{
    opacity: 0
  }
  &-enter-active{
    transition: all 1.3s ease;
  }
}
</style>
