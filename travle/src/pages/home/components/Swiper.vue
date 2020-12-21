<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item of list"  :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOptions = {
      pagination: {
        el: '.swiper-pagination'
      }
    }
    const showSwiper = computed( () => props.list.length )
    return { swiperOptions,showSwiper }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        overflow : hidden
        width : 100%
        height : 0
        padding-bottom : 31.4%
        background-color : #eee
        .swiper-img
            width : 100%
</style>
