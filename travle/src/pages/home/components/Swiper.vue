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
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
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
