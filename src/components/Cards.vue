<template lang="html">
  <div class="">
    <div v-if="fonts.length>0 && !$store.state.loading" class="cards">
      <v-row justify="center">
        <v-col v-for="(font,i) in fonts" :key="i"
          cols="12"
          :lg="calculatedcols ? calculatedcols : 3"
          :md="calculatedcols ? calculatedcols : 4"
        >
            <v-lazy>
              <Card :font="font" />
            </v-lazy>
        </v-col>
      </v-row>
    </div>
    <div v-if="$store.state.loading" class="loadingprogress">
      <v-progress-circular
         indeterminate
         color="primary"
         :width="7"
        :size="80"
       ></v-progress-circular>
    </div>
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
    margin: 12px 40px;
  }

  .loadingprogress{
    text-align: center;
    margin-top: 20vh;
  }
</style>
