<template lang="html">
  <div class="majornavigation">
    <v-row noGutters align="center" justify="space-around">
      <v-col cols="6" md="3" class="searchfonts">
        <input
          placeholder="Search fonts"
          v-model="searchtext"
          :class="{dark:$vuetify.theme.dark}"
        />
      </v-col>

      <v-col cols="12" md="3" class="displaytext d-none d-md-block">
        <input
          placeholder="Type something"
          v-model="displaytext"
        />
      </v-col>

      <v-col cols="12" md="1" class="sizeselect d-none d-md-block">

        <!-- size selection menu -->
        <v-menu
          v-model="openSelectMenu"
          absolute
          close-on-click
          close-on-content-click
          min-width="80"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <div class="selectedSize" v-on="on">
              {{selectedSize}}
            </div>
          </template>
          <div>
            <v-card class="sizelist">
              <div
                v-for="(size, index) in fontsizes"
                :key="index"
                @click="$store.dispatch('setFontSize', size)"
              >
                <div >
                  <v-icon v-if="$store.state.fontSize===size"
                  color="#fff"
                  >mdi-check</v-icon>
                  {{ size }}
                </div>
              </div>
            </v-card>
          </div>
        </v-menu>


      </v-col>



      <v-col cols="4" md="2" class="d-none d-md-block">
        <v-icon
          @click="setDark('true')">
          mdi-circle
        </v-icon>
        <v-icon
          @click="setDark('false')">
          mdi-circle-outline
        </v-icon>
      </v-col>
      <v-col cols="4" md="1" class="d-none d-md-block">
        <v-icon
          v-if="!$store.state.listView"
          @click="$store.dispatch('setListView', true)"
        >mdi-view-list</v-icon>
        <v-icon
          v-else
          @click="$store.dispatch('setListView', false)"
        >mdi-apps</v-icon>
      </v-col>
      <v-col cols="2" md="1">
        <v-icon>mdi-replay</v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchtext: '',
      fontsizes: ['16px', '24px', '32px', '40px'],
      openSelectMenu: false,
    }
  },
  methods:{
    setDark(mode){
      if (mode==='true') {
        this.$vuetify.theme.dark = true;
      }else{
        this.$vuetify.theme.dark = false;
      }

    },
  },
  computed:{
    displaytext: {
      get: function(){
        return this.$store.state.displaytext;
      },
      set: function(v){
        this.$store.dispatch('setDisplayText', v);
      }
    },
    selectedSize: {
      get: function(){
        return this.$store.state.fontSize;
      },
      set: function(v){
        this.$store.dispatch('setFontSize', v);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.majornavigation{
  border: 1px solid #ccc;
  margin: 0 30px;
  padding: 0px 15px;
  border-radius: 16px;
  text-align: center;

  &>.row{
    padding: 5px;
  }

  div[class^="col"], div[class*="col"]{
    // padding-top: 8px;
  }

  input{
    @media(max-width:600px){
      width:100%;
    }

    @media(min-width:960px){
      width:100%;
    }
  }

  input.dark::placeholder{
    color: #fff;
  }

  .selectedSize{
    &:hover{
      cursor: pointer;
    }
  }
}

.v-card.sizelist.v-card.sizelist{
  padding: 5px;
  text-align: right;
  border-radius: 10px;

  &.theme--light{
    background-color: #bbb;
    color: #fff;
  }
}
</style>
