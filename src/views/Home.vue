<template>
  <div class="home">
    <Header />
    <MajorNavigation />
    <Cards />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MajorNavigation from '@/components/MajorNavigation.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  components: {
    Header,
    MajorNavigation,
    Cards
  }
}
</script>
