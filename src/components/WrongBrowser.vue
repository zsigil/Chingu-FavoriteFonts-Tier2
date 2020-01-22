<template lang="html">
  <div class="text-center">
  <v-bottom-sheet v-model="sheet" persistent>
    <v-sheet class="text-center" height="200px">
      <v-btn
        class="mt-6"
        color="error"
        @click="sheet = !sheet"
      >I understand</v-btn>
      <div class="py-3">
        It seems you are using Internet Explorer 9, 10, 11 / Safari9. For the best user experience,
        please consider using Chrome or Firefox.
      </div>
    </v-sheet>
  </v-bottom-sheet>
</div>
</template>

<script>
export default {
  data(){
    return {
      sheet: true,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
