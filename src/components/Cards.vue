<template lang="html">
  <div v-if="fonts.length>0" class="cards">
    <v-row justify="center">
      <v-col v-for="(font,i) in fonts" :key="i"
        cols="12"
        :lg="calculatedcols ? calculatedcols : 3"
        :md="calculatedcols ? calculatedcols : 4"
      >
          <Card :fontName="font.family" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components:{
    Card,
  },
  computed:{
    calculatedcols(){
      if (this.$store.state.listView) {
        return 12
      }else{
        return false
      }
    },
    fonts(){
      return this.$store.getters.fonts(this.$store.state.searched)
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
  .cards{
    margin: 0 40px;
  }
</style>
