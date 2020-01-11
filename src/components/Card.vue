<template lang="html">
  <div class="fontcard" :style="{fontSize:fontSize}">
    {{displaytext}}
  </div>
</template>

<script>
export default {
  computed:{
    displaytext(){
      if (this.$store.state.displaytext.length>0) {
        return this.$store.state.displaytext
      }else{
        return 'Basic text for lazy writers.'
      }
    },
    fontSize(){
      return this.$store.state.fontSize
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
