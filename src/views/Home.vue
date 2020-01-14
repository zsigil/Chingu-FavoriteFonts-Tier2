<template>
  <div class="home">
    <MajorNavigation />
    <Cards />
  </div>
</template>

<script>
import MajorNavigation from '@/components/MajorNavigation.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  components: {
    MajorNavigation,
    Cards
  },
  computed:{

  },
}
</script>

<style lang="scss">

</style>
