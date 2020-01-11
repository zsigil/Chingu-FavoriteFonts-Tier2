<template lang="html">
  <div class="cards">
    <v-row justify="center">
      <v-col v-for="i in 12" :key="i"
        cols="12"
        :lg="calculatedcols ? calculatedcols : 3"
        :md="calculatedcols ? calculatedcols : 4"
      >
          <Card />
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .cards{
    margin: 0 40px;
  }
</style>
