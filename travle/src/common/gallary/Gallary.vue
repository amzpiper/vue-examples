<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
             <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        type: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .container >>> .swiper-container
        overflow :inherit
    .container
        display :flex
        flex-direction :column
        justify-content :center
        z-index :99
        position :fixed
        left :0
        right :0
        top :0
        bottom :0
        background :rgba(0,0,0,1)
        .wrapper
            width :100%
            position :fixed
            left :0
            right :0
            top :50%
            margin-top :-40%
            bottom :0
            max-height :50%
            overflow :hidden
            .gallary-img
                overflow :hidden
                padding-bottom :100%
                width :100%
                height :100%
</style>
