<template>
    <div>
       <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont header-abs-back">&#xe658;</span>
       </router-link>
       <div class="header-fixed"  v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <span class="iconfont header-fixed-back">&#xe658;</span>
            </router-link>
           经典详情
       </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue'

export default {
  name: 'DetailHeader',
  props: {
  },
  setup () {
      const showAbs = ref(true)
      const opacityStyle = reactive({
        opacity: 0
      })

      function headelScroll () {
        // 兼容性
        const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if (top > 50) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          opacityStyle.opacity = opacity
          showAbs.value = false
        } else {
          showAbs.value = true
        }
      }

      onMounted( () => {
        window.addEventListener('scroll', headelScroll)
      })

      onUnmounted( () => {
        window.removeEventListener('scroll', headelScroll)
      })

      return { showAbs, opacityStyle, headelScroll }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.header-abs
    background :rgba(0,0,0,0.8)
    width :$headerHeight
    height :$headerHeight
    position :absolute
    left :.1rem
    top :.1rem
    line-height :$headerHeight
    text-align :center
    border-radius :.4rem
    .header-abs-back
        color :#fff
        font-size :.4rem
.header-fixed
    z-index :2
    position :fixed
    top :0
    left :0
    right :0
    width :100%
    height :.8rem
    line-height :.8rem
    text-align :center
    color :#fff
    background-color :$bgColor
    .header-fixed-back
        color :#fff
        position :absolute
        top :0
        left :0
        width :.64rem
        text-align :center
</style>
