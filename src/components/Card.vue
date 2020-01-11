<template lang="html">
  <div class="fontcard" :class="{dark:$vuetify.theme.dark}">
    <v-row noGutters justify="space-between" class="cardheader">
      <v-col>
        {{fontName}}
      </v-col>
      <v-col class="text-right">
        <v-icon color="red">mdi-plus-circle-outline</v-icon>
      </v-col>
    </v-row>
    <v-row  :style="{fontSize:fontSize}" class="displaytext">
      <v-col>
        {{displaytext}}
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  props:['fontName'],
  computed:{
    displaytext(){
      if (this.$store.state.displaytext.length>0) {
        //maxlength 80 char
        return this.$store.state.displaytext.substr(0,80)
      }else{
        return 'Then came the night for the first falling star.'
      }
    },
    fontSize(){
      return this.$store.state.fontSize
    },
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
