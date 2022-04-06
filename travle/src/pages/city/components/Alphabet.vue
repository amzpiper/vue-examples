<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  name: 'CityAlphabet',
  components: {
  },
  mounted () {
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          console.log('startY' + this.startY)
          const touchY = e.touches[0].clientY - 84.5
          console.log('touchY' + touchY)
          const index = Math.floor((touchY - this.startY) / 20)
          console.log('index' + index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.list
    display :flex
    flex-direction column
    justify-content :center
    position :absolute
    top :1.7rem
    right :0
    bottom :0
    width :.4rem
    .item
        line-height :.44rem
        text-align :center
        color :$bgColor
</style>
