<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">推荐酒店</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOptions = {
        autoplay: false
    }
    const pages = computed( () => {
      const pages = []
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    })
    return { swiperOptions, pages }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl";
  @import "~@/assets/styles/mixins.styl";
  .icons >>> .swiper-container
    overflow : hidden
    height : 0
    padding-bottom : 50%
  .icons
    margin-top :.1rem
  .icon
    position : relative
    float : left
    padding-bottom : 25%
    width : 25%
    height : 0
    overflow : hidden
    .icon-img
      position :absolute
      top : 0
      left : 0
      right : 0
      bottom : .44rem
      box-sizing : border-box
      padding : .1rem
      .icon-img-content
        height : 100%
        display : block
        margin : 0 auto
    .icon-desc
      position :absolute
      left : 0
      right : 0
      bottom : 0
      line-height : .44rem
      height : .44rem
      text-align : center
      color : $darkTextColor
      ellipsis()
</style>
