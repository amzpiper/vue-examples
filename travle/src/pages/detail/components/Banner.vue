<template>
    <div>
        <div class="banner" @click="handleBnnerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                  {{this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe635;</span>
                    {{this.gallaryImgs.lenght}}
                </div>
            </div>
        </div>
        <fade-animation>
          <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBnnerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .banner
        position :relative
        overflow :hidden
        height :0
        padding-bottom :55%
        .banner-img
            width :100%
        .banner-info
            display :flex
            position :absolute
            right :0
            left :0
            bottom :0rem
            padding-bottom :.1rem
            line-height :.6rem
            color :#fff
            background-image :linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex :1
                height :.4rem
                font-size :.32rem
                padding :0 .2rem
            .banner-number
                margin-top :.1rem
                padding :0 .4rem
                height :.4rem
                line-height :.4rem
                border-radius :.2rem
                background :rgba(0,0,0,.8)
                font-size :.24rem
            .banner-icon
                font-size :.24rem
</style>
