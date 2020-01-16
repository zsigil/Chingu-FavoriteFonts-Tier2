<template lang="html">
  <div class="starprogress" :class="{dark:$vuetify.theme.dark}">
    <div class="star">
      <v-icon>mdi-star</v-icon>
    </div>
    <div class="star">
      <v-icon>mdi-star</v-icon>
    </div>
    <div class="star">
      <v-icon>mdi-star</v-icon>
    </div>
    <div class="star">
      <v-icon>mdi-star</v-icon>
    </div>
    <div class="star">
      <v-icon>mdi-star</v-icon>
    </div>
  </div>
</template>

<script>
import {gsap} from 'gsap';


export default {
  mounted(){
    let tl = gsap.timeline()
    tl.to('.star .mdi-star',
      {
        rotation: 360,
        duration:1.5,
        x: 0,
        stagger: 0.35,
        repeat: -1,
        repeatDelay: 0.3,
        yoyo: true,
        opacity: 1,
      }
    );
  }
}
</script>

<style lang="scss" scoped>
.starprogress{
  display: flex;
  flex-direction: column;

  .mdi-star{
    color: black;
    margin: 5px 0;
    transform: translateX(-50px);
    opacity: 0;
  }

  &.dark .mdi-star{
    color: #fff;
  }
}
</style>
