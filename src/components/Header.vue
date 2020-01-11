<template lang="html">
  <div class="mainheader">
    <v-row justify="space-between" noGutters>
      <v-col cols="12" md="3" class="logo" :class="{dark:$vuetify.theme.dark}">
        <router-link tag="div" :to="{ name: 'home'}"><span class="google">Google</span>Fonts</router-link>
      </v-col>

      <v-col cols="12" md="5" class="navigationlinks" :class="{mobilenav: isMobile, dark:$vuetify.theme.dark}">
        <router-link :to="{ name: 'home'}">Catalog</router-link>
        <router-link :to="{ name: 'home'}">Featured</router-link>
        <router-link :to="{ name: 'home'}">Articles</router-link>
        <router-link :to="{ name: 'home'}">About</router-link>
      </v-col>
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
  .mainheader{
    padding: 16px 30px 10px 40px;
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
  }
  .logo{
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

    &.dark:hover{
      color: #eee;
      transition: all 0.4s ease;
    }
  }


  .navigationlinks a{
    text-transform: uppercase;
    display: inline-block;
    padding: 4px;
    margin: 0 5px;
    text-decoration: none;
    color: #ccc;
    transition: all 0.4s ease;
    font-size: 1rem;

    &:hover{
      color: #555;
      transition: all 0.4s ease;
    }
  }

  .navigationlinks.dark a:hover{
    color: #fff;
    transition: all 0.4s ease;
  }

  .mobilenav a{
    padding: 5px;
    margin: 0px;
    font-size: 0.75rem;
  }

  .navigationlinks{
    text-align: right;
  }

  .mobilenav{
    text-align: left;
  }

</style>
