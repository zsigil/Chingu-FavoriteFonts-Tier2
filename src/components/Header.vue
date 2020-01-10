<template lang="html">
  <div class="mainheader">
    <v-row>
      <div class="logo">
        <router-link tag="div" :to="{ name: 'home'}"><span class="google">Google</span>Fonts</router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="navigationlinks" :class="{mobilenav: isMobile, show: showMobileNav}">
        <router-link :to="{ name: 'home'}">Catalog</router-link>
        <router-link :to="{ name: 'home'}">Featured</router-link>
        <router-link :to="{ name: 'home'}">Articles</router-link>
        <router-link :to="{ name: 'home'}">About</router-link>
      </div>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="showMobileNav=!showMobileNav"
      >
      </v-app-bar-nav-icon>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showMobileNav: false,
    }
  },
  computed:{
    isMobile(){
      if(this.$vuetify.breakpoint.mdAndUp){
        return false;
      }else{
        return true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo{
    margin-left: 20px;
    font-size: 1.5rem;
    color: #aaa;
    cursor: pointer;
    transition: all 0.4s ease;

    span{
      font-weight: bold;
    }

    &:hover{
      color: #111;
      transition: all 0.4s ease;
    }
  }

  .navigationlinks a{
    text-transform: uppercase;
    display: inline-block;
    padding: 5px;
    margin: 0 10px;
    text-decoration: none;
    color: #ccc;
    transition: all 0.4s ease;

    &:hover{
      color: #555;
      transition: all 0.4s ease;
    }
  }

  .mobilenav{
    display: flex;
    flex-direction: column;
    position: fixed;
    top:60px;
    right: -100px;
    transition: all 0.8s ease-out;
    z-index: 10;

    &.show{
      right:0;
      top: 60px;
      transition: all 0.8s ease-out;
    }
  }
</style>
