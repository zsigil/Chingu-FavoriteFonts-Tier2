<template lang="html">
  <div class="fontcard" :class="{dark:$vuetify.theme.dark}">
    <v-row noGutters justify="space-between" class="cardheader">
      <v-col>
        {{font.family}}
      </v-col>
      <v-col cols="2" class="text-right">
        <v-icon
          @click="addFont(font)"
          color="red">mdi-plus-circle-outline</v-icon>
      </v-col>
    </v-row>
    <v-row :style="{fontSize:fontSize, fontFamily:`${font.family}, sans-serif`}" class="displaytext">
      <v-col>
        <span v-if="timeToDisplay"></span>{{displaytext}}
      </v-col>
    </v-row>

  </div>
</template>

<script>


export default {
  props:['font'],
  data(){
    return{
      timeToDisplay: false
    }
  },
  computed:{
    displaytext(){
      if (this.$store.state.displaytext.length>0) {
        //maxlength 50 char
        return this.$store.state.displaytext.substr(0,50)
      }else{
        return 'Then came the night for the first falling star.'
      }
    },
    fontSize(){
      return this.$store.state.fontSize
    },
    stylesheetSrc(){
      let name = this.font.family
      let variant = this.font.variants.includes("regular") ? "regular" : this.font.variants[0];
      if (this.font.family.split(' ').length>0) {
        name = this.font.family.split(' ').join('+')
      }
      if (variant=="regular") {
        return `https://fonts.googleapis.com/css?family=${name}&display=swap`
      }
      else return `https://fonts.googleapis.com/css?family=${name}:${variant}&display=swap`
    }
  },
  methods:{
    addFont(font){
      this.$store.dispatch('addFont', font.family)
    }
  },
  head:{
    link(){
      return [
        {
        rel: 'stylesheet',
        href: this.stylesheetSrc,
        undo: false,
        type: 'text/css',
        }
      ]
    }
  },
  created: function () {
    this.$on('okHead', function () {
      this.timeToDisplay = true;
    });
  }
}
</script>
<style lang="scss" scoped>

.fontcard {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid black;
  min-height: 150px;

  &.dark{
    border-color: #fff;
  }
}

.cardheader{
  margin-top: 10px;
}

.displaytext{
  margin-top: 20px;
  word-wrap: break-word;
}
</style>
